import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Associate - Corporate Law",
      location: "Mumbai",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹15-25 LPA",
      description: "Join our corporate law team to handle complex M&A transactions, compliance matters, and corporate governance issues.",
      requirements: [
        "LLB/LLM from recognized university",
        "5+ years in corporate law practice",
        "Experience with M&A transactions",
        "Strong drafting and negotiation skills"
      ]
    },
    {
      title: "Litigation Associate",
      location: "Delhi",
      type: "Full-time", 
      experience: "3-5 years",
      salary: "₹10-18 LPA",
      description: "Handle civil and commercial litigation matters including court appearances, case strategy, and client management.",
      requirements: [
        "LLB from recognized law school",
        "3+ years litigation experience",
        "Strong court advocacy skills",
        "Excellent communication abilities"
      ]
    },
    {
      title: "Legal Content Developer",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-15 LPA",
      description: "Develop legal education content, course materials, and knowledge resources for our digital learning platform.",
      requirements: [
        "LLB with strong academic record",
        "2+ years content creation experience",
        "Interest in legal education",
        "Strong writing and research skills"
      ]
    },
    {
      title: "Junior Associate - Family Law",
      location: "Mumbai",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹6-12 LPA",
      description: "Support family law practice including divorce proceedings, child custody matters, and matrimonial disputes.",
      requirements: [
        "LLB from recognized university",
        "1+ years family law experience",
        "Sensitive approach to client matters",
        "Strong interpersonal skills"
      ]
    }
  ];

  const internshipPrograms = [
    {
      title: "Summer Legal Internship",
      duration: "2-3 months",
      stipend: "₹25,000/month",
      description: "Comprehensive internship program for law students covering various practice areas with mentorship and real case exposure.",
      eligibility: "3rd, 4th, or 5th year law students from recognized universities"
    },
    {
      title: "Research Internship",
      duration: "3-6 months",
      stipend: "₹20,000/month",
      description: "Focus on legal research, case analysis, and content development for our legal education platform.",
      eligibility: "Final year law students or recent graduates with strong research skills"
    },
    {
      title: "Court Practice Internship",
      duration: "4-6 months",
      stipend: "₹30,000/month",
      description: "Hands-on court experience with senior advocates, including case preparation and court appearances.",
      eligibility: "4th or 5th year students with interest in litigation practice"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Industry-leading salary packages with performance-based bonuses and annual increments."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Regular training programs, CLE credits, and access to premium legal databases and resources."
    },
    {
      icon: "⚖️",
      title: "Diverse Practice Areas",
      description: "Opportunity to work across multiple practice areas and gain comprehensive legal experience."
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support."
    },
    {
      icon: "🌟",
      title: "Career Growth",
      description: "Clear career progression paths with mentorship and partnership opportunities."
    },
    {
      icon: "🏢",
      title: "Modern Workplace",
      description: "State-of-the-art offices with flexible working arrangements and modern technology."
    }
  ];

  return (
    <>
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Legal Team</h1>
            <p className="text-xl text-blue-100">
              Build your legal career with India's most innovative law firm. Discover opportunities that align with your aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LegalPro?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a team that values innovation, excellence, and professional growth in a collaborative environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities across our various practice areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline">📍 {job.location}</Badge>
                    <Badge variant="outline">💼 {job.experience}</Badge>
                    <Badge className="bg-accent text-white">💰 {job.salary}</Badge>
                  </div>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/contact">
                      <Button className="flex-1 bg-primary hover:bg-primary-dark">
                        Apply Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Opportunities</h2>
            <p className="text-xl text-gray-600">
              Kickstart your legal career with our comprehensive internship programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>⏰ {program.duration}</span>
                    <span className="text-accent font-semibold">{program.stipend}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Eligibility:</h4>
                    <p className="text-sm text-gray-600">{program.eligibility}</p>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary-dark">
                      Apply for Internship
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Our streamlined hiring process ensures the best fit for both candidates and our firm.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-gray-600">Send your resume and cover letter through our contact form</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Screening</h3>
                <p className="text-sm text-gray-600">HR review and initial assessment of qualifications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Interview Round</h3>
                <p className="text-sm text-gray-600">Technical and behavioral interviews with senior partners</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Final Decision</h3>
                <p className="text-sm text-gray-600">Offer letter and onboarding process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Legal Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join LegalPro and be part of a team that's shaping the future of legal services in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-4 text-lg">
                Submit Application
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Download Job Guide
            </Button>
          </div>
        </div>
      </section>

      </>

  );
};

export default Careers;