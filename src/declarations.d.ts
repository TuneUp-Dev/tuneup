declare module "react-lottie-player";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.gif";
declare module "*.webp";
declare module "*.svg";
declare module "*.bmp";
declare module "*.ico";

declare module "react-confetti" {
  import React from "react";

  interface ConfettiProps {
    width: number;
    height: number;
    numberOfPieces?: number;
    recycle?: boolean;
    gravity?: number;
    wind?: number;
    colors?: string[];
  }

  const Confetti: React.FC<ConfettiProps>;
  export default Confetti;
}
