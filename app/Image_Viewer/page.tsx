"use client"; // Required for stateful components in App Router

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Initial image source
  const [imgSrc, setImgSrc] = useState("/All/VertVort.png");

  // Function to toggle between images
  const toggleImage = () => {
    setImgSrc((prev) =>
      prev === "/All/VertVort.png" ? "/All/VertDiv.png" : "/All/VertVort.png"
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Update-able Image Example</h1>

      {/* Next.js optimized image */}
      <Image
        src={imgSrc}
        alt="Dynamic example"
        width={400}
        height={300}
        priority
      />

      <br />
      <button
        onClick={toggleImage}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Change Image
      </button>
    </div>
  );
}
