export default function Header() {
  return (
    <>
      <div
        className="bg-cover bg-center h-96"
        style={{ backgroundColor: "grey" }}
      >
        <div className="flex flex-col ">
          <p>About Us</p>
          <p className="w-3/4 font-sans text-2xl font-normal leading-7 text-left">
            VIDI- Khabya Technologies Pvt. Ltd. is one of the most recognized
            and trusted brands nationally for the manufacture, distribution,
            supply and trading of Reverse Osmosis (RO) components such as
            Domestic RO Booster Pumps, RO Inline Filters, RO Membrane, RO
            Housing, RO Spun Filter and many other spare parts.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -bottom-2 left-0 ">
          <img src="/images/vector.png" alt="Logo" />
        </div>
      </div>
    </>
  );
}
