import Image from "next/image";
import bgImage from "/public/hero-bg.png";
import "./bghero.css";

export default function Background() {
  return (
    <Image
      alt="bgImage"
      src={bgImage}
      className="bghero blur-sm overflow-hidden"
      priority
      quality={80}
    />
  );
}
