import React from 'react'

const Subscribe = () => {
  return (
    <div className='relative w-full min-h-[40vh] flex items-center justify-center px-4 py-8'>
      <div className="w-full max-w-7xl h-auto min-h-[400px] px-6 sm:px-8 lg:px-10 py-8 lg:py-12 bg-primary flex flex-col lg:flex-row items-center justify-center rounded-xl relative overflow-hidden">
        
        {/* Decorative Images */}
        <img 
          src="./molecule.png" 
          alt="Decorative molecule" 
          className='absolute left-[-5%]  w-[120px] sm:w-[150px] lg:w-[200px] top-[-12%] opacity-80' 
        />
        <img 
          src="./air.png" 
          alt="Decorative air" 
          className='absolute right-2 sm:right-5 w-[120px] sm:w-[150px] lg:w-[200px] bottom-0 opacity-80' 
        />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 lg:gap-8 z-10">
          
          {/* Heading Section */}
          <div className="w-full lg:w-[40%] text-center lg:text-left">
            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold leading-tight'>
              Find the best Job For you
            </h1>
          </div>

          {/* Subscription Section */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4 lg:gap-6 items-center lg:items-end">
            <p className='w-full lg:mr-[100px] sm:w-[80%] lg:w-[70%] xl:w-[60%] text-white text-center lg:text-left text-sm sm:text-base leading-relaxed'>
              Talents & Build Relationship
The most complete talent relationship platform for talent sourcing, recruitment events and internal mobility
            </p>
            
            <div className="w-full sm:w-[50%] lg:w-[80%] xl:w-[70%] flex bg-white rounded-full p-1 lg:mr-0 xl:mr-16">
              <form className='flex w-1/2 sm:w-full  sm:flex-row gap-2 sm:gap-0'>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-full px-4 py-2 sm:py-3 text-black focus:outline-none text-sm sm:text-base" 
                />
                <button 
                  type='submit' 
                  className='bg-primary flex gap-2 items-center  justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white hover:bg-secondary border border-primary hover:text-primary transition-colors text-sm sm:text-base whitespace-nowrap'
                >   
                  <span className='w-4 h-4 sm:w-4 sm:h-4 lg:w-8 lg:h-8 rotate-[130deg] flex items-center justify-center bg-white rounded-full flex-shrink-0'>
                    <img src="./back.png" alt="arrow" className='w-3 sm:w-4 lg:w-5' />
                  </span>
                  <span className="hidden sm:inline">Subscribe Now</span>
                  <span className="sm:hidden">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe