import Awards from "@/Components/Pages/Aboutus/Awards";
import Header from "@/Components/Pages/Aboutus/Header";
import OurJourney from "@/Components/Pages/Aboutus/Ourjourney";
import Slick from "@/Components/Pages/Aboutus/Slick";

export default function page() {
  return (
    <div>
      <Header />
      <OurJourney />
      <Awards />
      <Slick />
    </div>
  );
}
