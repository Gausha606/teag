export default function MapPage() {
  return (
    <div className="w-full h-screen mb-30">
      <div className="p-4 bg-gray-100">
        <h1 className="text-xl font-bold mt-16">Map View</h1>
      </div>
      
      {/* Full page map */}
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
  )
}
