import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Home, ProductDetail, ProductList, PageNotFound } from "./pages";
import { Header, Footer } from "./components";
import { ContactEu } from "./pages/contact/ContactEu";
import { ContactUs } from "./pages/contact/ContactUs";
import Contact from "./pages/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
          </Route>

          {/* <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
