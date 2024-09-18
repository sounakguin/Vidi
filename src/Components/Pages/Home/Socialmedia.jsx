import React from "react";

export default function Socialmedia() {
  return (
   <div>
     <div className="w-11/12 mx-auto p-6">
      <p className="text-[48px] font-bold mt-20">Latest social media posts</p>
      {/* <p className="text-sm mt-8 w-2/4">
        Lorem Ipsum has been the industry standard dummy text ever since the
        1500s, when an unknown printer took a galley book.
      </p> */}
      <div class="container h-[400px] flex justify-center mt-20 space-x-10">
        <div class="video-set move-up ">
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
        </div>

        <div class="video-set move-down">
          <video className="bg-gray-200"   src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
        </div>
        <div class="video-set move-up">
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
        </div>

        <div class="video-set move-down">
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
        </div>
        <div class="video-set move-up">
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
          <video className="bg-gray-200" src="/videos/vidivideo.mp4" muted loop autoPlay></video>
        </div>
      </div>
    </div>
   </div>
  );
}
