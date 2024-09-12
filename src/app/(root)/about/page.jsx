import Awards from "@/Components/Pages/Aboutus/Awards";
import Header from "@/Components/Pages/Aboutus/Header";
import OurJourney from "@/Components/Pages/Aboutus/Ourjourney";
import Slick from "@/Components/Pages/Aboutus/Slick";
import Footer from "@/Components/Global/Footer";
import Navbar from "@/Components/Global/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <OurJourney />
      <Awards />
      <Slick />
      <Footer />
    </div>
  );
}
