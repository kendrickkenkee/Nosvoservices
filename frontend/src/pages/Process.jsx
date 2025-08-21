import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Calendar, 
  Truck, 
  Droplets, 
  Sparkles,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  Recycle,
  Volume2,
  Leaf
} from 'lucide-react';
import { mockData } from '../mock';

const Process = () => {
  const { process, company } = mockData;

  const techSpecs = [
    {
      title: "Véhicule Équipé",
      description: "Renault Master 2022 L2H2 entièrement aménagé",
      icon: Truck,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Recyclage d'Eau",
      description: "Système de filtration embarqué pour réutiliser l'eau",
      icon: Recycle,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Insonorisation",
      description: "Caisson acoustique pour un fonctionnement silencieux",
      icon: Volume2,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Éco-responsable",
      description: "Produits biodégradables et respect de l'environnement",
      icon: Leaf,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-green-100 text-green-800 mb-6">
              Processus Premium
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comment ça
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> marche ?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Un processus simple et transparent en 4 étapes pour un résultat parfait
            </p>
            <Link to="/reservation">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Commencer maintenant
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => {
              const IconComponent = {
                Calendar,
                Truck,
                Droplets,
                Sparkles
              }[step.icon];

              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative mb-16 last:mb-0">
                  {/* Timeline line */}
                  {index < process.length - 1 && (
                    <div className="absolute left-1/2 top-32 w-0.5 h-32 bg-gradient-to-b from-blue-300 to-green-300 transform -translate-x-1/2 z-0"></div>
                  )}

                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="flex items-center justify-center lg:justify-start space-x-4">
                        <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
                          Étape {step.id}
                        </Badge>
                      </div>
                      
                      <h2 className="text-4xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                      
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Additional details based on step */}
                      {step.id === 1 && (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Sélection du service désiré</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Choix de la date et de l'heure</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Confirmation instantanée</span>
                          </div>
                        </div>
                      )}

                      {step.id === 2 && (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-700">Arrivée ponctuelle garantie</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Directement à votre domicile</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-purple-500" />
                            <span className="text-gray-700">SMS de suivi en temps réel</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Visual */}
                    <div className={`relative ${isEven ? 'lg:order-first' : ''}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                        <CardContent className="p-12 text-center">
                          <div className="relative">
                            {/* Step number background */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 opacity-50">
                              {step.id}
                            </div>
                            
                            {/* Main icon */}
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-12 h-12 text-white" />
                            </div>
                            
                            {/* Animated elements for visual appeal */}
                            {step.id === 3 && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 border-4 border-blue-200 rounded-full animate-ping opacity-20"></div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipement Professionnel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la technologie et l'équipement de pointe que nous utilisons pour vous offrir un service de qualité supérieure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSpecs.map((spec, index) => {
              const IconComponent = spec.icon;
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Zone d'Intervention
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Charente & Angoulême
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous couvrons l'ensemble du département de la Charente avec Angoulême comme base principale.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Déplacement gratuit dans un rayon de 20km</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Intervention du lundi au samedi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Possibilité dimanche sur demande</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-3xl text-white text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h4 className="text-2xl font-bold mb-2">Service à Domicile</h4>
                  <p className="opacity-90">
                    Nous venons directement chez vous, que ce soit à votre domicile, bureau ou autre lieu de votre choix
                  </p>
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
              Convaincu par notre processus ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Réservez dès maintenant et découvrez la différence NosVoServices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Réserver maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;