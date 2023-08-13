import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import supplier from "../../storage/supplier.json";
import ComponentTable from "../../components/common/Table";
import ButtonView from "../../components/common/Button/buttonView";
import ButtonEdit from "../../components/common/Button/buttonEdit";
import ButtonDelete from "../../components/common/Button/buttonDelete";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { getDefaultNormalizer } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import ModalDialog from "../../components/common/Modal";
import DetailSupplier from "./detailSupplier";
import Pagination from "../../components/common/Table/pagination";

const SupplierPage = () => {
  const [table, setTable] = useState({
    th: ["No", "Nama", "Alamat", "Status", "Action"],
    tb: [],
  });
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  const [detailData, setDetailData] = useState();
  const url = new URLSearchParams(window.location.search);
  const page = url.get("page");
  const limit = url.get("limit");

  const navigate = useNavigate();

  async function getListData() {
    // Get data dari api
    // setLoading(true);
    // try {
    //   const res = await api.get(`/supplier?limit=${limit}&page=${page}`);
    //   setListData(res.data.data);
    // } catch (err) {
    //   toast.error(err.message);
    // } finally {
    //   setLoading(false);
    // }
  }

  async function handleDelete(id) {
    if (window.confirm("Yakin ingin hapus ?")) {
      // setLoadingDelete(true);
      // try {
      //   await api.delete(`/supplier`);
      //   getListData();
      // } catch (err) {
      //   toast.error(err.message);
      // } finally {
      //   setLoadingDelete(false);
      // }
    }
  }

  function handleDetail(data) {
    setDetailData(data);
    setView(true);
  }

  useEffect(() => {
    if (supplier) {
      const tb = [];
      supplier.supplier.map((row, idx) => {
        const temp = [];
        temp.push(idx + 1);
        temp.push(row.name);
        temp.push(row.address);
        temp.push(row.status == 1 ? "Aktif" : "Tidak Aktif");
        temp.push(
          <div className="d-flex gap-1 align-items-center">
            <DetailSupplier data={row} />
            <ButtonEdit
              onClick={() => {
                navigate(`/supplier/edit/${row.id}`);
              }}
            />
            <ButtonDelete
              onClick={() => handleDelete(row.id)}
              disabled={loadingDelete}
            />
          </div>
        );
        tb.push(temp);
      });
      setTable({ ...table, tb });
    }
  }, [supplier]);
  return (
    <Layout title="Supplier">
      <div className="d-flex flex-row-reverse w-100">
        <button
          onClick={() => {
            navigate("/supplier/create");
          }}
          type="button"
          className="btn btn-success fw-semibold"
        >
          Tambah
        </button>
      </div>
      <ComponentTable table={table} />
      <div className="mt-4">
        <Pagination />
      </div>
    </Layout>
  );
};

export default SupplierPage;
