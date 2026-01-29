"use client";

import { useState } from "react";
import Overlay from "./Overlay";

export default function Address() {
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMapModal(true)}
        className="w-[200px] text-left cursor-pointer"
      >
        New Collectorate Road, Model Town, Gwalior
      </button>

      {/* Modal Overlay */}
      {showMapModal && <Overlay onClose={() => setShowMapModal(false)} />}
    </>
  );
}
