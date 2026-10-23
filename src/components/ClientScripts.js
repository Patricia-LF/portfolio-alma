"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Nav toggle
    const hamburger = document.querySelector(".hamburger-btn");
    const close = document.querySelector(".close-btn");
    const overlay = document.querySelector(".main-navigation");

    hamburger?.addEventListener("click", () => {
      overlay.style.display = "flex";
    });

    close?.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    document.querySelectorAll(".nav-link-overlay").forEach((link) => {
      link.addEventListener("click", () => {
        overlay.style.display = "none";
      });
    });

    // Back to top
    const backToTop = document.querySelector("#backToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop?.classList.add("visible");
      } else {
        backToTop?.classList.remove("visible");
      }
    });

    backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return null;
}
