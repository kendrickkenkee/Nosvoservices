import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import AnimatedIcons from '../components/AnimatedIcons';
import { 
  Clock, 
  Leaf, 
  Gem, 
  ChevronRight,
  Phone,
  MapPin,
  Sparkles,
  Droplets,
  Star
} from 'lucide-react';
import { mockData } from '../mock';

const Home = () => {
  const { company, benefits, services, testimonials } = mockData;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Enhanced Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-float-slow delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow-200/25 rounded-full blur-xl animate-float-slow delay-500"></div>
          
          {/* 3D Floating Water Drops */}
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`floating-drop-${i}`}
              className="absolute animate-float-premium opacity-20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + i * 0.5}s`
              }}
            >
              <AnimatedIcons icon={Droplets} variant="3d" size="w-12 h-12" className="text-blue-400" />
            </div>
          ))}
          
          {/* 3D Floating Sparkles */}
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={`floating-sparkle-${i}`}
              className="absolute animate-sparkle opacity-30"
              style={{
                right: `${10 + i * 25}%`,
                top: `${15 + i * 30}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${4 + i * 0.3}s`
              }}
            >
              <AnimatedIcons icon={Sparkles} variant="glow" size="w-10 h-10" className="text-yellow-400" />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 animate-pulse-soft">
                  🌿 Service éco-responsable
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-3d">
                  Votre voiture
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-shimmer"> mérite le meilleur</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/reservation">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg btn-liquid card-3d">
                    Réserver un lavage
                    <AnimatedIcons icon={ChevronRight} variant="bounce" size="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg card-3d">
                    Voir nos tarifs
                  </Button>
                </Link>
              </div>

              {/* Contact info with animated icons */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <AnimatedIcons icon={Phone} variant="glow" size="w-4 h-4" className="text-blue-600" />
                  {company.phone}
                </div>
                <div className="flex items-center gap-2">
                  <AnimatedIcons icon={MapPin} variant="bounce" size="w-4 h-4" className="text-green-600" />
                  Charente & Angoulême
                </div>
              </div>
            </div>

            {/* Right content - Car image with enhanced effects */}
            <div className="relative">
              <div className="relative card-3d">
                <img
                  src="https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGNhcnxlbnwwfHx8fDE3NTU3OTE2MzN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Voiture premium propre"
                  className="w-full h-auto rounded-3xl shadow-3d hover:shadow-3d-hover transition-all duration-500"
                />
                {/* Enhanced Floating elements with 3D animations */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 card-3d">
                  <AnimatedIcons icon={Sparkles} variant="premium" size="w-8 h-8" className="text-yellow-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 rounded-2xl shadow-lg p-4 text-white card-3d">
                  <AnimatedIcons icon={Droplets} variant="3d" size="w-8 h-8" className="text-white" />
                </div>
                
                {/* New 3D floating bubbles around the car */}
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={`car-bubble-${i}`}
                    className="absolute animate-bubble-slow opacity-20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${8 + Math.random() * 4}s`
                    }}
                  >
                    <div 
                      className="rounded-full bg-gradient-to-br from-blue-300/60 to-blue-500/60 backdrop-blur-sm border border-white/30 shadow-lg"
                      style={{
                        width: `${15 + Math.random() * 25}px`,
                        height: `${15 + Math.random() * 25}px`
                      }}
                    >
                      <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir NosVoServices ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les avantages de notre service premium à domicile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = {
                Clock,
                Leaf,
                Gem
              }[benefit.icon];

              return (
                <Card key={benefit.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 card-3d">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-3d hover:shadow-3d-hover">
                        <AnimatedIcons 
                          icon={IconComponent} 
                          variant="premium" 
                          size="w-8 h-8" 
                          className="text-white" 
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-3d">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Premium
            </h2>
            <p className="text-xl text-gray-600">
              Des formules adaptées à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                    {service.duration}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3">
                    {service.price}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Voir tous nos services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              La satisfaction client est notre priorité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600">
                Voir tous les avis
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à donner une nouvelle vie à votre véhicule ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Réservez dès maintenant votre service de lavage premium à domicile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Réserver maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;