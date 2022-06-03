import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../Components/EditForm/EditForm";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InputNotes from "../Components/InputNotes/InputNotes";
import Sidebar from "../Components/Sidebar/Sidebar";

function Editnotespage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <EditForm />
      <InputNotes />
      <Footer />
    </div>
  );
}

export default Editnotespage;
