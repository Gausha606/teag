'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function MapModal() {
  const router = useRouter()
  
  const closeModal = () => {
    router.back()
  }
  
  // ESC key listener
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <div className="relative w-full h-full max-w-6xl max-h-full bg-white rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 cursor-pointer"
        >
          ✕
        </button>
        
        {/* Map */}
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.103132454738!2d78.20743257541486!3d26.193323177083204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c31754ae87cd%3A0xd05f0bbb8cf47a19!2sTeagather%20Grand!5e0!3m2!1sen!2sin!4v1756808744415!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
