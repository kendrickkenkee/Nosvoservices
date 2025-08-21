import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Clock, 
  Leaf, 
  Gem, 
  Calendar, 
  Truck, 
  Droplets, 
  Sparkles,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { mockData } from '../mock';

const HomePage = () => {
  const { company, benefits, process, services, testimonials } = mockData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Comment ça marche</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Avis</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Réserver maintenant
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow-200/25 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  🌿 Service éco-responsable
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Votre voiture
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> mérite le meilleur</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Réserver un lavage
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg">
                  Voir nos tarifs
                </Button>
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  {company.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  Charente & Angoulême
                </div>
              </div>
            </div>

            {/* Right content - Car image */}
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGNhcnxlbnwwfHx8fDE3NTU3OTE2MzN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Voiture premium propre"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                  <Sparkles className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 rounded-2xl shadow-lg p-4 text-white animate-pulse">
                  <Droplets className="w-8 h-8" />
                </div>
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
                <Card key={benefit.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple en 4 étapes pour un résultat parfait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = {
                Calendar,
                Truck,
                Droplets,
                Sparkles
              }[step.icon];

              return (
                <div key={step.id} className="relative">
                  <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="mb-3 flex justify-center">
                        <Badge className="bg-blue-100 text-blue-800">
                          Étape {step.id}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Connector line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-10"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
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
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="bg-yellow-100 text-yellow-800 mb-2">
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
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700">
                    Choisir ce service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
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
            {testimonials.map((testimonial) => (
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
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Réserver maintenant
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Nous appeler
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{company.name}</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {company.description}
              </p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {company.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {company.address}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Lavage Intérieur</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Lavage Extérieur</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Lavage Complet</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Préparation Esthétique</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Informations</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 {company.name}. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;