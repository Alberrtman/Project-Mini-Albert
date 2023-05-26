import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Login from "./components/Login";
  import DataUser from "./components/DataUser";
  import TambahUser from "./components/TambahUser";
  import DataProduk from "./components/DataProduk";
  import EditUser from "./components/EditUser";
  import TambahProduk from "./components/TambahProduk";
  import EditProduk from "./components/EditProduk";
  import DataBanner from "./components/DataBanner";
  import EditBanner from "./components/EditBanner";
  import TambahBanner from "./components/TambahBanner";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dataUser" element={<DataUser />} />
        <Route path="/dataUser/tambahUser" element={<TambahUser />} />
        <Route path="/dataUser/editUser/:id" element={<EditUser />} />
        <Route path="/dataProduk" element={<DataProduk />} />
        <Route path="/dataProduk/tambahProduk" element={<TambahProduk />} />
        <Route path="/dataProduk/editProduk/:id" element={<EditProduk />} />
        <Route path="/dataBanner" element={<DataBanner />} />
        <Route path="/dataBanner/tambahBanner" element={<TambahBanner />} />
        <Route path="/dataBanner/editBanner/:id" element={<EditBanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
