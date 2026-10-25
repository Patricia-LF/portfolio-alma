"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Lightbox() {
  const lightboxRef = useRef(null);
  const imgRef = useRef(null);
  const videoRef = useRef(null);
  const closeRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const lightbox = lightboxRef.current;
    const img = imgRef.current;
    const video = videoRef.current;

    const openLightbox = () => {
      lightbox.style.display = "flex";
      setIsOpen(true);
      // Move focus to close button
      setTimeout(() => closeRef.current?.focus(), 0);
    };

    const closeLightbox = () => {
      lightbox.style.display = "none";
      setIsOpen(false);
      video.pause();
      video.src = "";
      img.src = "";
    };

    document.querySelectorAll(".gallery-img").forEach((galleryImg) => {
      galleryImg.addEventListener("click", () => {
        img.src = galleryImg.src;
        img.alt = galleryImg.alt;
        img.style.display = "block";
        video.style.display = "none";
        openLightbox();
      });
    });

    document.querySelectorAll(".gallery-item[data-video]").forEach((item) => {
      item.addEventListener("click", () => {
        video.src = item.dataset.video;
        video.style.display = "block";
        img.style.display = "none";
        openLightbox();
        video.play();
      });
    });

    const closeBtn = lightbox.querySelector(".lightbox-close");
    closeBtn?.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div className="lightbox" aria-hidden={!isOpen} ref={lightboxRef}>
      <button className="lightbox-close" ref={closeRef}>
        ✕
      </button>
      <img className="lightbox-img" ref={imgRef} src={null} alt="" />
      <video
        className="lightbox-video"
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
      />
    </div>,
    document.body,
  );
}
