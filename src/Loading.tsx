import React from "react";

const Loading = () => {
  return (
    <div className="fixed bg-black w-full h-screen overflow-hidden flex justify-center items-center">
      <video
        src="https://res.cloudinary.com/dwqiivnhx/video/upload/v1735649009/keovvbakhnlhuwyfqolv.mp4"
        autoPlay
        className="w-full unselect brightness-[90%] hue-rotate-[-5deg] saturate-[95%]"
      />
    </div>
  );
};

export default Loading;
