import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ComponentTable from "../../components/common/Table";
import order from "../../storage/order.json";
import ButtonView from "../../components/common/Button/buttonView";
import ButtonEdit from "../../components/common/Button/buttonEdit";
import ButtonDelete from "../../components/common/Button/buttonDelete";
import Pagination from "../../components/common/Table/pagination";

const OrderPage = () => {
  const [table, setTable] = useState({
    th: ["No", "No Pesanan", "Customer", "Produk", "Status", "Action"],
    tb: [],
  });

  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = new URLSearchParams(window.location.search);
  const page = url.get("page");
  const limit = url.get("limit");

  async function getListData() {
    // Get data dari api
    // setLoading(true);
    // try {
    //   const res = await api.get(`/order?limit=${limit}&page=${page}`);
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
      //   await api.delete(`/order`);
      //   getListData();
      // } catch (err) {
      //   toast.error(err.message);
      // } finally {
      //   setLoadingDelete(false);
      // }
    }
  }

  useEffect(() => {
    if (order) {
      const tb = [];
      order.order.map((row, idx) => {
        const temp = [];
        temp.push(idx + 1);
        temp.push(row.order_number);
        temp.push(row.customer.name);
        temp.push(row.product.name);
        temp.push(row.status == 1 ? "Menunggu" : "Dikonfirmasi");
        temp.push(
          <div className="d-flex gap-1 align-items-center">
            <ButtonView />
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
  }, [order]);
  return (
    <Layout title="Order">
      <ComponentTable table={table} />
      <div className="mt-4">
        <Pagination />
      </div>
    </Layout>
  );
};

export default OrderPage;
