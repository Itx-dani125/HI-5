import React from 'react'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
  <div>
      <div className='relative w-full h-[50vh]'>
       <div className="absolute flex items-center justify-center inset-0 bg-[url(./contact.jpg)] bg-cover bg-center z-0">
       

        <div className="max-w-7xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-gray-300 mb-8">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl text-white font-medium mb-4 ">Contact Us</h1>
        </div>
        {/* Overlay */}
  <div className='absolute inset-0 bg-[#161c2dbf]  opacity-70 z-10'></div>
      </div>
    </div>

    <ContactForm />
  </div>
  )
}

export default Contact