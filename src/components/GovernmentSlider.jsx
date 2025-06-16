import React, { useState, useEffect } from 'react'

const GovernmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const logos = [
    {
      id: 1,
      src: "./industriespics/Commercial1.png",
      alt: "Department of Homeland Security"
    },
    {
      id: 2,
      src: "./industriespics/Commercial2.png",
      alt: "Environmental Protection Agency"
    },
    {
      id: 3,
     src: "./industriespics/Commercial3.png",
      alt: "Department of Education"
    },
    {
      id: 4,
      src: "./industriespics/Commercial4.png",
      alt: "Department of Agriculture"
    },
    {
      id: 5,
      src: "./industriespics/Commercial5.png",
      alt: "Department of Health"
    },
    {
      id: 6,
     src: "./industriespics/Commercial6.png",
      alt: "NASA"
    },
    {
      id: 7,
      src: "./industriespics/Commercial7.png",
      alt: "Department of Defense"
    },
    {
      id: 8,
     src: "./industriespics/Commercial8.png",
      alt: "Department of Energy"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= logos.length - 5 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [logos.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= logos.length - 5 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? logos.length - 5 : prevIndex - 1
    )
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Government
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-400"></div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 w-1/5 px-4"
                >
                  <div className="bg-white rounded-full p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex items-center justify-center h-32 w-32 mx-auto">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(logos.length / 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 5)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / 5) === index
                  ? 'bg-gray-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GovernmentSlider