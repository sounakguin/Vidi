import Image from "next/image";

export default function Header() {
  return (
    <>
      <div
        className="bg-center h-[550px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #84C2E7 5%, rgba(255, 255, 255, 0) 100%), url('/images/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col ">
          <p className="text-[42px] w-[850px] pl-28 pt-36">Contact Us</p>
          <div className="pl-28 text-[20px] pt-10 flex flex-col w-[805px] space-y-3">
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/Organization.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <p>Khabya Technologies Pvt Ltd</p>
            </div>
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/Phone.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <p>9274686957</p>
            </div>
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/Letter.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <p>support@vidi.co.in</p>
            </div>
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/PlaceMarker.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <p>
                Plot no 871, Road no 84, GIDC, Sachin, Surat, Gujarat 394230
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -bottom-2 left-0 w-full">
          <Image
            src="/images/vector.png"
            alt="Logo"
            layout="responsive"
            width={100}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
