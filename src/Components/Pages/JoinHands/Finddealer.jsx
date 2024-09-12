import React from 'react'

export default function Finddealer() {
  return (
    <div className="mt-28">
      <div className="flex w-11/12 mx-auto space-x-28">
      <div>
          <img
            src="/images/Finddealers.png"
            alt="Logo"
            className="h-[350px] w-[580px]"
          />
        </div>
        <div
          className="flex flex-col p-10 h-[350px]"
          style={{
            background: "linear-gradient(360deg, #EFF6FF 0%, #FFFFFF 100%)",
          }}
        >
          <img
            src="/images/Group2.png"
            alt="Logo"
            className="h-[30px] w-[30px]"
          />
          <p className="pt-5 text-lg">Find dealer</p>
          <p className="w-[610px] pt-10 text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      
      </div>
    </div>
  )
}
