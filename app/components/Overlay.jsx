"use client";

import { useState } from "react";

export default function Overlay({ onClose }) {
  const [mapVisible, setMapVisible] = useState(false);
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* optional spinner */}
      {/* {!mapVisible && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button type="button" disabled>
            <svg className="animate-spin w-20 h-20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity=".25"
              />
              <path
                fill="currentColor"
                d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
              />
            </svg>
          </button>
        </div>
      )} */}

      <div className="relative w-full h-full max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl">
        {/* Map */}
        <div className="h-full">
          {mapVisible && (
            <button
              onClick={onClose}
              className="bg-orange-700 hover:bg-orange-800 absolute top-4 right-4 !rounded-full w-10 h-10 flex items-center justify-center text-xl"
            >
              ✕
            </button>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.103132454738!2d78.20743257541486!3d26.193323177083204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c31754ae87cd%3A0xd05f0bbb8cf47a19!2sTeagather%20Grand!5e0!3m2!1sen!2sin!4v1756808744415!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapVisible(true)}
          />
        </div>
      </div>
    </div>
  );
}
