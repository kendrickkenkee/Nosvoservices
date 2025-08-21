import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Check, 
  ChevronRight,
  Clock,
  Euro,
  Sparkles,
  Droplets,
  Car,
  Paintbrush
} from 'lucide-react';
import { mockData } from '../mock';

const Services = () => {
  const { services } = mockData;
  const [activeTab, setActiveTab] = useState('all');

  const serviceCategories = {
    all: 'Tous les services',
    basic: 'Services de base',
    premium: 'Services premium'
  };

  const getServiceIcon = (serviceName) => {
    if (serviceName.includes('Intérieur')) return Car;
    if (serviceName.includes('Extérieur')) return Droplets;
    if (serviceName.includes('Complet')) return Sparkles;
    if (serviceName.includes('Esthétique')) return Paintbrush;
    return Car;
  };

  const filteredServices = services.filter(service => {
    if (activeTab === 'all') return true;
    if (activeTab === 'basic') return service.id <= 2;
    if (activeTab === 'premium') return service.id > 2;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-6">
              Services Premium
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Nos Services de
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Lavage Premium</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Découvrez nos formules adaptées à tous vos besoins, du lavage express à la préparation esthétique complète
            </p>
            <Link to="/reservation">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Réserver maintenant
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Service Categories */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="basic">De base</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredServices.map((service) => {
                  const IconComponent = getServiceIcon(service.name);
                  
                  return (
                    <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {service.name}
                              </h3>
                              <div className="flex items-center space-x-3">
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {service.duration}
                                </Badge>
                                <div className="text-3xl font-bold text-blue-600">
                                  {service.price}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          <h4 className="font-semibold text-gray-900 text-lg">Inclus dans ce service :</h4>
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <Link to="/reservation" state={{ selectedService: service.name }}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 text-lg py-3">
                            Choisir ce service
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Notre Philosophie Tarifaire
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tarification Participative
                </h3>
                <p className="text-gray-600 mb-6">
                  Nos prix "à partir de" couvrent nos charges opérationnelles. Cependant, nous croyons en la valeur réelle de notre service premium.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Prix minimum = Couverture des coûts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Prix recommandé = Valeur réelle du service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Vous choisissez selon votre satisfaction</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Prix minimum</span>
                    <span className="text-sm text-gray-600">Prix recommandé</span>
                  </div>
                  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded-full"></div>
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-blue-600">Charges</span>
                    <span className="text-lg font-bold text-green-600">Valeur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à réserver votre service ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choisissez le service qui correspond à vos besoins et réservez votre créneau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Réserver maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Comment ça marche ?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;