import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Building, Users, Shield, Home, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const legalServices = [
    {
      icon: Building,
      title: "Corporate Law",
      description: "Comprehensive corporate legal services including mergers, acquisitions, and compliance requirements.",
      price: "₹25,000 onwards",
      features: ["Company Formation", "M&A Support", "Compliance", "Contract Drafting"],
      popular: true
    },
    {
      icon: Users,
      title: "Civil Litigation",
      description: "Expert representation in civil disputes, property matters, and contract disputes with proven results.",
      price: "₹15,000 onwards",
      features: ["Property Disputes", "Contract Law", "Court Representation", "Settlement Negotiation"]
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Dedicated criminal defense representation with proven track record and experienced legal team.",
      price: "₹30,000 onwards",
      features: ["White Collar Crime", "Bail Applications", "Appeals", "Investigation Defense"]
    },
    {
      icon: Home,
      title: "Family Law",
      description: "Sensitive handling of divorce, custody, and matrimonial disputes with compassionate approach.",
      price: "₹20,000 onwards",
      features: ["Divorce Proceedings", "Child Custody", "Adoption", "Property Rights"]
    }
  ];

  const courses = [
    {
      title: "Contract Law Mastery",
      type: "Video Course",
      duration: "6 weeks",
      price: "₹15,000",
      level: "Intermediate",
      description: "Comprehensive course covering Indian Contract Act with practical applications and real case studies.",
      modules: 24,
      students: 450
    },
    {
      title: "Corporate Compliance Framework",
      type: "Interactive Course",
      duration: "8 weeks",
      price: "₹25,000",
      level: "Advanced",
      description: "In-depth training on corporate governance and compliance requirements for modern businesses.",
      modules: 32,
      students: 320
    },
    {
      title: "Litigation Strategy & Practice",
      type: "Hybrid Course",
      duration: "10 weeks",
      price: "₹35,000",
      level: "Professional",
      description: "Advanced litigation techniques with live court proceedings and hands-on practical training.",
      modules: 40,
      students: 180
    }
  ];

  return (
<>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Legal Services & Education</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional legal solutions and comprehensive education designed to meet all your legal needs with excellence and integrity.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Professional Legal Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Legal Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert legal services with transparent pricing and proven results across all practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {legalServices.map((service, index) => (
              <Card key={index} className="relative group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-orange-500 text-white px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                      <p className="text-blue-600 font-bold text-lg">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 group text-lg py-3">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Legal Education
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Legal Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your legal knowledge with our comprehensive courses designed by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">{course.level}</Badge>
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students} students
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Course Modules</span>
                      <span className="font-semibold text-gray-900">{course.modules} Modules</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className="text-gray-600">Course Type</span>
                      <span className="font-semibold text-gray-900">{course.type}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Legal Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">99% Success Rate</h3>
                <p className="text-gray-600">Proven track record with thousands of successful cases</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock legal assistance when you need it most</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Confidential & Secure</h3>
                <p className="text-gray-600">Your privacy and security are our top priorities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our expert legal team help you achieve the best possible outcome.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

   </>
  );
};

export default Services;