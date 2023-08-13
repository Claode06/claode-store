import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ComponentTable from "../../components/common/Table/index";
import customer from "../../storage/customer.json";

const CustomerPage = () => {
  const [table, setTable] = useState({
    th: ["No", "Customer Code", "Nama", "Member", "Action"],
    tb: [],
  });

  useEffect(() => {
    if (customer) {
      const tb = [];
      customer.customer.map((row, idx) => {
        const temp = [];
        temp.push(idx + 1);
        temp.push(row.code);
        temp.push(row.name);
        temp.push(row.member.name);
        temp.push("");
        tb.push(temp);
      });
      setTable({ ...table, tb });
    }
  }, [customer]);

  return (
    <Layout title="Customer">
      <div className="d-flex flex-row-reverse w-100">
        <button type="button" className="btn btn-success fw-semibold">
          Tambah
        </button>
      </div>
      <ComponentTable table={table} />
    </Layout>
  );
};

export default CustomerPage;
