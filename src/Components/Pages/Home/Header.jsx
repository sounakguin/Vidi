import Image from "next/image";

export default function Header() {
  return (
    <>
      <div
        className="bg-center h-[650px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #84C2E7 5%, rgba(255, 255, 255, 0) 100%), url('/images/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col">
          <p className="text-[42px] w-[850px] pl-28 pt-36">
            {/* The World’s Best Water Purifiers & Home Appliances{" "} */}
            India's leading manufacturer & importer of RO water purifier spare parts. 
          </p>
          {/* <p className="pl-28 text-[42px] pt-16 w-[700px]">
            Trusted by Millions Worldwide
          </p> */}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -bottom-28 left-0 w-full h-[300px] overflow-hidden">
          <Image
            src="/images/vector.png"
            alt="Vector Curve"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
