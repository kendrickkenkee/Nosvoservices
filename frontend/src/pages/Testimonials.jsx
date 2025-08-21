import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Star, 
  ChevronRight,
  ThumbsUp,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  MessageSquare,
  Filter,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Send,
  StarIcon
} from 'lucide-react';
import { mockData } from '../mock';

const Testimonials = () => {
  const { testimonials, stats, beforeAfterGallery, services } = mockData;
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const filterOptions = [
    { value: 'all', label: 'Tous les avis' },
    { value: 'interior', label: 'Services Intérieur' },
    { value: 'exterior', label: 'Services Extérieur' },
    { value: 'complete', label: 'Services Complet' },
    { value: 'business', label: 'Entreprises' }
  ];

  const ratingOptions = [
    { value: 'all', label: 'Toutes les notes' },
    { value: '5', label: '5 étoiles' },
    { value: '4', label: '4 étoiles' },
    { value: '3', label: '3 étoiles' }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const serviceCategory = services.find(s => s.name === testimonial.service)?.category || 'other';
    const matchesFilter = selectedFilter === 'all' || serviceCategory === selectedFilter;
    const matchesRating = selectedRating === 'all' || testimonial.rating.toString() === selectedRating;
    return matchesFilter && matchesRating;
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert('Merci pour votre avis ! Il sera publié après modération.');
    setShowReviewForm(false);
    setNewReview({ name: '', email: '', service: '', rating: 5, comment: '' });
  };

  const renderStars = (rating, size = 'w-5 h-5') => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`${size} ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const ImageModal = () => {
    if (!selectedGalleryImage) return null;

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedGalleryImage.service}</h3>
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-red-600">Avant</h4>
                <img
                  src={selectedGalleryImage.before}
                  alt="Avant"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Après</h4>
                <img
                  src={selectedGalleryImage.after}
                  alt="Après"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-center">{selectedGalleryImage.description}</p>
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
            <Badge className="bg-yellow-100 text-yellow-800 mb-6">
              Avis Clients
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ce que disent nos
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> clients</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Découvrez les retours authentiques de nos clients satisfaits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowReviewForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Laisser un avis
              </Button>
              <Link to="/reservation">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4">
                  Réserver maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalClients}+</div>
                <div className="text-gray-700">Clients satisfaits</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-yellow-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.averageRating}/5</div>
                <div className="text-gray-700">Note moyenne</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.satisfactionRate}%</div>
                <div className="text-gray-700">Taux de satisfaction</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.completedServices}+</div>
                <div className="text-gray-700">Services réalisés</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filtrer par :</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ratingOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                          <span>{testimonial.name}</span>
                          {testimonial.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating, 'w-4 h-4')}
                    </div>
                  </div>

                  {/* Service and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800">
                      {testimonial.service}
                    </Badge>
                    <div className="text-xs text-gray-500 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(testimonial.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Utile ({testimonial.helpfulCount})</span>
                    </button>
                    <div className="text-xs text-gray-500">
                      Avis vérifié
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 mb-4">
                Aucun avis ne correspond à vos critères de recherche.
              </div>
              <Button
                onClick={() => {
                  setSelectedFilter('all');
                  setSelectedRating('all');
                }}
                variant="outline"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Galerie Avant/Après
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez la transformation de nos prestations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterGallery.map((item) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
                onClick={() => setSelectedGalleryImage(item)}
              >
                <div className="relative">
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative">
                      <img
                        src={item.before}
                        alt="Avant"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Avant
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after}
                        alt="Après"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Après
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="text-white text-center">
                      <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-semibold">Voir en grand</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge className="bg-purple-100 text-purple-800 mb-2">
                    {item.service}
                  </Badge>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Laisser un avis</h2>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newReview.email}
                      onChange={(e) => setNewReview(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service utilisé</Label>
                  <Select 
                    value={newReview.service} 
                    onValueChange={(value) => setNewReview(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un service" />
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
                  <Label>Note</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setNewReview(prev => ({ ...prev, rating }))}
                        className="p-1"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            rating <= newReview.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment">Votre avis *</Label>
                  <Textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Partagez votre expérience avec NosVoServices..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Publier l'avis
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowReviewForm(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Découvrez pourquoi {stats.satisfactionRate}% de nos clients nous recommandent
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

      {/* Image Modal */}
      <ImageModal />
    </div>
  );
};

export default Testimonials;