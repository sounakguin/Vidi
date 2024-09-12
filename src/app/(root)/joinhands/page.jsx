import Trust from "@/Components/Pages/Contractus/Trust";
import Footer from "@/Components/Global/Footer";
import Applink from "@/Components/Pages/JoinHands/Applink";
import BecamePartner from "@/Components/Pages/JoinHands/BecamePartner";
import Finddealer from "@/Components/Pages/JoinHands/Finddealer";
import Header from "@/Components/Pages/JoinHands/Header";
import Navbar from "@/Components/Global/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Applink />
      <Finddealer />
      <BecamePartner />
      <Trust />
      <Footer />
    </div>
  );
}
