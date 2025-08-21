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

  services: [
    {
      id: 1,
      name: "Lavage Intérieur",
      price: "À partir de 35€",
      duration: "45 min",
      description: "Aspirateur, nettoyage surfaces, vitres intérieures",
      features: ["Aspirateur complet", "Nettoyage des sièges", "Vitres intérieures", "Tableau de bord"]
    },
    {
      id: 2,
      name: "Lavage Extérieur",
      price: "À partir de 25€",
      duration: "30 min",
      description: "Lavage carrosserie, vitres extérieures, jantes",
      features: ["Prélavage haute pression", "Shampooing carrosserie", "Rinçage", "Séchage microfibre"]
    },
    {
      id: 3,
      name: "Lavage Complet",
      price: "À partir de 55€",
      duration: "75 min",
      description: "Intérieur + Extérieur pour un résultat optimal",
      features: ["Tous les services intérieur", "Tous les services extérieur", "Finition premium", "Produits de protection"]
    },
    {
      id: 4,
      name: "Préparation Esthétique",
      price: "Sur devis",
      duration: "2-3h",
      description: "Rénovation complète et protection longue durée",
      features: ["Décontamination", "Polish/lustrage", "Cire de protection", "Traitement cuirs"]
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