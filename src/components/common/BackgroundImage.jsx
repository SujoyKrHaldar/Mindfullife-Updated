import Image from "next/image";
import { useState } from "react";

function BackgroundImage({ src, alt, className, position, objFit }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={src}
        alt={alt}
        objectFit={objFit || "cover"}
        objectPosition={position || "center"}
        layout="fill"
        loading="eager"
        className={`${className} duration-700 ease-in-out group-hover:opacity-75 
              ${isLoading ? " opacity-0" : " opacity-100"}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

export default BackgroundImage;
