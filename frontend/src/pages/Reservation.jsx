import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { 
  Check, 
  ChevronRight,
  ChevronLeft,
  Clock,
  Euro,
  MapPin,
  Upload,
  Calendar as CalendarIcon,
  CreditCard,
  User,
  Phone,
  Mail,
  Home,
  Camera,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { mockData } from '../mock';

const Reservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { services } = mockData;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    location.state?.selectedService ? 
      services.find(s => s.name === location.state.selectedService) || services[0] : 
      services[0]
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    vehicleType: '',
    vehicleBrand: '',
    additionalNotes: '',
    paymentMethod: '',
    acceptTerms: false
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const steps = [
    { id: 1, title: 'Service', icon: Check, description: 'Choisissez votre service' },
    { id: 2, title: 'Photos', icon: Camera, description: 'Photos de votre véhicule' },
    { id: 3, title: 'Adresse', icon: MapPin, description: 'Lieu d\'intervention' },
    { id: 4, title: 'Planning', icon: CalendarIcon, description: 'Date et heure' },
    { id: 5, title: 'Paiement', icon: CreditCard, description: 'Informations de règlement' }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30'
  ];

  const vehicleTypes = [
    'Citadine', 'Berline', 'Break', 'SUV', 'Monospace', 
    '4x4', 'Coupé', 'Cabriolet', 'Utilitaire', 'Autre'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setUploadedPhotos(prev => [...prev, ...newPhotos].slice(0, 4)); // Max 4 photos
  };

  const removePhoto = (photoId) => {
    setUploadedPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Mock submission
    setIsConfirmed(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const canProceedStep = () => {
    switch (currentStep) {
      case 1:
        return selectedService;
      case 2:
        return true; // Photos are optional
      case 3:
        return formData.address && formData.city && formData.postalCode;
      case 4:
        return selectedDate && selectedTime;
      case 5:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.paymentMethod;
      default:
        return false;
    }
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Réservation Confirmée !
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Votre demande de réservation pour <strong>{selectedService?.name}</strong> a été enregistrée avec succès. 
            Nous vous confirmerons le créneau par SMS et email dans les plus brefs délais.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <strong>Service :</strong> {selectedService?.name}
              </div>
              <div>
                <strong>Date :</strong> {selectedDate?.toLocaleDateString('fr-FR')}
              </div>
              <div>
                <strong>Heure :</strong> {selectedTime}
              </div>
              <div>
                <strong>Durée :</strong> {selectedService?.duration}
              </div>
            </div>
          </div>
          <p className="text-gray-500">Redirection vers l'accueil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-6">
              Réservation
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Réservez votre
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> service premium</span>
            </h1>
            <p className="text-lg text-gray-600">
              Suivez les étapes pour planifier votre lavage à domicile
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isActive 
                          ? 'bg-blue-600 text-white scale-110' 
                          : 'bg-gray-200 text-gray-500'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className={`mt-2 text-center ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                      <div className="text-sm font-medium">{step.title}</div>
                      <div className="text-xs hidden md:block">{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block w-16 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Choisissez votre service
                    </h2>
                    <p className="text-gray-600">
                      Sélectionnez le service qui correspond à vos besoins
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 9).map((service) => (
                      <Card 
                        key={service.id}
                        className={`cursor-pointer transition-all duration-300 border-2 ${
                          selectedService?.id === service.id 
                            ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                            : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                        onClick={() => setSelectedService(service)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-gray-900">{service.name}</h3>
                            {selectedService?.id === service.id && (
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Euro className="w-4 h-4 text-green-600" />
                              <span className="text-green-600 font-semibold">{service.priceMin} - {service.priceReco}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-3">{service.shortDescription}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {selectedService && (
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-gray-900 mb-3">Service sélectionné</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-2">{selectedService.name}</div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>Durée : {selectedService.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Euro className="w-4 h-4" />
                              <span>Prix : {selectedService.priceMin} - {selectedService.priceReco}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">{selectedService.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Photo Upload */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Photos de votre véhicule
                    </h2>
                    <p className="text-gray-600">
                      Ajoutez des photos pour nous aider à mieux évaluer vos besoins (optionnel)
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Upload Zone */}
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        id="photo-upload"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <div className="text-lg font-semibold text-gray-700 mb-2">
                          Cliquez pour ajouter des photos
                        </div>
                        <div className="text-sm text-gray-500">
                          JPG, PNG jusqu'à 5MB (maximum 4 photos)
                        </div>
                      </label>
                    </div>

                    {/* Uploaded Photos */}
                    {uploadedPhotos.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Photos ajoutées</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {uploadedPhotos.map((photo) => (
                            <div key={photo.id} className="relative group">
                              <img
                                src={photo.url}
                                alt={photo.name}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <button
                                onClick={() => removePhoto(photo.id)}
                                className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                ×
                              </button>
                              <div className="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                                {photo.name.length > 10 ? photo.name.substring(0, 10) + '...' : photo.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Conseils pour de bonnes photos :</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Vue d'ensemble du véhicule</li>
                        <li>• Zones particulièrement sales ou à traiter</li>
                        <li>• Éclairage naturel de préférence</li>
                        <li>• Photos nettes et bien cadrées</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Address */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Lieu d'intervention
                    </h2>
                    <p className="text-gray-600">
                      Indiquez où nous devons intervenir
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="06 XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Adresse *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Numéro et nom de rue"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="postalCode">Code postal *</Label>
                          <Input
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={(e) => handleInputChange('postalCode', e.target.value)}
                            placeholder="16000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">Ville *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="Angoulême"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="vehicleType">Type de véhicule</Label>
                        <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicleTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="vehicleBrand">Marque et modèle</Label>
                        <Input
                          id="vehicleBrand"
                          value={formData.vehicleBrand}
                          onChange={(e) => handleInputChange('vehicleBrand', e.target.value)}
                          placeholder="Ex: Renault Clio"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Zone d'intervention</h4>
                        <p className="text-sm text-green-800">
                          Nous intervenons dans toute la Charente. Déplacement gratuit dans un rayon de 20km autour d'Angoulême.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Date and Time */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Choisissez votre créneau
                    </h2>
                    <p className="text-gray-600">
                      Sélectionnez la date et l'heure qui vous conviennent
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Date d'intervention</h3>
                      <Calendar
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                        className="rounded-md border"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Heure d'intervention</h3>
                      <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-gray-900 mb-3">Récapitulatif du rendez-vous</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-gray-600">Date</div>
                          <div className="font-semibold text-gray-900">
                            {selectedDate.toLocaleDateString('fr-FR', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Heure</div>
                          <div className="font-semibold text-gray-900">{selectedTime}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Durée estimée</div>
                          <div className="font-semibold text-gray-900">{selectedService?.duration}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Informations importantes :</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Nous intervenons du lundi au samedi de 8h à 18h</li>
                      <li>• Intervention le dimanche possible sur demande</li>
                      <li>• Confirmation du créneau par SMS et email</li>
                      <li>• Possibilité de reprogrammer jusqu'à 24h avant</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Step 5: Payment */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Informations de règlement
                    </h2>
                    <p className="text-gray-600">
                      Choisissez votre mode de paiement
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold">Mode de paiement *</Label>
                      <div className="grid md:grid-cols-3 gap-4 mt-3">
                        {[
                          { id: 'cash', label: 'Espèces', icon: '💵' },
                          { id: 'card', label: 'Carte bancaire', icon: '💳' },
                          { id: 'transfer', label: 'Virement', icon: '🏦' }
                        ].map((method) => (
                          <button
                            key={method.id}
                            onClick={() => handleInputChange('paymentMethod', method.id)}
                            className={`p-4 rounded-xl border-2 text-center transition-all ${
                              formData.paymentMethod === method.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-2xl mb-2">{method.icon}</div>
                            <div className="font-medium">{method.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Notes additionnelles</Label>
                      <Textarea
                        id="notes"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                        placeholder="Informations supplémentaires, accès, besoins particuliers..."
                        rows={3}
                      />
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-gray-900 mb-4">Récapitulatif de votre réservation</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Service :</span>
                            <div className="font-semibold">{selectedService?.name}</div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Date et heure :</span>
                            <div className="font-semibold">
                              {selectedDate?.toLocaleDateString('fr-FR')} à {selectedTime}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Durée :</span>
                            <div className="font-semibold">{selectedService?.duration}</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Adresse :</span>
                            <div className="font-semibold">
                              {formData.address}, {formData.postalCode} {formData.city}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Contact :</span>
                            <div className="font-semibold">{formData.firstName} {formData.lastName}</div>
                            <div className="text-sm">{formData.phone} | {formData.email}</div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Tarif :</span>
                            <div className="font-semibold text-green-600">
                              {selectedService?.priceMin} - {selectedService?.priceReco}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Tarification participative :</h4>
                      <p className="text-sm text-yellow-800">
                        Le règlement s'effectue après prestation. Vous pouvez choisir de payer le prix minimum 
                        (couvre nos charges) ou le prix recommandé (valorise notre expertise). 
                        Votre satisfaction détermine le montant final.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  onClick={prevStep} 
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </Button>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Étape {currentStep} sur {steps.length}</span>
                </div>

                {currentStep === 5 ? (
                  <Button 
                    onClick={handleSubmit}
                    disabled={!canProceedStep()}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                  >
                    <span>Confirmer la réservation</span>
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={nextStep}
                    disabled={!canProceedStep()}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
                  >
                    <span>Suivant</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Reservation;