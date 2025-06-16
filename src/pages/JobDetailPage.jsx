import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, DollarSign, CheckCircle } from 'lucide-react';
import { jobs } from '../data/jobs';
import JobForm from '../components/JobForm';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Return to job listings
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full Time':
        return 'bg-primary text-secondary ';
      case 'Part Time':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Remote':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Contract':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/jobs"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to jobs
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(job.type)}`}>
                  {job.type.toUpperCase()}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {job.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-primary" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            
            {/* <button className="bg-primary hover:bg-secondary hover:text-primary text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              APPLY NOW
            </button> */}
            <JobForm />
          </div>

          {/* Job Description Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description :</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>{job.description}</p>
              <p>
                We are looking for a dedicated professional who can contribute to our team's success. 
                This role offers excellent opportunities for growth and development in a dynamic work environment. 
                You will be working with cutting-edge technologies and collaborating with talented professionals 
                from around the world.
              </p>
            </div>
          </div>

          {/* Duties & Responsibilities Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Duties & Responsibilities:</h2>
            <div className="space-y-4">
              {job.requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 leading-relaxed">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 mt-5">Duties & Responsibilities:</h2>
            <div className="space-y-4">
              {job.benefits.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 leading-relaxed">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;