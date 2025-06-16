import { useState } from 'react';

const CapabilitiesSecondSection = () => {
  const items = [
    {
      id: 1,
      description: 'Bayt & LinkedIn',
      title: 'Professional Networks',
      image: 'staffing.jpeg',
    },
    {
      id: 2,
      description: 'ZipRecruiter & Dice',
      title: 'Tech Specialists',
      image: 'computer.jpg',
    },
    {
      id: 3,
      description: 'Indeed & More',
      title: 'Diverse Talent Pool',
      image: 'divers.jpg',
    },
    {
      id: 4,
      description: 'Global Reach',
      title: 'International Sourcing',
      image: 'sourcing.jpg',
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/3 lg:max-w-md">
            <p className="text-gray-600 font-serif italic text-xl mb-6">our trusted</p>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl  text-gray-800 leading-tight mb-12">
              Sourcing Partners
            </h2>
            <div className="mb-8 space-y-4 text-gray-700">
              <p>
                You can count on us to deliver a diverse and qualified pool of candidates through our trusted sourcing partners including <strong>Bayt, LinkedIn, ZipRecruiter, Dice, and Indeed</strong>.
              </p>
              <p>
                These platforms give us direct access to a vast talent network across multiple industries and skill levels, both locally and internationally.
              </p>
            </div>
            <button className="inline-flex items-center space-x-3 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-lg group">
              <span>View Our Process</span>
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

          {/* Right Content - Masonry Grid */}
          <div className="lg:w-2/3 flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item, index) => {
                // Define position offsets per index
                const topOffsets = ['-top-[40%]', '-top-[50%]', '-top-[40%]', '-top-[50%]'];
                const topClass = topOffsets[index % topOffsets.length];

                return (
                  <div
                    key={item.id}
                    className={`relative ${topClass} group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 h-[400px]`}
                  >
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                        <div className="self-end">
                          <span className="font-serif italic text-sm opacity-90">{item.description}</span>
                        </div>
                        <div>
                          <h3 className="font-serif text-lg lg:text-xl font-medium mb-2 leading-tight">{item.title}</h3>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
         <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Whether you're hiring in the United States or in Qatar, we leverage these platforms in combination with our in-house expertise to find candidates who are not only technically skilled but also aligned with your organizational values and goals.
            </p>
            <p>
              Our sourcing process is fast, targeted, and quality-driven ensuring you get the right talent, right when you need it. From entry-level roles to executive placements, our candidate pipeline is built to support your unique hiring needs and keep your recruitment process efficient and stress-free.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSecondSection;