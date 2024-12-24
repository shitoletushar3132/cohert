import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function Router() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
