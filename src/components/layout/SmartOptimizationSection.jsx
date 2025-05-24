import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Award } from 'lucide-react';

const SmartOptimizationSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Submit your legal documents and case details through our secure online platform.",
      link: "Start Now"
    },
    {
      icon: Users,
      title: "Submit Documents",
      description: "Upload required legal documents with our encrypted document management system.",
      link: "Start Now"
    },
    {
      icon: Award,
      title: "Receive Goods",
      description: "Get your legal solutions delivered with complete documentation and support.",
      link: "Start Now"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Route Optimization
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our intelligent legal process ensures efficient case handling, optimized resource allocation, and faster legal solutions delivery to India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                  {service.link} →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartOptimizationSection;