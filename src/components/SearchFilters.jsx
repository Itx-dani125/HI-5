import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const SearchFilters = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch(keyword, location, category);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Keyword Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search your keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
          >
            <option value="">Select location</option>
            <option value="Australia">Australia</option>
            <option value="Russia">Russia</option>
            <option value="Germany">Germany</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>

        {/* Category */}
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
          >
            <option value="">Select category</option>
            <option value="Design & Development">Design & Development</option>
            <option value="Marketing & Sales">Marketing & Sales</option>
            <option value="Software Development">Software Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Customer Service">Customer Service</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-primary hover:bg-secondary hover:border hover:border-primary hover:text-primary text-white px-8 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;