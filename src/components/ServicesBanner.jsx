import React from 'react'
import ServiceSection from './ServicesSection'

const ServicesBanner = () => {
    return (
      <div>
        <div className="relative w-full h-[100vh]">
          <div className="absolute flex items-center justify-center inset-0 bg-[url(./services-banner.jpg)] bg-cover bg-center z-0">
            <div className="max-w-full z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full text-white text-center">
              <h1 className="text-4xl md:text-7xl w-[60%] text-white font-bold mb-4 ">
                Recruitment & Development
              </h1>
              <span className="bg-white h-1 w-20  m-5"></span>
              <p className="text-2xl text-white w-[55%] mb-8">
                Since the exceptionally starting of our commerce, we’ve been
                interfacing our clients with difficult discoverability within
                the Data Innovation space. Our recruitment consulting firm
                ability ranges over a wide cluster of subdomains counting
                Recruitment & Development
              </p>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#9D94C5]  opacity-50 z-10"></div>
          </div>
        </div>

        <ServiceSection />
      </div>
    )
}

export default ServicesBanner