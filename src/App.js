import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./pages/order";
import SupplierPage from "./pages/supplier";
import LoginPage from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerPage from "./pages/customer";
import ProtectRoute from "./pages/protectedRoute";

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
          path="/customer"
          element={
            <ProtectRoute>
              <CustomerPage />
            </ProtectRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
