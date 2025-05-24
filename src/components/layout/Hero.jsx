import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scale, Shield, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Trusted Legal Solutions',
    'Your Rights Protected',
    'Justice You Deserve'
  ];
  
  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, texts]);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-white z-10">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Scale className="w-4 h-4 mr-2" />
              25+ Years of Legal Excellence
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Premier
              </span>
              <br />
              <span className="text-orange-400 font-light italic">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              With decades of experience and a proven track record of success, our dedicated team of legal professionals provides comprehensive legal services tailored to your unique needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-black hover:bg-gray-300 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm">
                View Our Cases
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">5000+</div>
                <div className="text-sm text-gray-400">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right content - Professional Imagery */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Scale className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Legal Excellence</h3>
                <p className="text-gray-300">Protecting your rights with unwavering dedication</p>
              </div>
              
              {/* Feature highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-medium">24/7 Legal Support</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                  <span className="text-white font-medium">Expert Legal Team</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <Award className="w-6 h-6 text-orange-400" />
                  <span className="text-white font-medium">Award-Winning Service</span>
                </div>
              </div>
            </div>

            {/* Floating achievement cards */}
            <div className="absolute -left-8 top-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-4 w-56 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Best Law Firm 2024</p>
                  <p className="text-sm text-green-100">National Legal Awards</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-lg p-4 w-56 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">1000+ Clients Served</p>
                  <p className="text-sm text-blue-100">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;