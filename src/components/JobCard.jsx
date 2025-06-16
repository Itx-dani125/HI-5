import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Bookmark } from 'lucide-react';

const JobCard = ({ job }) => {
  const getJobTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'full time':
        return 'bg-blue-50 text-blue-600 border border-blue-200';
      case 'part time':
        return 'bg-purple-50 text-purple-600 border border-purple-200';
      case 'remote':
        return 'bg-green-50 text-green-600 border border-green-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

  const getCompanyLogo = (company) => {
    const logos = {
      'Meta': '📘',
      'Google': '🔍',
      'TechCorp': '🤖',
      'Microsoft': '🪟',
      'Apple': '🍎',
      'Amazon': '📦'
    };
    return logos[company] || '🏢';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 p-6">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo and Job Info */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Company Logo */}
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
            {getCompanyLogo(job.company)}
          </div>
          
          {/* Job Details */}
          <div className="flex-1 min-w-0">
            <Link 
              to={`/job/${job.id}`}
              className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors block truncate"
            >
              {job.title}
            </Link>
            
            {/* Job Meta Info */}
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${getJobTypeColor(job.type)}`}>
                {job.type}
              </span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{job.postedAt}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section - Location and Salary */}
        <div className="hidden md:flex flex-col items-start space-y-2 px-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
            <span className="text-sm">{job.location}</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {job.salary}
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-500" />
          </button>
          <Link
            to={`/job/${job.id}`}
            className="bg-primary hover:bg-secondary hover:border hover:border-primary hover:text-primary text-white px-6 py-2 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
          >
            APPLY NOW
          </Link>
        </div>
      </div>

      {/* Mobile Layout - Location and Salary */}
      <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
            <span className="text-sm">{job.location}</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {job.salary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;