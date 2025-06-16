import React from 'react'
import GovernmentSlider from './GovernmentSlider';
import AgenciesSection from './AgenciesSection';


const positions = [
  { icon: './Services-icons/Accounting.png', title: 'Accounting/Auditing' },
  { icon: './Services-icons/Advertising-.png', title: 'Advertising/PR/Event Management' },
  { icon: './Services-icons/agriculture.png', title: '	Agriculture  ' },
  { icon: './Services-icons/Airline.png', title: '	Airlines/Aviation' },
  { icon: './Services-icons/Architect.png', title: '	Architect/Interior Designing' },
  { icon: './Services-icons/Auto.png', title: '	AutoMobile/Automotive ' },
  { icon: './Services-icons/banking.png', title: '	Banking BPO' },
  { icon: './Services-icons/cunstruction.png', title: '	Construction' },
  { icon: './Services-icons/cunsulting.png', title: '	Consulting/Management Consulting/Advisory Services' },
  { icon: './Services-icons/Defense.png', title: '	Defense/Military/Government' },
  { icon: './Services-icons/study.png', title: '	Entertainment Education' },
  { icon: './Services-icons/Facility .png', title: '	Facility Management' },
  { icon: './Services-icons/FMCG.png', title: '	FMCG' },
  { icon: './Services-icons/hospitality.png', title: '	Hospitality' },
  { icon: './Services-icons/it.png', title: '	IT - Hardware/Software/Networking' },
  { icon: './Services-icons/legal.png', title: '	Legal Media	Medical' },
  { icon: './Services-icons/Real-Estate.png', title: '	Real Estate' },
  { icon: './Services-icons/Recruiting-Employee.png', title: '	Recruitment/HR/Executive Search' },
  { icon: './Services-icons/Antenna.png', title: '		Retail/Securit/Telecom/' },
  { icon: './Services-icons/Travel.png', title: '	Travel/Tourism' },
];

const Recruiting = () => {
  return (
    <div>
      <section className="relative h-[80vh] flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("./industires-banner.png")',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our experience with different realms of industries has gained us a
            unique expertise that makes our clients trust us and our process
            without hesitancy.
          </p>
        </div>
      </section>
       {/* positions section */}
      <div className="w-full py-16 px-4 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
          Positions we are <br className="sm:hidden" /> Recruiting for
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto my-4 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-left"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full border">
                <img
                  src={pos.icon}
                  alt={pos.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="font-semibold text-lg">{pos.title}</p>
            </div>
          ))}
        </div>
      </div>

      <GovernmentSlider />

      <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-semibold text-primary border-l-4 border-primary pl-3 mb-2">
              Know Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              About our company
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
            Greetings from our recruitment and staffing sector, where opportunity and talent meet on all continents! Originally based in lively American cities, we extended our reach to include Qatar, bringing our staffing and recruitment experience in HR to the center of the Middle East.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
           Our profound understanding of international resource dynamics is what makes us unique. Whether you run a construction company in Doha or a software startup in California, we have the network and knowledge to identify the ideal candidate for your team. We take a different approach than simply filling jobs; we are committed to establishing enduring bonds with people that foster success and expansion.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                   We customize our services to match your specific demands, whether they involve executive searches or short-term contractual employment options. Together, let's negotiate the always-changing landscape of recruitment, bringing top talent and industry leaders to create possibilities that extend across national boundaries. Reach out to us right now, and together, let's set off on an innovative, cooperative, and superior recruitment journey!
            </p>

            <div className="flex items-start gap-2">
              <img
                src="./quote.jpg"
                alt="quote"
                className="w-6 h-6 mt-1"
              />
              <p className="italic text-gray-700">
                Its an approach that we provide the best Recruitment on hard to
                fill positions and the best Web Development to Our Customers.
                <br />
                <span className="text-primary font-semibold mt-2 block">
                  – CEO @ Hi5-Consulting
                </span>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="./hand-shake.jpg" // Replace with your actual path
              alt="Handshake"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
      <AgenciesSection />
    </div>
  )
}

export default Recruiting