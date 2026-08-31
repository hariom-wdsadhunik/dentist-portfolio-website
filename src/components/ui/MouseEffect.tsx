"use client";

import { useEffect } from "react";

export default function MouseEffect() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.createElement("div");
    dot.className = "mouse-cursor-dot";
    const ring = document.createElement("div");
    ring.className = "mouse-cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      if (Math.random() < 0.2) {
        spawnParticle(mouseX, mouseY);
      }
    };

    const spawnParticle = (x: number, y: number) => {
      const p = document.createElement("div");
      p.className = "mouse-particle";
      p.style.left = `${x + (Math.random() * 8 - 4)}px`;
      p.style.top = `${y + (Math.random() * 8 - 4)}px`;
      document.body.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 550);
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      animId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const handleMouseEnter = () => document.body.classList.add("cursor-hover");
    const handleMouseLeave = () => document.body.classList.remove("cursor-hover");

    const addHoverListeners = () => {
      const elements = document.querySelectorAll("a, button, input, select, textarea, [role='button'], .group");
      elements.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // 3D Tilt Effect on cards
    const handleCardTilt = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleCardLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };

    const attachTilt = () => {
      const tiltElements = document.querySelectorAll<HTMLElement>("article, .group, section > div > div");
      tiltElements.forEach(card => {
        if (!card.dataset.tiltAttached) {
          card.dataset.tiltAttached = "true";
          card.addEventListener("mousemove", handleCardTilt as EventListener);
          card.addEventListener("mouseleave", handleCardLeave as EventListener);
        }
      });
    };

    attachTilt();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
