import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import { Briefcase, ArrowRight, ChevronDown, ChevronUp, MapPin, Clock, IndianRupee } from 'lucide-react';
import Button from '../ui/Button';

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  salary: string;
  shortDescription: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 'bde',
    title: 'Business Development Executive',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    salary: 'Competitive',
    shortDescription: 'Connect with potential clients, understand their requirements, introduce our services and build strong business relationships.',
    about: 'As a Business Development Executive, you will be the face of our company, driving growth by acquiring new clients and nurturing existing relationships. You will play a crucial role in understanding client needs and presenting our comprehensive digital and SaaS solutions as the perfect fit for their business growth.',
    responsibilities: [
      'Identify and connect with potential clients through various channels.',
      'Understand client requirements and present suitable digital marketing and SaaS solutions.',
      'Build and maintain strong, long-lasting business relationships.',
      'Collaborate with internal teams to ensure successful delivery of services.',
      'Meet and exceed sales targets and KPIs.'
    ],
    requirements: [
      'Good communication and interpersonal skills',
      'Ability to communicate confidently with clients',
      'Basic knowledge of websites, digital marketing or software is an advantage',
      'Freshers and experienced candidates can apply',
      'Any language is accepted, provided the candidate can communicate effectively with clients'
    ]
  },
  {
    id: 'bda',
    title: 'Business Development Associate',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    salary: 'Competitive',
    shortDescription: 'Support lead generation, client communication, follow-ups and sales activities while helping the team identify new business opportunities.',
    about: 'We are looking for an enthusiastic Business Development Associate to support our sales team. In this role, you will assist in generating leads, maintaining client communications, and ensuring a smooth sales process. It is an excellent opportunity for freshers to kickstart their career in business development.',
    responsibilities: [
      'Support the sales team with lead generation and initial outreach.',
      'Communicate with customers through phone, email, or WhatsApp for follow-ups.',
      'Assist in identifying and researching new business opportunities.',
      'Maintain accurate records of client communications and sales activities.',
      'Help prepare presentations and sales materials.'
    ],
    requirements: [
      'Good communication skills',
      'Positive attitude and willingness to learn',
      'Comfortable communicating with customers through phone or WhatsApp',
      'Basic computer knowledge',
      'Freshers are welcome',
      'Any language is accepted; knowledge of multiple languages is an added advantage'
    ]
  }
];

export default function CareersPage() {
  const navigate = useNavigate();
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <SEO 
        title="Careers | E-tailedIndia" 
        description="Join our team at E-tailedIndia. Explore exciting career opportunities in digital marketing, web development, and SaaS." 
      />

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
            alt="Team working" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We are always looking for passionate individuals to help us deliver exceptional digital solutions. Discover your next career opportunity with us.
          </p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="space-y-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-brand" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-brand" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1 text-brand" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant={expandedJobId === job.id ? 'outline' : 'primary'}
                    onClick={() => toggleJob(job.id)}
                    className="shrink-0"
                  >
                    {expandedJobId === job.id ? 'Hide Description' : 'View Job Description'}
                    {expandedJobId === job.id ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {job.shortDescription}
                </p>
              </div>

              {/* Expandable Details */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedJobId === job.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-4 border-t border-gray-100 bg-gray-50/50">
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-brand" /> About the Role
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {job.about}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {job.responsibilities.map((req, idx) => (
                        <li key={idx} className="leading-relaxed">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="leading-relaxed">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <Button 
                      size="lg" 
                      onClick={() => navigate('/contact')}
                      className="w-full sm:w-auto"
                    >
                      Apply for this Position <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
