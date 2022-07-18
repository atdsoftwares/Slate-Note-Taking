import React from "react";
import Account from "../Components/Accounts/Account";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
function Accountpage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Account />
      <Footer />
    </div>
  );
}

export default Accountpage;
