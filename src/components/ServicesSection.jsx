import React, { useState } from 'react';

// Base Section Component
const BaseSection = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  reversed = false,
  accentColor = "primary",
  backgroundColor = "white",
  children
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getAccentColorClasses = () => {
    switch (accentColor) {
      case 'secondary':
        return {
          border: 'border-secondary-200',
          text: 'text-secondary-600',
          bg: 'bg-secondary-50'
        };
      case 'accent':
        return {
          border: 'border-accent-200',
          text: 'text-accent-600',
          bg: 'bg-accent-50'
        };
      default:
        return {
          border: 'border-primary-200',
          text: 'text-primary-600',
          bg: 'bg-primary-50'
        };
    }
  };

  const colors = getAccentColorClasses();
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-16 lg:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className='w-16 h-1 bg-primary'></div>
            <div className={`w-16 h-1 ${colors.bg} rounded-full`}></div>
            <h2 className="text-3xl w-[70%] lg:text-4xl  text-gray-900 leading-tight">
              {title}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                  <p key={index} className="text-base text-gray-400 lg:text-lg">
                    {paragraph}
                  </p>
                ))
              ) : (
                description.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-base text-gray-400 lg:text-lg">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* Image or Custom Content */}
          <div className="flex-1 flex justify-center">
            {children ? (
              children
            ) : (
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className={`absolute inset-0 ${colors.bg} rounded-2xl transform rotate-3 opacity-20`}></div>
                <div className="relative">
                  {!imageLoaded && (
                    <div className="w-full h-80 bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    </div>
                  )}
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className={`w-full h-full object-cover rounded-2xl  transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Social Media Icons Component
const SocialMediaIcons = () => {
  const socialIcons = [
    { name: 'Twitter', color: 'bg-blue-500', size: 'w-12 h-12', position: 'top-4 left-8' },
    { name: 'Instagram', color: 'bg-pink-500', size: 'w-10 h-10', position: 'top-16 right-12' },
    { name: 'Facebook', color: 'bg-blue-600', size: 'w-8 h-8', position: 'bottom-20 left-4' },
    { name: 'LinkedIn', color: 'bg-blue-700', size: 'w-9 h-9', position: 'bottom-32 right-8' },
    { name: 'WhatsApp', color: 'bg-green-500', size: 'w-11 h-11', position: 'bottom-8 right-16' },
    { name: 'YouTube', color: 'bg-red-500', size: 'w-8 h-8', position: 'top-32 left-12' },
  ];

  const [phoneLoaded, setPhoneLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-sm">
      {/* Floating Social Media Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {socialIcons.map((icon, index) => (
          <div
            key={icon.name}
            className={`absolute ${icon.position} ${icon.color} ${icon.size} rounded-full shadow-lg animate-bounce`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: '3s'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Phone Mockup */}
      <div className="relative z-10 mx-auto">
        <div className="w-[500px] h-128  rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Phone Screen Content */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-900 rounded-full"></div>
            
            {!phoneLoaded && (
              <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              </div>
            )}
            
            <img
              src="./talent.png"
              alt="Social Media Interface"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                phoneLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setPhoneLoaded(true)}
            />
            
            {/* Phone Screen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Section Components
const RecruitingSection = () => {
  const description = `We deliver permanent staffing solutions with long-term value in mind. Our direct hire service connects you with thoroughly vetted professionals who fit your organization both technically and culturally. We don’t just fill roles, we help build the teams that shape your future.

With a deep understanding of industry requirements and hiring trends in both Qatar and the USA, we ensure that each hire contributes meaningfully to your organization’s growth and stability.`;

  return (
    <BaseSection
      title="	Permanent Recruitment (Direct Hire)"
      description={description}
      imageUrl="./Recrutment.svg"
      imageAlt="Recruiting and staffing professionals in a meeting"
      accentColor="primary"
      backgroundColor="white"
    />
  );
};

const 	TemporaryContractSection  = () => {
  const description = `Need workforce flexibility without sacrificing quality? Our temporary and contract staffing solutions provide fast, reliable access to skilled professionals for project-based work, seasonal demands, or urgent talent gaps.

Whether it’s one position or a full team, we supply pre-screened, work-ready candidates who deliver results from day one with full compliance and administrative support handled by us. We help you stay agile, efficient, and competitive in dynamic markets.
`;

  return (
    <BaseSection
      title="Temporary/Contract Staffing"
      description={description}
      imageUrl="./agreement.svg"
      imageAlt="Web developer working on code"
      reversed={true}
      accentColor="secondary"
      backgroundColor="white"
    />
  );
};

const 	ExecutiveSearchSection = () => {
  const description = `When it comes to leadership, there is no room for compromise. Our executive search service is built for organizations seeking transformative leaders who can drive strategic impact. We engage in discreet, high-level searches to identify, assess, and attract top executive talent — regionally and globally.

With access to a powerful network and deep industry insight, we specialize in filling boardroom, C-suite, and senior management roles that demand not just experience, but vision and integrity.
`;

  return (
    <BaseSection
      title="Executive Search (Headhunting)"
      description={description}
      imageUrl="./execution.svg"
      imageAlt="graphic designer working on design"
      reversed={true}
      accentColor="secondary"
      backgroundColor="white"
    />
  );
};

const RecruitmentProcessSection  = () => {
  const description = `Our RPO services are designed for companies seeking to streamline, scale, or fully delegate their hiring operations. We embed our team into your HR function, delivering a seamless recruitment engine that supports everything from sourcing and screening to onboarding and compliance.

Backed by advanced tools and real-time analytics, our RPO model ensures cost efficiency, process consistency, and talent quality tailored to the scale and pace of your business.

Ideal for growing enterprises, government projects, or organizations with ongoing high-volume hiring needs in Qatar or the USA.
`;

  return (
    <BaseSection
      title="Recruitment Process Outsourcing (RPO)"
      description={description}
      imageUrl="./Recruitment.png"
      imageAlt="Search Engine Optimization"
      reversed={false}
      accentColor="secondary"
      backgroundColor="white"
    />
  );
};


const TalentMappingSection  = () => {
  const description = [
    "Strategic hiring starts with intelligence. Our Talent Mapping & Market Research services equip you with real-time data on talent availability, competitor hiring trends, salary benchmarks, and skill gaps across your target market.",
    "This service is ideal for workforce planning, succession strategies, new market entry, or when preparing to hire for critical roles. We deliver insights that give you a competitive edge  whether you’re expanding your presence in Qatar or benchmarking global talent trends."
    
  ];

  return (
    <BaseSection
      title="Talent Mapping & Market Research"
      description={description}
      accentColor="secondary"
      backgroundColor="gray"
    >
      <SocialMediaIcons />
    </BaseSection>
  );
};

// Main Services Page Component
const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        <RecruitingSection />
        <TemporaryContractSection />
        <ExecutiveSearchSection />
        <RecruitmentProcessSection />
        <TalentMappingSection />
      </main>
    </div>
  );
};

export default ServicesSection;