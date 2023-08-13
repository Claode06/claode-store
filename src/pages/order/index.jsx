import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ComponentTable from "../../components/common/Table";
import order from "../../storage/order.json";

const OrderPage = () => {
  const [table, setTable] = useState({
    th: ["No", "No Pesanan", "Customer", "Produk", "Status", "Action"],
    tb: [],
  });

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
        temp.push("");
        tb.push(temp);
      });
      setTable({ ...table, tb });
    }
  }, [order]);
  return (
    <Layout title="Order">
      <ComponentTable table={table} />
    </Layout>
  );
};

export default OrderPage;
