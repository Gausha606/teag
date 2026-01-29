// Example Component
"use client"
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PinnedComponent() {
  const containerRef = useRef();
  const headingRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    // 1. Ek Timeline banao jisme ScrollTrigger aur pin laga ho
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Poora container pin hoga
        scroller: "body",
        start: "top top", // Pin tab shuru hoga jab container ka top viewport ke top par aaye
        end: "+=1500", // 1500px ki scrolling ke liye pin rahega
        pin: true, // Element ko screen par pin kar do
        scrub: false, // Animation ek baar mein chalega, scrubbing nahi hogi
      }
    });

    // 2. Timeline mein saare animations ek-ke-baad-ek daalo
    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    tl.from(buttonRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1"); // Pichle animation se 1 second pehle shuru karo

    tl.from(imageRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "back.out(1.7)"
    }, "-=1"); // Pichle animation se 1 second pehle shuru karo
  }, []);

  return (
    <div className="section" ref={containerRef}>
      <div className="content">
        <h1 ref={headingRef}>Our Special Offer</h1>
        <button ref={buttonRef}>Click Here to Claim</button>
        <img ref={imageRef} src="/images/16.png" alt="Offer" />
      </div>
    </div>
  );
}