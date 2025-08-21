import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Users,
  Car,
  Euro,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Navigation,
  Shield,
  Headphones
} from 'lucide-react';
import { mockData } from '../mock';

const Contact = () => {
  const { company, services } = mockData;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      value: company.phone,
      description: "Lun-Sam 8h-18h",
      action: "Appeler maintenant",
      color: "from-blue-500 to-blue-600",
      available: true
    },
    {
      icon: Mail,
      title: "Email",
      value: company.email,
      description: "Réponse sous 24h",
      action: "Envoyer un email",
      color: "from-green-500 to-green-600",
      available: true
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: company.whatsapp,
      description: "Réponse rapide",
      action: "Ouvrir WhatsApp",
      color: "from-emerald-500 to-emerald-600",
      available: true
    }
  ];

  const scheduleInfo = [
    { day: "Lundi - Vendredi", hours: "8h00 - 18h00", available: true },
    { day: "Samedi", hours: "8h00 - 17h00", available: true },
    { day: "Dimanche", hours: "Sur rendez-vous", available: false }
  ];

  const serviceAreas = [
    { zone: "Angoulême centre", distance: "0-5km", price: "Gratuit", color: "text-green-600" },
    { zone: "Proche banlieue", distance: "5-15km", price: "Gratuit", color: "text-green-600" },
    { zone: "Charente étendue", distance: "15-30km", price: "+5€", color: "text-orange-600" },
    { zone: "Hors département", distance: "30km+", price: "Sur devis", color: "text-red-600" }
  ];

  const quickQuestions = [
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs commencent à 29€ avec notre système de prix participatif.",
      link: "/services"
    },
    {
      question: "Combien de temps pour un lavage ?",
      answer: "Entre 30 minutes (Express) et 3h (Préparation esthétique complète).",
      link: "/process"
    },
    {
      question: "Intervenez-vous le dimanche ?",
      answer: "Oui, sur rendez-vous avec un supplément de 15€.",
      link: "/reservation"
    },
    {
      question: "Vos produits sont-ils écologiques ?",
      answer: "100% biodégradables avec recyclage de 95% de l'eau utilisée.",
      link: "/about"
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
        urgency: 'normal'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Message envoyé avec succès !
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, 
            généralement sous 24h en semaine.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
              <div>
                <strong>Nom :</strong> {formData.firstName} {formData.lastName}
              </div>
              <div>
                <strong>Email :</strong> {formData.email}
              </div>
              <div>
                <strong>Sujet :</strong> {formData.subject}
              </div>
              <div>
                <strong>Urgence :</strong> {formData.urgency === 'urgent' ? 'Urgent' : 'Normal'}
              </div>
            </div>
          </div>
          <p className="text-gray-500">Retour à la page contact...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-6">
              Contact
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Parlons de votre
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> projet</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Une question, un devis, une demande particulière ? Notre équipe est à votre écoute 
              pour vous accompagner dans tous vos besoins de lavage automobile premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
              <Link to="/reservation">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4">
                  Réserver en ligne
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plusieurs façons de nous joindre
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le moyen de communication qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 text-center">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <div className="text-lg font-semibold text-blue-600 mb-2">
                      {method.value}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {method.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-600">
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="devis">Demande de devis</SelectItem>
                        <SelectItem value="info">Informations générales</SelectItem>
                        <SelectItem value="reservation">Réservation</SelectItem>
                        <SelectItem value="reclamation">Réclamation</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="service">Service concerné</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service (optionnel)" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.slice(0, 9).map((service) => (
                          <SelectItem key={service.id} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Niveau d'urgence</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Décrivez votre demande, vos besoins spécifiques, votre véhicule..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Informations pratiques
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h4>
                        <p className="text-gray-600">{company.address}</p>
                        <p className="text-sm text-gray-500 mt-1">Déplacement gratuit dans un rayon de 20km</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                        <p className="text-gray-600">{company.phone}</p>
                        <p className="text-sm text-gray-500 mt-1">Service client réactif</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">{company.email}</p>
                        <p className="text-sm text-gray-500 mt-1">Réponse sous 24h garantie</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-blue-600" />
                    Horaires d'intervention
                  </h3>
                  
                  <div className="space-y-4">
                    {scheduleInfo.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${schedule.available ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                          <span className="font-medium text-gray-900">{schedule.day}</span>
                        </div>
                        <span className={`${schedule.available ? 'text-green-600' : 'text-orange-600'} font-semibold`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">Intervention d'urgence</span>
                    </div>
                    <p className="text-blue-800 text-sm">
                      Disponible 7j/7 avec supplément de 15€ en dehors des horaires normaux
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Navigation className="w-6 h-6 mr-3 text-green-600" />
                    Zones tarifaires
                  </h3>
                  
                  <div className="space-y-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{area.zone}</div>
                          <div className="text-sm text-gray-500">{area.distance}</div>
                        </div>
                        <div className={`font-bold ${area.color}`}>
                          {area.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {quickQuestions.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Headphones className="w-5 h-5 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {item.answer}
                      </p>
                      <Link to={item.link}>
                        <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                          En savoir plus
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600">
                Voir toutes les FAQ
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Suivez-nous sur les réseaux sociaux
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Restez informé de nos actualités, conseils et promotions
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <MessageCircle className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;