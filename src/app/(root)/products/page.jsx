import Deals from "@/Components/Pages/Products/Deals";
import Header from "@/Components/Pages/Products/Header";
import Items from "@/Components/Pages/Products/Items";
import Videoslick from "@/Components/Pages/Products/Videoslick";


export default function page() {
  return (
    <div>
      <Header />
      <Items />
      <Deals />
      <Videoslick />
    </div>
  );
}
