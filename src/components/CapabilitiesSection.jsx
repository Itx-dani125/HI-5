import { useState } from 'react';
import CapabilitiesSecondSection from './CapabilitiesSecondSection';


const CapabilitiesSection = () => {

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("./cap-banner.png")',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Main Headline */}
              <h1 className="text-2xl ml-[10%] sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-tight mb-6">
                <span className="block ">Capabilities</span>
              </h1>


              {/* Subtitle */}
              <p className="text-lg sm:text-xl ml-[10%] lg:text-2xl text-white text-opacity-90 mb-8 max-w-2xl leading-relaxed">
                You can count on us to deliver a diverse
                and qualified pool of candidates through our trusted
                sourcing partners including Bayt, LinkedIn, ZipRecruiter, Dice, and Indeed.
              </p>


              {/* CTA Button */}
              <button className="group inline-flex ml-[10%] items-center space-x-3 bg-primary hover:bg-secondary hover:text-primary text-white px-8 py-4 text-lg font-semibold rounded-none transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-1">
                <span>Explore How We Hire</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white text-opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <CapabilitiesSecondSection />
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-16 bg-gray-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-medium text-center mb-6">
          Partner for Federal Opportunities
        </h1>

        <div className="w-1/2 sm:w-1/3 md:w-[30%] h-1 bg-primary mb-8" />

        <div className="max-w-5xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed text-center">
          <p>
            We can provide you with qualified candidates that can be potential permanent hires that will stick with you while you connect with different federal opportunities that you might be interested in. It is our intent to make sure to give you the peace of mind when hiring an individual while working on securing a permanent contract with different agencies.
          </p>
          <p>
            Our candidates have also been placed in the US Federal Agencies such as, the <strong>Department of Defense, Air Force, US Navy, NASA, NGA, DHS, CBP, UST and FBI</strong>.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[50vh] rounded-lg overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col gap-4 items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Dependable Workforce Solutions for Qatar’s Key Sectors
            </h1>
            <p className="w-full max-w-[80%] text-lg sm:text-[15px] text-white text-opacity-90 leading-relaxed">
              We can provide you with qualified candidates who have the potential to become permanent hires and remain with your organization for the long term — especially as you pursue strategic opportunities across Qatar’s growing sectors.
              It is our intent to give you complete peace of mind when hiring individuals, particularly while you work on securing permanent contracts with various government entities, agencies, or private sector partners.
            </p>

            <button className="inline-flex items-center space-x-3 bg-primary hover:bg-secondary hover:text-primary text-white px-8 py-4 text-lg font-semibold rounded-none transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 transform hover:-translate-y-1 mt-4">
              <span>Contact Us</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
};

export default CapabilitiesSection;