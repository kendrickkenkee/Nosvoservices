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
  Plus,
  Building,
  Repeat,
  Star,
  TrendingUp
} from 'lucide-react';
import { mockData } from '../mock';

const Services = () => {
  const { services, serviceCategories } = mockData;
  const [activeCategory, setActiveCategory] = useState('interior');
  const [selectedService, setSelectedService] = useState(null);

  const getCategoryIcon = (iconName) => {
    const icons = {
      Car,
      Droplets,
      Sparkles,
      Plus,
      Building,
      Repeat
    };
    return icons[iconName] || Car;
  };

  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory);
  const filteredServices = services.filter(service => service.category === activeCategory);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const ServiceDetailModal = () => {
    if (!selectedService) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-3">
                  {currentCategory?.name}
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedService.name}
                </h2>
                <p className="text-gray-600">{selectedService.shortDescription}</p>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Price and Duration */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Durée</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {selectedService.duration}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Euro className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Tarif</span>
                </div>
                <div className="space-y-1">
                  <div className="text-lg text-gray-600">
                    Min: <span className="font-bold text-green-600">{selectedService.priceMin}</span>
                  </div>
                  <div className="text-lg text-gray-600">
                    Reco: <span className="font-bold text-green-600">{selectedService.priceReco}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description détaillée</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedService.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclus dans ce service</h3>
              <div className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/reservation" 
                state={{ selectedService: selectedService.name }}
                className="flex-1"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4">
                  Réserver ce service
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-blue-600 text-lg py-4"
                onClick={() => setSelectedService(null)}
              >
                Retour aux services
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              Découvrez nos formules adaptées à tous vos besoins, du lavage express aux abonnements sur-mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Réserver maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4">
                  Comment ça marche ?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceCategories.map((category) => {
              const IconComponent = getCategoryIcon(category.icon);
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg scale-105' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    isActive 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-br ${category.color}`
                  }`}>
                    <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white'}`} />
                  </div>
                  <div className="font-semibold text-sm">{category.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className={`w-20 h-20 bg-gradient-to-br ${currentCategory?.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
              {React.createElement(getCategoryIcon(currentCategory?.icon), {
                className: "w-10 h-10 text-white"
              })}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentCategory?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentCategory?.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden cursor-pointer"
                onClick={() => handleServiceSelect(service)}
              >
                <CardContent className="p-6 relative">
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        <Star className="w-3 h-3 mr-1" />
                        Populaire
                      </Badge>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Duration and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{service.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">À partir de</div>
                      <div className="text-lg font-bold text-blue-600">{service.priceMin}</div>
                    </div>
                  </div>

                  {/* Price comparison */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">Prix minimum</span>
                      <span className="text-xs text-gray-500">Prix recommandé</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500 rounded-full"></div>
                      <div className="absolute right-0 top-0 h-full w-1/2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-semibold text-blue-600">{service.priceMin}</span>
                      <span className="text-sm font-semibold text-green-600">{service.priceReco}</span>
                    </div>
                  </div>

                  {/* Quick features preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 truncate">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} autres inclusions...
                      </div>
                    )}
                  </div>

                  {/* Action */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-all">
                    Voir les détails
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  Nos prix "minimum" couvrent nos charges opérationnelles. Cependant, nous croyons en la valeur réelle de notre service premium et encourageons le "prix recommandé".
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Prix minimum = Couverture des coûts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Prix recommandé = Valeur réelle du service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-4 h-4 text-yellow-500" />
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
                  <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">Charges</div>
                      <div className="text-sm text-gray-500">Couvertes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">Valeur</div>
                      <div className="text-sm text-gray-500">Reconnue</div>
                    </div>
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

      {/* Service Detail Modal */}
      <ServiceDetailModal />
    </div>
  );
};

export default Services;