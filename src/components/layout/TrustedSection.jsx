import { Card, CardContent } from '@/components/ui/card';

const TrustedSection = () => {
  const features = [
    {
      title: "99% On-Time Delivery",
      description: "We deliver legal solutions within promised timelines with 99% accuracy rate",
      image: "🚛"
    },
    {
      title: "AI-Powered Tracking", 
      description: "Track your case progress in real-time with our advanced AI monitoring system",
      image: "📊"
    },
    {
      title: "Cost-Effective Solutions",
      description: "Transparent pricing with no hidden costs for all legal services",
      image: "💰"
    }
  ];

  const stats = [
    { number: "10M+", label: "Cases Handled" },
    { number: "845K+", label: "Happy Clients" },
    { number: "100", label: "Success Rate" },
    { number: "600+", label: "Legal Experts" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We serve globally with cutting-edge technology, seamless tracking, and unmatched support. Choose us for your business needs today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Feature cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="text-4xl">{feature.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Hero image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-blue-600 h-80">
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h3 className="text-2xl font-bold">Legal Excellence</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionizing legal services with accuracy, our law firm provides flawless legal solutions, enhancing efficiency and scalability to drive business success with assurance.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;