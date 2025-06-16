import { Button } from '@radix-ui/themes'
import { Search, MapPin } from 'lucide-react';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Explore from '../components/Explore';
import Clients from '../components/Clients';
import TakeCare from '../components/TakeCare';
import FAQ from '../components/FAQ';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="banner-section w-full flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-[60vh] sm:min-h-[70vh] lg:h-[80vh] bg-[url('./public/slider12.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="text max-w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] font-bold text-[#2B3154] mb-2 sm:mb-3 lg:mb-4 leading-tight">
            Join us & Explore Thousands of jobs
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Find Jobs, Employment & Career Opportunities
          </p>
        </div>

        <div className="search-box flex w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[45%] py-3 sm:py-4 px-3 sm:px-4 lg:px-6 bg-white rounded-lg shadow-lg">
          <form className="w-full">
            <div className="form-group flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-stretch sm:items-center">
              {/* What Section */}
              <div className="label flex flex-col gap-1 sm:gap-2 items-start flex-1 sm:border-r-2 sm:border-gray-300 sm:pr-3 lg:pr-4">
                <label htmlFor="what" className="text-xs sm:text-sm font-medium text-gray-700">
                  What
                </label>
                <div className="input-group flex items-center w-full relative">
                  <input
                    type="text"
                    id="what"
                    placeholder="Job Title..."
                    className="w-full text-sm sm:text-base border-0 outline-none focus:ring-0 pr-8 placeholder-gray-400"
                  />
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute right-0" />
                </div>
              </div>

              {/* Where Section */}
              <div className="label flex flex-col gap-1 sm:gap-2 items-start flex-1">
                <label htmlFor="where" className="text-xs sm:text-sm font-medium text-gray-700">
                  Where
                </label>
                <div className="input-group flex items-center w-full relative">
                  <input
                    type="text"
                    id="where"
                    placeholder="City Postal Code..."
                    className="w-full text-sm sm:text-base border-0 outline-none focus:ring-0 pr-8 placeholder-gray-400"
                  />
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute right-0" />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className=" solid-btn sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap mt-2 sm:mt-0"
              >
                Find Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      <About  />
      <Carousel />
      <Explore />
      <Clients />
      <TakeCare />
      <FAQ />
      <Subscribe />
      
    </>

  )
}

export default Home