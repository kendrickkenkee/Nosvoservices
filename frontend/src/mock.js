// Mock data for NosVoServices car washing website

export const mockData = {
  company: {
    name: "NosVoServices",
    tagline: "Service de lavage premium à domicile",
    description: "Votre véhicule mérite le meilleur traitement. Nous venons à vous avec notre service de lavage écologique et premium.",
    phone: "05 45 XX XX XX",
    email: "contact@nosvoservices.fr",
    address: "Zone d'intervention : Charente et Angoulême"
  },
  
  benefits: [
    {
      id: 1,
      icon: "Clock",
      title: "Gain de temps",
      description: "Service à domicile, nous venons à vous"
    },
    {
      id: 2,
      icon: "Leaf",
      title: "Éco-responsable",
      description: "Recyclage de l'eau et produits biodégradables"
    },
    {
      id: 3,
      icon: "Gem",
      title: "Service premium",
      description: "Finition impeccable avec des produits haut de gamme"
    }
  ],

  process: [
    {
      id: 1,
      title: "Réservation",
      description: "Choisissez votre service et votre créneau en ligne",
      icon: "Calendar"
    },
    {
      id: 2,
      title: "Préparation",
      description: "Nous arrivons avec tout le matériel nécessaire",
      icon: "Truck"
    },
    {
      id: 3,
      title: "Lavage",
      description: "Nettoyage complet avec nos techniques professionnelles",
      icon: "Droplets"
    },
    {
      id: 4,
      title: "Finition",
      description: "Séchage et finition premium pour un résultat parfait",
      icon: "Sparkles"
    }
  ],

  serviceCategories: [
    {
      id: "interior",
      name: "Packs Intérieur",
      description: "Services dédiés au nettoyage intérieur de votre véhicule",
      icon: "Car",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "exterior", 
      name: "Packs Extérieur",
      description: "Services de lavage et protection extérieure",
      icon: "Droplets",
      color: "from-green-500 to-green-600"
    },
    {
      id: "complete",
      name: "Packs Complet",
      description: "Formules complètes intérieur + extérieur",
      icon: "Sparkles",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "addons",
      name: "À la carte",
      description: "Services additionnels et personnalisations",
      icon: "Plus",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "business",
      name: "Entreprises & Flottes",
      description: "Solutions dédiées aux professionnels",
      icon: "Building",
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "subscription",
      name: "Abonnements",
      description: "Formules récurrentes pour particuliers",
      icon: "Repeat",
      color: "from-indigo-500 to-indigo-600"
    }
  ],

  services: [
    // Packs Intérieur
    {
      id: 1,
      category: "interior",
      name: "Intérieur Express",
      shortDescription: "Nettoyage rapide et efficace",
      description: "Aspirations rapides (sièges, tapis, coffres), dépoussiérage, vitres intérieures, désodorisation légère.",
      duration: "35-45 min",
      priceMin: "39€",
      priceReco: "59€",
      features: [
        "Aspirations rapides (sièges, tapis, coffres)",
        "Dépoussiérage général",
        "Vitres intérieures",
        "Désodorisation légère"
      ],
      popular: false
    },
    {
      id: 2,
      category: "interior",
      name: "Intérieur Confort",
      shortDescription: "Nettoyage approfondi avec protection",
      description: "Aspirations approfondies, brossage tapis & moquettes, plastiques nettoyés & protégés (dressings satin), vitres + joints, désodorisation.",
      duration: "60-75 min",
      priceMin: "55€",
      priceReco: "79€",
      features: [
        "Aspirations approfondies",
        "Brossage tapis & moquettes",
        "Plastiques nettoyés & protégés (dressing satin)",
        "Vitres + joints",
        "Désodorisation complète"
      ],
      popular: true
    },
    {
      id: 3,
      category: "interior",
      name: "Intérieur Premium",
      shortDescription: "Détachage localisé inclus",
      description: "Confort + shampoing localisé sièges/tapis (injection-extraction éco), antibactérien surfaces haut-contact, soins cuir (nettoyage doux + lait).",
      duration: "90-110 min",
      priceMin: "79€",
      priceReco: "119€",
      features: [
        "Tout du pack Confort",
        "Shampoing localisé sièges/tapis (injection-extraction éco)",
        "Antibactérien surfaces haut-contact",
        "Soins cuir (nettoyage doux + lait)",
        "Détachage localisé professionnel"
      ],
      popular: false
    },
    
    // Packs Extérieur
    {
      id: 4,
      category: "exterior",
      name: "Extérieur Éco Express",
      shortDescription: "Lavage écologique express",
      description: "Pré-rinçage ciblé, mousse active, brossage jantes, lavage contact microfibres, rinçage sobre, séchage microfibres, dressing pneus.",
      duration: "30-40 min",
      priceMin: "29€",
      priceReco: "49€",
      features: [
        "Pré-rinçage ciblé",
        "Mousse active",
        "Brossage jantes",
        "Lavage contact microfibres",
        "Rinçage sobre",
        "Séchage microfibres",
        "Dressing pneus"
      ],
      popular: true
    },
    {
      id: 5,
      category: "exterior",
      name: "Extérieur Premium",
      shortDescription: "Avec décontamination et traitement",
      description: "Éco Express + décontamination ferreuse légère (jantes/carrosserie), traitement anti-pluie pare-brise 2-4 sem.",
      duration: "50-65 min",
      priceMin: "49€",
      priceReco: "79€",
      features: [
        "Tout du pack Éco Express",
        "Décontamination ferreuse légère (jantes/carrosserie)",
        "Traitement anti-pluie pare-brise 2-4 semaines"
      ],
      popular: false
    },
    {
      id: 6,
      category: "exterior",
      name: "Brillance & Protection",
      shortDescription: "Spray céramique 3-6 mois",
      description: "Extérieur Premium + protection hydrophobe (SiO₂ spray), boost brillance & tenue.",
      duration: "60-80 min",
      priceMin: "69€",
      priceReco: "109€",
      features: [
        "Tout du pack Premium",
        "Protection hydrophobe (SiO₂ spray)",
        "Boost brillance & tenue",
        "Protection céramique 3-6 mois"
      ],
      popular: false
    },

    // Packs Complet
    {
      id: 7,
      category: "complete",
      name: "Complet Essentiel",
      shortDescription: "Intérieur Express + Extérieur Éco",
      description: "Intérieur Express + Extérieur Éco Express.",
      duration: "70-90 min",
      priceMin: "59€",
      priceReco: "89€",
      features: [
        "Intérieur Express complet",
        "Extérieur Éco Express complet",
        "Économie sur les packs séparés"
      ],
      popular: true
    },
    {
      id: 8,
      category: "complete",
      name: "Complet Confort",
      shortDescription: "Intérieur Confort + Extérieur Premium",
      description: "Intérieur Confort + Extérieur Premium.",
      duration: "110-130 min",
      priceMin: "89€",
      priceReco: "139€",
      features: [
        "Intérieur Confort complet",
        "Extérieur Premium complet",
        "Meilleur rapport qualité-prix"
      ],
      popular: true
    },
    {
      id: 9,
      category: "complete",
      name: "Complet Prestige",
      shortDescription: "Coup de neuf intégral",
      description: "Intérieur Premium (détachage localisé) + Brillance & Protection (spray céramique).",
      duration: "130-160 min",
      priceMin: "119€",
      priceReco: "179€",
      features: [
        "Intérieur Premium avec détachage",
        "Brillance & Protection céramique",
        "Service haut de gamme complet"
      ],
      popular: false
    },

    // À la carte
    {
      id: 10,
      category: "addons",
      name: "Dépoilage Animaux",
      shortDescription: "Élimination poils d'animaux",
      description: "Dépoilage spécialisé habitacle complet.",
      duration: "+20-40 min",
      priceMin: "+15€",
      priceReco: "+30€",
      features: [
        "Aspiration spécialisée poils",
        "Brossage anti-poils",
        "Traitement surfaces textiles"
      ],
      popular: false
    },
    {
      id: 11,
      category: "addons",
      name: "Shampoing Sièges/Tapis Complet",
      shortDescription: "Nettoyage en profondeur",
      description: "Shampoing complet sièges et tapis avec injection-extraction.",
      duration: "+45-75 min",
      priceMin: "+39€",
      priceReco: "+69€",
      features: [
        "Injection-extraction professionnelle",
        "Produits spécialisés textiles",
        "Séchage accéléré"
      ],
      popular: true
    },
    {
      id: 12,
      category: "addons",
      name: "Traitement Anti-Pluie Longue Durée",
      shortDescription: "Protection 6-8 semaines",
      description: "Traitement anti-pluie longue durée (6-8 sem).",
      duration: "+10 min",
      priceMin: "+12€",
      priceReco: "+19€",
      features: [
        "Protection longue durée 6-8 semaines",
        "Application professionnelle",
        "Visibilité améliorée"
      ],
      popular: false
    },
    {
      id: 13,
      category: "addons",
      name: "Jantes Pro",
      shortDescription: "Traitement complet jantes",
      description: "Jantes pro (dégraissage/ferreux/étanchéité).",
      duration: "+20-30 min",
      priceMin: "+19€",
      priceReco: "+35€",
      features: [
        "Dégraissage professionnel",
        "Décontamination ferreuse",
        "Traitement d'étanchéité"
      ],
      popular: false
    },

    // Entreprises
    {
      id: 14,
      category: "business",
      name: "Forfaits Flotte sur Site",
      shortDescription: "Service entreprise autonome",
      description: "Intervention sur parking d'entreprise (autonome : eau/élec non requis). Packs mensuels : 5 / 10 / 20 véhicules → tarif dégressif, planning dédié.",
      duration: "Variable",
      priceMin: "Devis",
      priceReco: "personnalisé",
      features: [
        "Intervention sur site autonome",
        "Eau/électricité non requises",
        "Tarifs dégressifs selon volume",
        "Planning dédié entreprise",
        "Rapport photo avant/après",
        "Base : Complet Confort"
      ],
      popular: false
    },

    // Abonnements
    {
      id: 15,
      category: "subscription",
      name: "Abonnement Sérénité",
      shortDescription: "Formules récurrentes avantageuses",
      description: "Mensuel : 1 × Complet Essentiel / mois — -10% sur add-ons. Bimensuel : Extérieur Éco Express récurrent + Intérieur Express 1×/mois — -15% add-ons. Trimestriel : 1 × Complet Confort / trimestre — -10% add-ons.",
      duration: "Récurrent",
      priceMin: "Prix",
      priceReco: "participatifs",
      features: [
        "Mensuel : 1× Complet Essentiel/mois",
        "Bimensuel : formule mixte optimisée",
        "Trimestriel : 1× Complet Confort/trimestre",
        "Réductions sur add-ons (-10% à -15%)",
        "Prix participatifs à chaque passage",
        "Flexibilité et économies"
      ],
      popular: true
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Marie L.",
      location: "Angoulême",
      rating: 5,
      comment: "Service impeccable ! Ma voiture n'avait jamais été aussi propre. L'équipe est très professionnelle.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Thomas D.",
      location: "Charente",
      rating: 5,
      comment: "Très pratique, ils viennent à domicile. Résultat parfait et respect de l'environnement.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sophie M.",
      location: "La Couronne",
      rating: 5,
      comment: "Prix transparents et service de qualité. Je recommande vivement pour leur professionnalisme.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ],

  faq: [
    {
      id: 1,
      question: "Quelles sont vos heures d'ouverture ?",
      answer: "Nous intervenons du lundi au samedi de 8h à 18h. Possibilité de rendez-vous le dimanche sur demande."
    },
    {
      id: 2,
      question: "Dans quelle zone intervenez-vous ?",
      answer: "Nous couvrons toute la Charente avec Angoulême comme base. Déplacement gratuit dans un rayon de 20km."
    },
    {
      id: 3,
      question: "Vos produits sont-ils écologiques ?",
      answer: "Oui, nous utilisons uniquement des produits biodégradables et recyclons l'eau grâce à notre système de filtration embarqué."
    },
    {
      id: 4,
      question: "Comment se déroule le paiement ?",
      answer: "Paiement possible en espèces, carte bancaire ou virement. Règlement après prestation."
    },
    {
      id: 5,
      question: "Proposez-vous des tarifs pour les entreprises ?",
      answer: "Oui, nous avons des tarifs préférentiels pour les flottes d'entreprises et les contrats d'entretien régulier."
    }
  ]
};