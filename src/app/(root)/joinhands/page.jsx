import Trust from "@/Components/Pages/Contractus/Trust";
import Applink from "@/Components/Pages/JoinHands/Applink";
import BecamePartner from "@/Components/Pages/JoinHands/BecamePartner";
import Finddealer from "@/Components/Pages/JoinHands/Finddealer";
import Header from "@/Components/Pages/JoinHands/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Applink />
      <Finddealer />
      <BecamePartner />
      <Trust />
    </div>
  );
}
