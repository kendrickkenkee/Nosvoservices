import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ChevronRight,
  Leaf,
  Droplets,
  Recycle,
  Shield,
  Award,
  Users,
  MapPin,
  Clock,
  Phone,
  Target,
  Heart,
  Truck,
  Wrench,
  Volume2,
  CheckCircle,
  Star,
  Lightbulb
} from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  const { company } = mockData;

  const values = [
    {
      icon: Leaf,
      title: "Éco-responsabilité",
      description: "Nous utilisons exclusivement des produits biodégradables et recyclons 95% de l'eau utilisée grâce à notre système de filtration embarqué.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Notre équipe formée aux techniques professionnelles garantit un résultat impeccable sur tous types de véhicules.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Proximité",
      description: "Service à domicile pour vous faire gagner du temps, avec un accompagnement personnalisé et des conseils d'experts.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Tarification participative claire et honnête. Vous payez selon votre satisfaction, en toute confiance.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const teamMembers = [
    {
      name: "L'équipe NosVoServices",
      role: "Professionnels du lavage premium",
      image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjB3YXNofGVufDB8fHx8MTc1NTc5ODA4N3ww&ixlib=rb-4.1.0&q=85",
      description: "Une équipe passionnée et formée aux techniques les plus avancées du secteur automobile."
    }
  ];

  const innovations = [
    {
      icon: Recycle,
      title: "Système de Recyclage d'Eau",
      description: "Circuit fermé avec filtration multi-étapes",
      details: [
        "Récupération de l'eau de rinçage",
        "Filtration en 3 phases (sédiments, charbon, UV)",
        "Réutilisation pour 95% des opérations",
        "Économie de 200L d'eau par lavage"
      ],
      color: "from-blue-500 to-green-500"
    },
    {
      icon: Volume2,
      title: "Insonorisation Avancée",
      description: "Caisson acoustique pour un fonctionnement silencieux",
      details: [
        "Isolation phonique multicouche",
        "Réduction sonore de 70%",
        "Respect de la tranquillité",
        "Intervention possible en zone sensible"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Wrench,
      title: "Équipement Professionnel",
      description: "Matériel haut de gamme embarqué",
      details: [
        "Aspirateur industriel 2000W",
        "Nettoyeur haute pression 150 bars",
        "Injection-extraction pour textiles",
        "Produits certifiés écologiques"
      ],
      color: "from-gray-600 to-gray-700"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Création de NosVoServices",
      description: "Lancement avec l'ambition de révolutionner le lavage automobile à domicile en Charente."
    },
    {
      year: "2024",
      title: "Innovation Écologique",
      description: "Développement du système de recyclage d'eau et partenariats avec des fournisseurs éco-responsables."
    },
    {
      year: "2024",
      title: "Expansion Territoriale",
      description: "Extension de la zone d'intervention à l'ensemble du département et services entreprises."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-6">
                À propos de nous
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                L'innovation au service de
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> votre véhicule</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                NosVoServices révolutionne le lavage automobile avec une approche premium, 
                écologique et personnalisée. Découvrez notre histoire, nos valeurs et notre 
                engagement pour l'excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/reservation">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                    Découvrir nos services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6196228/pexels-photo-6196228.jpeg"
                alt="Véhicule NosVoServices équipé"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100% Écologique</div>
                    <div className="text-sm text-gray-600">Produits biodégradables</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Offrir un service de lavage automobile premium et éco-responsable directement à votre domicile, 
              en combinant excellence technique, respect de l'environnement et tarification équitable. 
              Nous croyons que chaque véhicule mérite le meilleur traitement, sans compromis sur la qualité 
              ni l'impact écologique.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-white text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-600">
                  Devenir la référence du lavage automobile premium et écologique en France.
                </p>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-green-50 to-white text-center p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Développer continuellement des solutions écologiques et efficaces.
                </p>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-white text-center p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client</h3>
                <p className="text-gray-600">
                  Placer la satisfaction client au cœur de chaque intervention.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatre piliers fondamentaux qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white text-center">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjB3YXNofGVufDB8fHx8MTc1NTc5ODA4N3ww&ixlib=rb-4.1.0&q=85"
                    alt="Équipe NosVoServices en action"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <Badge className="bg-white/20 text-white border-white/30 mb-2">
                      Professionnels certifiés
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Une équipe d'experts
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Notre équipe est formée aux dernières techniques de lavage automobile premium. 
                    Chaque technicien maîtrise l'utilisation de nos équipements écologiques et 
                    s'engage à respecter nos standards de qualité exceptionnels.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Formation continue aux techniques premium</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Certification écologique et environnementale</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Expérience sur tous types de véhicules</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Engagement service client excellence</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* R&D Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              Innovation R&D
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Innovations Technologiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous investissons continuellement dans la recherche et développement pour 
              vous offrir des solutions toujours plus performantes et respectueuses de l'environnement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${innovation.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {innovation.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {innovation.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {innovation.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600">
              De l'idée à la réalité, découvrez notre parcours
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                      <CardContent className="p-6">
                        <Badge className="bg-blue-100 text-blue-800 mb-3">
                          {item.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Zone d'Intervention
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Toute la Charente à votre service
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Base principale : Angoulême</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Déplacement gratuit rayon 20km</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Interventions 7j/7 sur demande</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">Service client réactif</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Service Mobile</h4>
                    <p className="text-gray-600 mb-4">
                      Nous nous déplaçons directement chez vous, à votre domicile, bureau ou lieu de votre choix.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-semibold text-blue-900">Zone gratuite</div>
                        <div className="text-blue-700">Rayon 20km</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-semibold text-green-900">Zone étendue</div>
                        <div className="text-green-700">Toute la Charente</div>
                      </div>
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
              Prêt à découvrir l'excellence NosVoServices ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez nos clients satisfaits et découvrez la différence d'un service premium éco-responsable
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
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;