import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[60vh]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
                <span className="block font-serif">About Us</span>
              </h1>
       
              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white text-opacity-90 mb-8 max-w-2xl leading-relaxed">
                Where opportunity and talent meet across all continents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Content Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Greetings from our recruitment and staffing sector, where opportunity and talent meet on all continents! Originally based in lively American cities, we extended our reach to include Qatar, bringing our staffing and recruitment experience in HR to the center of the Middle East.
                </p>
                <p>
                  Our profound understanding of international resource dynamics is what makes us unique. Whether you run a construction company in Doha or a software startup in California, we have the network and knowledge to identify the ideal candidate for your team.
                </p>
                <p>
                  We take a different approach than simply filling jobs; we are committed to establishing enduring bonds with people that foster success and expansion. We customize our services to match your specific demands, whether they involve executive searches or short-term contractual employment options.
                </p>
                <p>
                  Together, let's negotiate the always-changing landscape of recruitment, bringing top talent and industry leaders to create possibilities that extend across national boundaries.
                </p>
              </div>
              
              <button className="inline-flex items-center space-x-3 bg-primary hover:bg-secondary hover:text-primary text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg group mt-8">
                <span>Contact Us Today</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Our team at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card with Animation */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight mb-4">
              CEO Message
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* CEO Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="CEO"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* CEO Info Card with Floating Animation */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white p-4 rounded-lg shadow-lg animate-float-delayed">
                  <h3 className="text-xl font-bold text-gray-800">CEO & Founder</h3>
                  <p className="text-primary font-medium">HiFive Consulting</p>
                </div>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Welcome to HiFive Consulting, Your Trusted Partner in Talent Unlocking!
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Are you prepared to completely transform your hiring and staffing procedures in Qatar? You only need to contact HiFive Consulting. Our goal is to become your reliable resource for identifying the best candidates and creating productive teams that produce results.
                  </p>
                  
                  <p>
                    We understand that it can be challenging to find suitable people in Qatar's market because of its dynamic environment. Here's where we step in. We connect you with leading professionals who share what your business stands and values for in addition to having the appropriate expertise and skills owing to our extensive understanding of the local market and our unique knowledge of the industry.
                  </p>
                  
                  <p>
                    Instead of focusing on just the number of fulfilling positions we at HiFive Consulting believe that recruitment should aim to find the appropriate fit. We go beyond resumes and job descriptions to fully understand your specific needs and goals because we take a holistic approach to staffing.
                  </p>
                  
                  <p>
                    We can help if you're searching for CEOs to guide your company, experts who encourage innovation, or administrative assistants to ensure everything runs properly. We guarantee results that go above and beyond expectations thanks to our wide industry network and proven track record of experience.
                  </p>
                  
                  <p className="font-semibold text-primary">
                    Let's team up with HiFive Consulting to find Qatar's hidden resources, bring out their full potential, and achieve amazing things together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 lg:px-8 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
            Contact us today to learn more about our recruiting and hiring services and start building a brighter future for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center space-x-3 bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg">
              <span>Get Started Today</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="inline-flex items-center justify-center space-x-3 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;