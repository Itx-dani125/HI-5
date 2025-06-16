import React from 'react'

const AgenciesSection = () => {
  return (
    <div className="bg-[#9D94C5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Agencies we've placed candidates at
        </h2>
        
        {/* Grid with borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {/* Row 1 */}
          <div className="border-r border-b border-white/30 p-8 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
                src="./industriespics/agen1.png" 
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="border-r border-b border-white/30 p-8 flex items-center justify-center  md:border-r md:border-white/30">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
               src="./industriespics/agen2.png" 
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="border-r border-b  border-white/30 md:border-r md:border-white/30 p-8 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
               src="./industriespics/agen3.png"  
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className=" border-b border-white/30 p-8 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
                 src="./industriespics/agen4.png"  
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="border-r border-white/30 p-8 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
                src="./industriespics/agen5.png" 
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="border-r border-white/30 p-8 flex items-center justify-center  md:border-r md:border-white/30">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
                src="./industriespics/agen6.png"  
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="border-r border-white/30 p-8 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
              src="./industriespics/agen7.png" 
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className=" p-8 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img 
                src="./industriespics/agen8.png" 
                alt="Agency Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgenciesSection