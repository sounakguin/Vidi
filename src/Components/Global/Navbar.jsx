

export default function Navbar() {
  return (
    <div className="text-black pl-20 pr-20 pt-2">
      <div className="flex justify-between items-center">
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-12 w-20" />
        </div>
        <div className="flex space-x-6">
          <p className="hover:text-blue-400 cursor-pointer">Home</p>
          <p className="hover:text-blue-400 cursor-pointer">About Us</p>
          <p className="hover:text-blue-400 cursor-pointer">Products</p>
          <p className="hover:text-blue-400 cursor-pointer">Career</p>
          <p className="hover:text-blue-400 cursor-pointer">Events</p>
        </div>
        <div>
          <button
            className="bg-[#009FE4] text-white py-1 px-8 rounded hover:bg-[#007AB8] transition duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
