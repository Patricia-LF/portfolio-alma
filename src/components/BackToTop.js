"use client";

import { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    const btn = document.querySelector("#backToTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn?.classList.add("visible");
      } else {
        btn?.classList.remove("visible");
      }
    });

    btn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return (
    <button id="backToTop" className="start-btn" aria-label="Back to top">
      ↑
    </button>
  );
}
