import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  Search,
  ChevronRight,
  HelpCircle,
  Clock,
  MapPin,
  Euro,
  Leaf,
  Phone,
  Mail,
  Calendar,
  Car,
  Building,
  CreditCard,
  Shield,
  Truck,
  MessageCircle,
  Star,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { mockData } from '../mock';

const FAQ = () => {
  const { company } = mockData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      id: 'all',
      name: 'Toutes les questions',
      icon: HelpCircle,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'services',
      name: 'Services & Tarifs',
      icon: Star,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'reservation',
      name: 'Réservation',
      icon: Calendar,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'zone',
      name: 'Zone d\'intervention',
      icon: MapPin,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'process',
      name: 'Processus & Technique',
      icon: Car,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'payment',
      name: 'Paiement',
      icon: CreditCard,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'ecology',
      name: 'Écologie',
      icon: Leaf,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'business',
      name: 'Entreprises',
      icon: Building,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const faqData = [
    // Services & Tarifs
    {
      id: 1,
      category: 'services',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs suivent un système participatif transparent. Par exemple : Intérieur Express de 39€ (min) à 59€ (recommandé), Extérieur Éco Express de 29€ à 49€, Complet Essentiel de 59€ à 89€. Le prix minimum couvre nos charges, le prix recommandé valorise notre expertise.',
      important: true
    },
    {
      id: 2,
      category: 'services',
      question: 'Quelle est la différence entre vos formules ?',
      answer: 'Intérieur Express (35-45min) : aspirations + vitres. Intérieur Confort (60-75min) : + brossage + protection plastiques. Intérieur Premium (90-110min) : + shampoing localisé + soins cuir. Chaque formule s\'adapte à vos besoins et budget.',
      important: false
    },
    {
      id: 3,
      category: 'services',
      question: 'Proposez-vous des abonnements ?',
      answer: 'Oui ! Abonnement Sérénité avec 3 formules : Mensuel (1× Complet Essentiel/mois), Bimensuel (formule mixte optimisée), Trimestriel (1× Complet Confort/trimestre). Réductions de -10% à -15% sur les add-ons.',
      important: false
    },
    {
      id: 4,
      category: 'services',
      question: 'Faites-vous la préparation esthétique ?',
      answer: 'Absolument ! Notre service "Préparation Esthétique" inclut décontamination, polish/lustrage, cire de protection et traitement cuirs. Durée 2-3h, tarif sur devis selon l\'état du véhicule.',
      important: false
    },

    // Réservation
    {
      id: 5,
      category: 'reservation',
      question: 'Comment réserver un service ?',
      answer: 'Réservation simple en 5 étapes sur notre site : 1) Choisir le service, 2) Ajouter des photos (optionnel), 3) Indiquer l\'adresse, 4) Sélectionner date/heure, 5) Confirmer. Vous recevez une confirmation par SMS et email.',
      important: true
    },
    {
      id: 6,
      category: 'reservation',
      question: 'Quels sont vos créneaux horaires ?',
      answer: 'Lundi-Vendredi : 8h-18h, Samedi : 8h-17h. Intervention le dimanche possible sur demande avec supplément de 15€. Créneaux de 30 minutes, réservation jusqu\'à 17h30 maximum.',
      important: false
    },
    {
      id: 7,
      category: 'reservation',
      question: 'Puis-je modifier ou annuler ma réservation ?',
      answer: 'Modification/annulation gratuite jusqu\'à 24h avant l\'intervention. Entre 24h et 2h avant : frais de 10€. Moins de 2h avant : 50% du montant minimum est retenu.',
      important: false
    },
    {
      id: 8,
      category: 'reservation',
      question: 'Que se passe-t-il en cas de mauvais temps ?',
      answer: 'Nous intervenons par temps couvert ou pluie légère (véhicule abrité). En cas de forte pluie/orage, nous reprogrammons automatiquement sans frais. Vous êtes prévenus par SMS 2h avant.',
      important: false
    },

    // Zone d'intervention
    {
      id: 9,
      category: 'zone',
      question: 'Dans quelle zone intervenez-vous ?',
      answer: 'Zone d\'intervention : toute la Charente avec Angoulême comme base. Déplacement gratuit dans un rayon de 20km (Angoulême centre, proche banlieue). Zone étendue 20-30km : +5€. Au-delà : sur devis.',
      important: true
    },
    {
      id: 10,
      category: 'zone',
      question: 'Venez-vous vraiment à domicile ?',
      answer: 'Oui ! Nous nous déplaçons où vous voulez : domicile, bureau, parking de votre entreprise. Notre Renault Master 2022 est totalement autonome (eau, électricité, équipements embarqués).',
      important: false
    },
    {
      id: 11,
      category: 'zone',
      question: 'Intervenez-vous en appartement/parking souterrain ?',
      answer: 'Oui, si le parking a une hauteur minimum de 2,2m et une ventilation correcte. Nous évaluons chaque situation. Parking extérieur ou semi-couvert privilégié pour un meilleur résultat.',
      important: false
    },

    // Processus & Technique
    {
      id: 12,
      category: 'process',
      question: 'Vos produits sont-ils écologiques ?',
      answer: 'Tous nos produits sont 100% biodégradables et certifiés éco-responsables. Nous recyclons 95% de l\'eau utilisée grâce à notre système de filtration embarqué (3 phases : sédiments, charbon, UV).',
      important: true
    },
    {
      id: 13,
      category: 'process',
      question: 'Combien de temps dure un lavage ?',
      answer: 'Intérieur Express : 35-45min, Extérieur Éco Express : 30-40min, Complet Essentiel : 70-90min, Complet Prestige : 130-160min, Préparation Esthétique : 2-3h. Temps donnés à titre indicatif.',
      important: false
    },
    {
      id: 14,
      category: 'process',
      question: 'Utilisez-vous de l\'eau chaude ?',
      answer: 'Oui, notre équipement embarqué produit de l\'eau chaude pour une efficacité optimale, particulièrement pour le dégraissage et l\'élimination des résidus tenaces.',
      important: false
    },
    {
      id: 15,
      category: 'process',
      question: 'Que faire si mon véhicule est très sale ?',
      answer: 'Aucun problème ! Nous sommes équipés pour tous les niveaux de salissure. Pour les cas extrêmes, nous recommandons la formule Premium ou Prestige avec détachage localisé inclus.',
      important: false
    },

    // Paiement
    {
      id: 16,
      category: 'payment',
      question: 'Comment fonctionne votre tarification participative ?',
      answer: 'Après prestation, vous choisissez entre le prix minimum (couvre nos charges) et le prix recommandé (valorise notre expertise). C\'est transparent, équitable et basé sur votre satisfaction réelle.',
      important: true
    },
    {
      id: 17,
      category: 'payment',
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Espèces, carte bancaire (sur place), virement bancaire. Paiement après prestation uniquement. Pas d\'acompte demandé, nous vous faisons confiance !',
      important: false
    },
    {
      id: 18,
      category: 'payment',
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Aucun frais caché ! Nos tarifs incluent déplacement gratuit (zone 20km), matériel, produits et main d\'œuvre. Seuls suppléments possibles : zone étendue (+5€) ou intervention dimanche (+15€).',
      important: false
    },

    // Écologie
    {
      id: 19,
      category: 'ecology',
      question: 'Comment recyclez-vous l\'eau ?',
      answer: 'Notre système embarqué récupère l\'eau de rinçage, la filtre en 3 étapes (sédiments, charbon actif, UV) puis la réutilise. Économie de 200L d\'eau par lavage vs méthodes traditionnelles.',
      important: false
    },
    {
      id: 20,
      category: 'ecology',
      question: 'Vos emballages sont-ils recyclables ?',
      answer: 'Oui ! Contenants réutilisables, produits concentrés pour réduire les déchets, partenariat avec des fournisseurs certifiés eco-friendly. Démarche environnementale globale.',
      important: false
    },

    // Entreprises
    {
      id: 21,
      category: 'business',
      question: 'Proposez-vous des services aux entreprises ?',
      answer: 'Oui ! Forfaits flotte sur site pour 5/10/20 véhicules avec tarifs dégressifs. Intervention autonome sur parking d\'entreprise, planning dédié, rapport photo avant/après sur demande.',
      important: false
    },
    {
      id: 22,
      category: 'business',
      question: 'Avez-vous des contrats d\'entretien ?',
      answer: 'Oui, contrats mensuels ou trimestriels pour flottes d\'entreprises. Tarifs préférentiels, facturation centralisée, planning garanti. Base forfait : Complet Confort par véhicule.',
      important: false
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const importantFAQ = faqData.filter(item => item.important);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-6">
              Questions fréquentes
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Trouvez rapidement
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> vos réponses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Découvrez tout ce que vous devez savoir sur nos services de lavage automobile premium. 
              Une question spécifique ? Contactez-nous directement !
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Poser une question
                </Button>
              </Link>
              <Link to="/reservation">
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4">
                  Réserver maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions les plus importantes
            </h2>
            <p className="text-lg text-gray-600">
              Les réponses essentielles pour commencer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {importantFAQ.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">
                        {item.question}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-3">
                        {item.answer.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {searchTerm && (
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                <strong>{filteredFAQ.length}</strong> résultat{filteredFAQ.length > 1 ? 's' : ''} pour "{searchTerm}"
              </p>
            </div>
          )}

          {filteredFAQ.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucune question trouvée
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez avec d'autres mots-clés ou contactez-nous directement
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Nous contacter
                </Button>
              </Link>
            </div>
          )}

          {filteredFAQ.length > 0 && (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQ.map((item) => {
                const categoryInfo = faqCategories.find(cat => cat.id === item.category);
                
                return (
                  <AccordionItem key={item.id} value={`item-${item.id}`} className="border-0">
                    <Card className="overflow-hidden">
                      <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-50 transition-colors">
                        <div className="flex items-start space-x-4 text-left">
                          {item.important && (
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                          )}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className={`bg-gradient-to-r ${categoryInfo?.color} text-white text-xs`}>
                                {categoryInfo?.name}
                              </Badge>
                              {item.important && (
                                <Badge className="bg-red-100 text-red-800 text-xs">
                                  Important
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {item.question}
                            </h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-8 pb-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 leading-relaxed text-base">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Actions rapides
            </h2>
            <p className="text-lg text-gray-600">
              Prêt à passer à l'action ?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Réserver un service
                </h3>
                <p className="text-gray-600 mb-6">
                  Choisissez votre formule et votre créneau en quelques clics
                </p>
                <Link to="/reservation">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Réserver maintenant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nous appeler
                </h3>
                <p className="text-gray-600 mb-6">
                  Besoin d'un conseil personnalisé ? Contactez-nous directement
                </p>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    {company.phone}
                    <Phone className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Poser une question
                </h3>
                <p className="text-gray-600 mb-6">
                  Question spécifique ? Envoyez-nous un message détaillé
                </p>
                <Link to="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    Nous contacter
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Info className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-6">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Notre équipe est là pour vous aider ! Contactez-nous par téléphone, email ou WhatsApp 
              pour obtenir une réponse personnalisée à votre question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Formulaire de contact
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;