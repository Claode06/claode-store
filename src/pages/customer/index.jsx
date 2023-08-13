import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ComponentTable from "../../components/common/Table/index";
import customer from "../../storage/customer.json";
import ButtonView from "../../components/common/Button/buttonView";
import ButtonEdit from "../../components/common/Button/buttonEdit";
import ButtonDelete from "../../components/common/Button/buttonDelete";
import ModalDialog from "../../components/common/Modal";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/common/Table/pagination";

const CustomerPage = () => {
  const [table, setTable] = useState({
    th: ["No", "Customer Code", "Nama", "Member", "Action"],
    tb: [],
  });
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = new URLSearchParams(window.location.search);
  const page = url.get("page");
  const limit = url.get("limit");

  async function getListData() {
    // Get data dari api
    // setLoading(true);
    // try {
    //   const res = await api.get(`/customer?limit=${limit}&page=${page}`);
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
      //   await api.delete(`/customer`);
      //   getListData();
      // } catch (err) {
      //   toast.error(err.message);
      // } finally {
      //   setLoadingDelete(false);
      // }
    }
  }

  useEffect(() => {
    if (customer) {
      const tb = [];
      customer.customer.map((row, idx) => {
        const temp = [];
        temp.push(idx + 1);
        temp.push(row.code);
        temp.push(row.name);
        temp.push(row.member.name);
        temp.push(
          <div className="d-flex gap-1 align-items-center">
            <ButtonView />
            <ButtonEdit
              onClick={() => {
                navigate(`/customer/edit/${row.id}`);
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
  }, [customer]);

  return (
    <>
      <ModalDialog view={view} setView={setView} />
      <Layout title="Customer">
        <div className="d-flex flex-row-reverse w-100">
          <button
            onClick={() => {
              navigate("/customer/create");
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
    </>
  );
};

export default CustomerPage;
