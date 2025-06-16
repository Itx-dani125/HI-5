import React from 'react'
import { Link } from 'react-router-dom'
const TakeCare = () => {
  return (
  <div className="container py-16">
      <div className="relative w-full h-[50vh]">
  {/* Background Image */}
  <div className='absolute inset-0 bg-[url("/office2.jpg")] bg-cover bg-center z-0'></div>

  {/* Overlay */}
  <div className='absolute inset-0 bg-black opacity-70 z-10'></div>

  {/* Content */}
  <div className='relative z-20 flex flex-col gap-4 items-center justify-center h-full text-white text-center px-4'>
    <h1 className='text-4xl font-medium'>We Always Take Care Of Our Clients Seriously</h1>
    <p className='w-full max-w-xl'>
      We prioritize our clients' needs with utmost dedication and professionalism. Our team is committed to delivering exceptional service and ensuring your complete satisfaction throughout our partnership.
    </p>
    <Link to='/contact' className='solid-btn'>Contact Us</Link>
  </div>
</div>
  </div>

  )
}

export default TakeCare