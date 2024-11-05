"use client";

import { useEffect } from "react";

export function LoadScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://savvy-nach-j1jq.vercel.app/api/products/f0e8b544-b5e1-407c-b830-7adc05a24c07/banner";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
