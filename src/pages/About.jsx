import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const About = () => {
  const teamMembers = [
    {
      name: "Adv. Rajesh Sharma",
      role: "Senior Partner & Founder",
      specialization: "Corporate Law & M&A",
      experience: "20+ years",
      education: "LLM from Delhi University, MBA Finance",
      description: "Leading expert in corporate law with extensive experience in cross-border transactions and regulatory compliance.",
      achievements: ["Supreme Court of India Advocate", "Corporate Law Specialist", "M&A Expert"]
    },
    {
      name: "Adv. Priya Menon",
      role: "Partner",
      specialization: "Civil Litigation & Family Law",
      experience: "15+ years",
      education: "LLB from National Law School, Bangalore",
      description: "Renowned litigator with exceptional track record in civil disputes and sensitive family law matters.",
      achievements: ["High Court Advocate", "Family Law Expert", "Mediation Certified"]
    },
    {
      name: "Adv. Arjun Patel",
      role: "Senior Associate",
      specialization: "Criminal Defense & Constitutional Law",
      experience: "12+ years",
      education: "LLM Constitutional Law, Jindal Global Law School",
      description: "Passionate advocate for justice with expertise in criminal defense and constitutional matters.",
      achievements: ["Criminal Law Specialist", "Constitutional Expert", "Legal Aid Contributor"]
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices and client relationships.",
      icon: "⚖️"
    },
    {
      title: "Excellence",
      description: "Committed to delivering superior legal services through continuous learning and innovation.",
      icon: "🏆"
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We tailor our approach to meet your specific legal needs.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Embracing technology and modern practices to enhance legal service delivery.",
      icon: "💡"
    }
  ];

  const milestones = [
    { year: "2004", event: "Founded LegalPro with a vision to democratize legal services" },
    { year: "2008", event: "Expanded to serve clients across major Indian cities" },
    { year: "2012", event: "Launched legal education division with online courses" },
    { year: "2016", event: "Achieved recognition as Top Legal Firm by Indian Legal Awards" },
    { year: "2020", event: "Pioneered digital-first legal services during pandemic" },
    { year: "2024", event: "Serving 10,000+ clients with 95% satisfaction rate" }
  ];

  return (
<>
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LegalPro</h1>
            <p className="text-xl text-blue-100">
              Two decades of legal excellence, innovation, and unwavering commitment to justice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide accessible, high-quality legal services that empower individuals and businesses 
                to navigate India's complex legal landscape with confidence and achieve favorable outcomes.
              </p>
              <p className="text-lg text-gray-600">
                We believe that everyone deserves expert legal representation, regardless of the complexity 
                of their case or their background. Our commitment extends beyond legal counsel to legal 
                education and empowerment.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be India's most trusted and innovative legal services provider, setting new standards 
                for legal excellence, client satisfaction, and professional integrity.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">10,000+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5,000+</div>
                  <div className="text-sm text-gray-600">Course Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at LegalPro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals dedicated to your legal success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Specialization: </span>
                      <span className="text-gray-600">{member.specialization}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Experience: </span>
                      <span className="text-gray-600">{member.experience}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Education: </span>
                      <span className="text-gray-600">{member.education}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Two decades of growth, innovation, and legal excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default About;