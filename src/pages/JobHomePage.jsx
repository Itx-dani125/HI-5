import React, { useState, useMemo } from 'react';
import SearchFilters from '../components/SearchFilters';
import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesKeyword = !searchKeyword || 
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchKeyword.toLowerCase()));
      
      const matchesLocation = !searchLocation || job.location === searchLocation;
      const matchesCategory = !searchCategory || job.category === searchCategory;

      return matchesKeyword && matchesLocation && matchesCategory;
    });
  }, [searchKeyword, searchLocation, searchCategory]);

  const handleSearch = (keyword, location, category) => {
    setSearchKeyword(keyword);
    setSearchLocation(location);
    setSearchCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Job Vacancies</h1>
          <p className="text-xl text-gray-300 mb-8">Find your dream job from thousands of opportunities</p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchFilters onSearch={handleSearch} />
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Job Openings</h2>
            <p className="text-gray-600">
              {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
              {(searchKeyword || searchLocation || searchCategory) && ' matching your criteria'}
            </p>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria to find more opportunities.</p>
            <button
              onClick={() => handleSearch('', '', '')}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;