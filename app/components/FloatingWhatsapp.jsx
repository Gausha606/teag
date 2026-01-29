"use client"

import Link from "next/link";

const { useEffect, useState } = require("react");

export  const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <Link href="https://wa.me/919876543210" target="_blank">
        <div className="w-8 h-8 bg-[#F5F1EB] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#A84D06]"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 2C8.3 2 2 8.3 2 16c0 2.8.8 5.4 2.2 7.6L2 30l6.6-2.1C10.8 29.2 13.3 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2zm7.5 20.1c-.3.9-1.8 1.6-2.5 1.7-.6 0-1.4.1-2.3-.1-.5-.1-1.2-.3-2.1-.6-3.8-1.6-6.3-5.4-6.5-5.7-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2c.3-.3.7-.4 1-.4.2 0 .5 0 .7.1.2 0 .5-.1.8.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .7-.1.2-.2.3-.4.5-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.3.6.5.1.3.1 1.6-.2 2.5z" />
                  </svg>
                </div>
      </Link>
    </div>
  );
};
