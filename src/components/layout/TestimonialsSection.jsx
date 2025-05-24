import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      company: "Kumar Industries",
      content: "LegalPro helped us navigate complex corporate regulations. Their expertise saved our company both time and money. The team's professionalism is unmatched.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Individual Client",
      company: "Real Estate Dispute",
      content: "Professional, caring, and highly knowledgeable. They handled my property dispute with utmost dedication and achieved the best possible outcome.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Dr. Arjun Patel",
      role: "Medical Professional",
      company: "Healthcare Compliance",
      content: "Excellent legal guidance for healthcare compliance. The team's approach is both modern and deeply rooted in legal expertise.",
      rating: 5,
      image: "👨‍⚕️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Clients Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with LegalPro's expert legal services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Philosophy Quote */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12">
            <Quote className="w-16 h-16 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 mb-6">
              न्याय केवल किया जाना चाहिए बल्कि दिखाया भी जाना चाहिए
            </blockquote>
            <footer className="text-lg text-gray-600">
              Justice must not only be done, but must also be seen to be done
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;