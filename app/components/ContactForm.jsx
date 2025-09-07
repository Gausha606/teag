import Link from "next/link";

export default function ContactForm() {
  return (
   
  <div className=" my-12 mx-12  border border-[#533218de]  rounded-lg text-[#533218de]">
     <section className="py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-lg md:text-3xl font-bold  mb-4">
                    Get In Touch
                </h2>
                <p className=" text-lg ">
                    Have a question or special request? We'd love to hear from you
                </p>
            </div>

            <div>
                <form className="space-y-6 !border-none focus:!outline-black !text-[#533218de]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="first-name" className="block  font-semibold  mb-2">First Name *</label>
                            <input type="text" id="first-name" name="first-name" required className="w-full px-4 py-3 border rounded-lg focus:outline-black " placeholder="Your first name" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block  font-semibold  mb-2">Last Name *</label>
                            <input type="text" id="last-name" name="last-name" required className="w-full px-4 py-3 border  rounded-lg  focus:outline-black " placeholder="Your last name" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block  font-semibold  mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border  rounded-lg  focus:outline-black " placeholder="your.email@example.com" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block  font-semibold  mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border  rounded-lg  focus:outline-black " placeholder="(555) 123-4567" />
                        </div>
                    </div>

                  

                    <div>
                        <label htmlFor="message" className="block  font-semibold  mb-2">Message *</label>
                        <textarea id="message" name="message" rows="3" required placeholder="Please share your message, questions, or special requests..." className="w-full px-4 py-3 border  rounded-lg  focus:outline-black  resize-none"></textarea>
                    </div>

                    <div className="flex items-start space-x-3">
                        <input type="checkbox" id="newsletter" name="newsletter" className="mt-1 w-4 h-4  rounded focus:accent-[#533218de]" />
                        <label htmlFor="newsletter" className="  text-sm">
                            I'd like to receive updates about seasonal menus, special events, and exclusive offers
                        </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-white ">
                        <button type="submit" className=" bg-[#A84D06] py-2 !rounded-2xl flex-1 hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer">
                            Send Message
                        </button>
                        <button type="reset" className="bg-[#533218de]  py-2 !rounded-2xl flex-1 hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer">
                            Clear Form
                        </button>
                    </div>
                </form>

                <div className="mt-8 pt-6 border-t border-secondary-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
                        <div>
                            <h4 className=" font-semibold  mb-2">Quick Response</h4>
                            <p className="  text-sm">
                                We typically respond to inquiries within 24 hours during business days
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-semibold  mb-2">Urgent Matters</h4>
                            <p className="  text-sm">
                                htmlFor immediate assistance, please call us at: 
                                <Link href="tel:9981148990" className=" hover:!text-[#cf8043de] duration-300 ease-in-out font-semibold !text-[#533218de]"> 99811-48990</Link>
                                <Link href="tel:8269925555" className=" hover:!text-[#cf8043de] duration-300 ease-in-out font-semibold !text-[#533218de]">, 82699-25555</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
