import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./pages/order";
import SupplierPage from "./pages/supplier";
import LoginPage from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerPage from "./pages/customer";
import ProtectRoute from "./pages/protectedRoute";
import CreateCustomer from "./pages/customer/create";
import EditCustomer from "./pages/customer/edit";
import CreateSupplier from "./pages/supplier/create";
import EditSupplier from "./pages/supplier/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route
          path="/order"
          element={
            <ProtectRoute>
              <OrderPage />
            </ProtectRoute>
          }
        />

        <Route
          path="/supplier"
          element={
            <ProtectRoute>
              <SupplierPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/supplier/create"
          element={
            <ProtectRoute>
              <CreateSupplier />
            </ProtectRoute>
          }
        />
        <Route
          path="/supplier/edit/:id"
          element={
            <ProtectRoute>
              <EditSupplier />
            </ProtectRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectRoute>
              <CustomerPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/customer/create"
          element={
            <ProtectRoute>
              <CreateCustomer />
            </ProtectRoute>
          }
        />
        <Route
          path="/customer/edit/:id"
          element={
            <ProtectRoute>
              <EditCustomer />
            </ProtectRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
