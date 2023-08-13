import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import supplier from "../../storage/supplier.json";
import ComponentTable from "../../components/common/Table";

const SupplierPage = () => {
  const [table, setTable] = useState({
    th: ["No", "Nama", "Alamat", "Status", "Action"],
    tb: [],
  });

  useEffect(() => {
    if (supplier) {
      const tb = [];
      supplier.supplier.map((row, idx) => {
        const temp = [];
        temp.push(idx + 1);
        temp.push(row.name);
        temp.push(row.address);
        temp.push(row.status == 1 ? "Aktif" : "Tidak Aktif");
        temp.push("");
        tb.push(temp);
      });
      setTable({ ...table, tb });
    }
  }, [supplier]);
  return (
    <Layout title="Supplier">
      <div className="d-flex flex-row-reverse w-100">
        <button type="button" className="btn btn-success fw-semibold">
          Tambah
        </button>
      </div>
      <ComponentTable table={table} />
    </Layout>
  );
};

export default SupplierPage;
