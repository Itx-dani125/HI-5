import React from 'react'



const Explore = () => {
  return (
     <div className='w-full min-h-screen flex py-10 px-4'>
      <div className="container flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto">
        <div className="content w-full lg:w-[60%] flex flex-col order-2 lg:order-1">
          <div className="line-container flex items-center gap-3 justify-center lg:ml-[205px] mb-4 lg:mb-0">
            <div className="line h-[3px] w-[30px] sm:w-[40px] lg:w-[50px] bg-[#8678B8]"></div>
            <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-center lg:text-left'>EXPLORE OUR EXPERTISE</p>
          </div>
          <div className="txt w-full flex flex-col gap-4">
            <h1 className='text-xl sm:text-2xl lg:text-2xl font-medium mt-4 lg:mt-6 text-center'>
              We are a client-needs driven company
            </h1>
            <p className='w-full sm:w-[85%] lg:w-[65%] mx-auto lg:ml-[24%] leading-7 sm:leading-8 lg:leading-9 text-sm sm:text-base px-4 lg:px-0 text-center lg:text-left'>
             At the core of our mission is a commitment to ensuring your peace of mind when hiring the right talent — especially while securing long-term contracts with various agencies. We understand that each client has unique requirements, and our role is to align those needs with top-tier candidates who are both capable and trustworthy.
            </p>
            <p className='w-full sm:w-[85%] lg:w-[65%] mx-auto lg:ml-[24%] leading-7 sm:leading-8 lg:leading-9 text-[15px] sm:text-[15px] px-4 lg:px-0 text-center lg:text-left'>
            Our reach spans multiple industries and business sectors, supported by a reliable network of experienced professionals ready to fill high-demand roles. From startups to established enterprises, we have built strong connections that allow us to deliver customized recruitment solutions with consistency and integrity
            </p>
          </div>
        </div>

        <div className="svg w-full sm:w-[80%] lg:w-[50%] mb-8 lg:mb-12 order-1 lg:order-2 flex justify-center">
          <img 
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] h-auto" 
            src="./svg.svg" 
            alt="Expertise illustration" 
          />
        </div>
      </div>
    </div>
  )
}

export default Explore