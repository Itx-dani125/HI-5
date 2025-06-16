import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Job Vacancies
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Discover your next career opportunity with top companies worldwide
        </p>
      </div>
    </section>
  );
};

export default HeroSection;