export const locale = {
    "lang": "fr",
    "data": {
        "MENU ROUTE TITLES": {
            'SERVICE': "Détail d'un service",
            'SNAPSHOT': "Détail d'un snapshot",
            'STEP': "Détail d'une étape de service"
        },
        "GENERAL": {
            "CLICK HERE": "clicker ici",
            "PRODUCTS": "produits",
            "CLIENTS": "clients",
            "ENTERPRISES": "enterprises/labos",
            "SERVICES": "service(s)",
            "SNAPSHOTS": "snapshot(s)",
            "OFFERS": "offre(s)",
            "OBJECT": {
                "SERVICE": "service",
                "STEP": "étape",
                "SNAPSHOT": "snapshot",
                "OFFER": "offre",
                "PRODUCT": "produit"
            },
            "ACTION": {
                "DISABLE": "désactiver",
                "REACTIVATE": "réactiver",
                "DELETE": "supprimer"
            }            
        },
        "MENU": {
            "HOME": "Accueil",
            "DASHBOARD": "Tableau de bord",
            "CALCULATOR": "Calculateur des prix",
            "INFO": "Infos",
            "BILLING": "Gestion des offres",
            "EQUIPMENT": "Réservation des équipements",
            "SAMPLES": "Gestion des échantillons",
            "STOCK": "Gestion du stock"
        },
        "FORM": {
            "SUBMIT": "Envoyer",
            "RESET": "Réinitialiser"
        },
        "PRODUCT" : {
            "COLUMN": {
                "PRODUCT": "Produit",
                "SUPPLIER": "Fournisseur",
                "PACKAGE": "Conditionnement",
                "CATALOG NR": "No catalogue",
                "PRICE": "Prix",
                "FRIGO": "Frigo",
                "DISABLED": "Désactivé?",
                "WHEN": "Quand?",
                "WHO": "Qui?",
                "FROM": "Depuis",
                "TO": "Jusque",
                "WHAT": "Quoi?",
                "QTY IN BASKET": "Qté",
                "TOTAL": "Total",
                "EQUIPE": "Equipe",
                "HOW MANY": "Combien",
                "CATEGORY": "Catégorie",
                "JUSTIFICATION": "Justification"
            },
            "SEARCH HELP": {
                "MSG1": "liquid : produits dont le nom, la catégorie ou le nom du fournisseur contient le texte 'liquid'",
                "MSG2": "$>200 : produits dont le prix est supérieur à 200 euros",
                "MSG3": "$ <50 : produits dont le prix est inférieur à 50 euros",
                "MSG4": "$SE : produits sélectionnés",
                "MSG5": "$S/ : product qui peut se trouver dans le stock",
                "MSG6": "$S/tip : produit stock qui contient 'tip' dans le nom",
                "MSG7": "$T6 : produit avec une TVA à 6%",
                "MSG8": "$T0 : produit avec une TVA à 0%",
                "MSG9": "$M : produit présent plusieurs fois dans la base de données avec le même numéro de catalogue",
                "MSG10": "$DI : produits désactivés",
                "MSG11": "$PR : produits privés (peuvent être vus/utilisés seulement par les membres de VOTRE labo)",
                "MSG12": "$PU : produits publics (peuvent être vus/utilisés seulement par les membres de TOUS les labos)",
                "MSG13": "$V : produits en attente de validation",
                "MSG14": "$OR : produits qui ont déjà été commandés dans votre labo",
                "MSG15": "$FR : produits frigos",
                "MSG16": "$DO : produits qui ont des documents associés",
                "MSG17": "#HS: produits qui sont (ou ont été) dans le stockage",
                "MSG18": "#<5: produits qui sont (ou ont été) dans le stockage et pour lesquels il reste égal ou moins de 5 éléments dans le stock",
                "MSG19": "#>8: produits qui sont (ou ont été) dans le stockage et pour lesquels il reste plus de 8 éléments dans le stock"
            },
            "LABEL": {
                "NAME": "Nom du produit",
                "SELECT PRODUCT TIP": "sélectionner le produit",
                "UNSELECT PRODUCT TIP": "désélectionner le produit"                
            }
        },
        "PLATFORM": {
            "MENU": {
                "SERVICES": "Services",
                "MACHINES": "Machines",
                "LABOUR TYPES": "Types de main d'oeuvre",
                "CLIENT TYPES": "Types de clients",
                "CORRECTION TYPES": "Types de corrections",
                "ENTERPRISES": "Enterprises",
                "CLIENTS": "Clients",
                "OFFERS": "Offres"
            },
            "SERVICE": {
                "SEARCH HELP": {
                    "MSG1": "pme: liste des services ayant 'pme' dans la version ou la description",
                    "MSG2": "$d: liste des services supprimés"
                },
                "MENU": {
                    "LIST OF SERVICES": "Liste de services",
                    "ALL SERVICES": "Tous les services",
                    "BY CATEGORIES": "Par catégorie",
                    "INFO": "Info",
                    "ADD A SERVICE": "Ajouter un service",
                    "CATEGORIES": "Catégories",
                    "LIST OF CATEGORIES": "Liste des catégories",
                    "ADD A SERVICE CATEGORY": "Ajouter une catégorie de services"
                },
                "COLUMN": {
                    "SERVICE": "Service",
                    "CLIENT TYPE": "Type de client",
                    "CATEGORIES": "Catégories",
                    "COST": "Coût",
                    "CURRENT": "Actuel",
                    "NAME": "Nom",
                    "DESCRIPTION": "Description"
                },
                "LABEL": {
                    "NAME OF SERVICE": "nom du service",
                    "DESCRIPTION": "description",
                    "CATEGORY": "catégorie",
                    "NAME OF CATEGORY": "nom de la catégorie",
                    "SELECT SERVICE TIP": "sélectionner un service",
                    "UNSELECT SERVICE TIP": "désélectionner le service"
                },
                "DETAIL": {
                    "MENU": {
                        "INFO": "Info",
                        "CORRECTION FACTORS": "Facteurs de correction",
                        "CURRENT PRICES": "Prix actuels",
                        "SERVICE STEPS": "Etapes du service",
                        "SNAPSHOTS": "Snapshots",
                        "CLONE THIS SERVICE": "Cloner ce service",
                        "IDENTICAL SERVICES": "Services identiques",
                        "SIMILAR SERVICES": "Services similaires",
                        "COMPARE SERVICES": "Comparer les services",
                        "DISABLE": "Désactiver le service",
                        "REACTIVATE": "Réactiver le service"
                    },
                    "COLUMN": {},
                    "LABEL": {
                        "NAME": "nom",
                        "DESCRIPTION": "description",
                        "CURRENT VERSION": "version actuelle",
                        "CATEGORY": "catégorie",
                        "CLIENT TYPE USED": "type de client en cours",
                        "BASED ON CURRENT SNAPSHOT": "basé sur le snapshot en cours",
                        "NAME OF NEW SERVICE": "nom du nouveau service"
                    }
                },
                "STEP": {
                    "MENU": {
                        "LIST OF STEPS": "Liste d'étapes",
                        "ADD STEP": "Ajouter une étape",
                        "DISABLED STEPS": "Etapes désactivées",
                        "INFO": "Info",
                        "COST DETAIL": "Détail du coût",
                        "SERVICES": "Services",
                        "USED SERVICES": "Services utilisés",
                        "SELECT SERVICES": "Choisir des services",
                        "PRODUCTS": "Produits",
                        "CONSOMMABLES": "Consommables",
                        "USED PRODUCTS": "Produits utilisés",
                        "SELECT PRODUCTS": "Choisir des produits",
                        "SELECT PRIVATE PRODUCTS": "Choisir des produits privés",
                        "LABOUR": "Main d'oeuvre",
                        "USED HOURS": "Heures de travail",
                        "ADD LABOUR TYPE": "Ajouter un type de main d'oeuvre",
                        "DISABLE STEP": "Désactiver l'étape",
                        "REACTIVATE STEP": "Réactiver l'étape"
                    },
                    "COLUMN": {
                        "SERVICE": "Service",
                        "CURRENT": "En cours",
                        "NB OF UNITS USED": "Nb d'unités utilisées",
                        "PRODUCT": "Produit",
                        "PRICE PER UNIT": "Prix unitaire",
                        "NB OF UNITS IN PRODUCT": "Nb d'unités dans le produit",
                        "TOTAL": "Total",
                        "LABOUR": "Main d'oeuvre",
                        "NB HOURS": "Nb heures",
                        "RATE": "Taux horaire",
                        "STEP": "Etape",
                        "DESCRIPTION": "Description",
                        "MACHINE": "Machine",
                        "RUNTIME (IN H)": "Exécution (en h)",
                        "COST": "Coût",
                        "COST OF STEP": "Coût de l'étape"
                    },
                    "LABEL": {
                        "NAME OF STEP": "nom de l'étape",
                        "DESCRIPTION": "description",
                        "USED MACHINE": "machine utilisée",
                        "RUNTIME (IN HOURS)": "exécution (en h)",
                        "EVALUATION OF COST": "evaluation du coût",
                        "DESCRIPTION OF CONSOMMABLES": "description des consommables",
                        "TOTAL": "total",
                        "NAME OF SERVICE STEP": "nom de l'étape du service",
                        "CHOOSE A MACHINE": "choisir une machine"
                    },
                    "COST": {
                        "MENU": {},
                        "COLUMN": {},
                        "LABEL": {
                            "MACHINE COST OF RUN": "coût machine du run",
                            "COST OF PRODUCTS": "coût en produits",
                            "COST OF CONSOMMABLES": "coût en consommables",
                            "COST OF LABOUR": "coût main d'oeuvre",
                            "REDUCTION ON": "réduction sur",
                            "TOTAL COST OF STEP": "coût total de l'étape",
                            "PRICE OF STEP": "prix de l'étape"
                        }
                    }
                },
                "SNAPSHOT": {
                    "SEARCH HELP": {
                        "MSG1": "pme: liste des snapshots ayant 'pme' dans la version ou dans la description"
                    },
                    "MENU": {
                        "INFO": "Info",
                        "SERVICE STEPS": "Etapes du service",
                        "PRICES": "Prix",
                        "DISABLE SNAPSHOT": "Désactiver le snapshot",
                        "REACTIVATE SNAPSHOT": "Réactiver le snapshot",
                        "PRODUCT ASSOCIATED": "Produit associé"
                    },
                    "COLUMN": {
                        "CLIENT TYPE": "Type de client",
                        "COST": "Coût",
                        "STEP": "Etape",
                        "DATE": "Date",
                        "VERSION": "Version",
                        "DESCRIPTION": "Description",
                        "SERVICE": "Service",
                        "COST (STANDARD)": "Coût (standard)"
                    },
                    "LABEL": {
                        "SERVICE NAME": "nom du service",
                        "DESCRIPTION": "description",
                        "VERSION": "version",
                        "VERSION OF SNAPSHOT": "version du snapshot"
                    }
                }
            },
            "MACHINE": {
                "MENU": {
                    "LIST OF MACHINES": "Liste de machines",
                    "INFO": "Info",
                    "COST": "Coûts",
                    "ADD A MACHINE": "Ajouter une machine"
                },
                "COLUMN": {
                    "NAME": "Nom",
                    "DESCRIPTION": "Description",
                    "COST PER HOUR": "Coût par heure"
                },
                "LABEL": {
                    "NAME": "Nom",
                    "DESCRIPTION": "Description",
                    "PRICE": "Prix",
                    "LIFETIME (IN YEARS)": "Durée de vie (en années)",
                    "MAINTENANCE PRICE (PER YEAR)": "Prix de maintenance (par année)",
                    "EITHER": "Soit",
                    "OCCUPANCY (IN %)": "Taux d'occupation (en %)",
                    "HOURS PER DAY": "Heures par jour",
                    "OR": "Soit",
                    "HOURS PER YEAR": "Heures par année",
                    "ERROR IN OCCUPANCY!!! CHECK YOUR DATA!": "Erreur dans le taux d'occupation! vörifiez vos données.",
                    "ANNUAL AMORTIZATION": "Amortisation annuelle",
                    "ANNUAL COST (INCL. MAINTENANCE)": "Coût annuel (incl. maintenance)",
                    "NB RUNNING HOURS PER YEAR": "Nombre d'heures d'activité par année",
                    "COST PER HOUR HOUR": "Coût par heure",
                    "NAME OF MACHINE": "Nom de la machine"
                }
            },
            "LABOUR": {
                "MENU": {
                    "LIST OF LABOUR TYPES": "Liste des types de main d'oeuvre",
                    "ADD A LABOUR TYPE": "Ajouter un type de main d'oeuvre"
                },
                "COLUMN": {
                    "LABOUR TYPE": "Type de main d'oeuvre",
                    "DESCRIPTION": "Description",
                    "HOURLY RATE": "Taux horaire"
                },
                "LABEL": {
                    "LABOUR TYPE": "Type de main d'oeuvre",
                    "DESCRIPTION": "Description",
                    "HOURLY RATE": "Taux horaire",
                    "HOURLY RATE (IN EUROS)": "taux horaire (en euros)"
                }
            },
            "CLIENT TYPE": {
                "MENU": {
                    "LIST OF CLIENT TYPES": "Liste de types de clients",
                    "INFO": "Info",
                    "SPECIFIC CORRECTIONS": "Corrections spécifiques",
                    "ADD A CLIENT TYPE": "Ajouter un type de client",
                    "CORRECTION FACTORS": "Facteurs de correction"
                },
                "COLUMN": {
                    "NAME": "Nom",
                    "DESCRIPTION": "Description",
                    "IS INTERNAL CLIENT": "Est ce un client interne"
                },
                "LABEL": {
                    "NAME": "nom",
                    "DESCRIPTION": "description",
                    "IS INTERNAL CLIENT": "est ce un client interne",
                    "CLIENT TYPE": "type de client",
                    "THIS IS A DEFAULT VALUE TIP": "Ceci est une valeur par défaut. Vous pouvez la changer",
                    "IF YOU WANT DEFAULT VALUE TIP": "Mettez -1 si vous souhaitez utiliser la valeur par défaut"
                }
            },
            "CORRECTION": {
                "MENU": {
                    "LIST OF CORRECTION TYPES": "Liste des types de correction",
                    "ADD A CORRECTION TYPE": "Ajouter un type de correction"
                },
                "COLUMN": {
                    "CORRECTION TYPE": "type de correction",
                    "SHORTCUT": "abbréviation",
                    "DEFAULT VALUE": "valeur par défaut (en %)",
                    "ON PRODUCTS": "sur les produits",
                    "ON LABOUR": "sur le travail",
                    "ON TOTAL": "sur le total"
                },
                "LABEL": {
                    "CORRECTION TYPE": "type de correction",
                    "SHORTCUT": "abbréviation",
                    "DEFAULT VALUE": "valeur par défaut (en %)"
                }
            },
            "ENTERPRISE": {
                "SEARCH HELP": {
                    "MSG1": "cardio: liste des entreprises ou labos qui contiennent 'cardio' dans leur nom"
                },
                "MENU": {
                    "LIST OF ENTERPRISES": "Liste d'enterprises",
                    "INFO": "Info",
                    "ADD AN ENTERPRISE": "Ajouter une entreprise"
                },
                "COLUMN": {
                    "NAME": "Nom",
                    "TELEPHONE": "Téléphone",
                    "FAX": "Fax",
                    "WEB": "Site Web",
                    "TYPE": "Type"
                },
                "LABEL": {
                    "NAME": "Nom",
                    "TELEPHONE": "Téléphone",
                    "FAX": "Fax",
                    "WEB": "Site Web",
                    "CLIENT TYPE": "Type de client",
                    "CHOOSE A CLIENT TYPE PHOLDER": "choisir un type de client"
                }
            },
            "CLIENT": {
                "SEARCH HELP": {
                    "MSG1": "john: liste des clients qui contiennent 'john' dans leur nom",
                    "MSG2": "'molecular': liste des clients qui contiennent 'molecular' dans leur enterprise"
                },
                "MENU": {
                    "LIST OF CLIENTS": "Liste de clients",
                    "INFO": "Info",
                    "ADD A CLIENT": "Ajouter un client"
                },
                "COLUMN": {
                    "FULL NAME": "Nom",
                    "EMAIL": "Email",
                    "TELEPHONE": "Téléphone",
                    "ENTERPRISE/LABO": "Entreprise/Labo",
                    "CLIENT TYPE": "Type de client"
                },
                "LABEL": {
                    "NAME": "nom",
                    "FIRST NAME": "prénom",
                    "EMAIL": "e-mail",
                    "LABO": "laboratoire, département",
                    "WEB PAGE": "page web",
                    "TELEPHONE": "téléphone",
                    "ENTERPRISE": "entreprise",
                    "ENTERPRISE OF CLIENT": "entreprise du client",
                    "CHOOSE AN ENTERPRISE PHOLDER": "choisir une entreprise"
                }
            },
            "OFFER": {
                "SEARCH HELP": {
                    "MSG1": "pme: liste des offres avec 'pme' dans la description ou dans les services offerts",
                    "MSG2": "20170715-GEN: liste des offres ayant '20170715-GEN' dans le numéro d'offre",
                    "MSG3": "Georges: liste des offres ayant 'Georges' dans le nom du client ou de l'entreprise",
                    "MSG4": "envoyé: liste des offres ayant 'envoyé' dans le statut de l'offre",
                    "MSG5": "$>200: liste des offres dont le total est supérieur à euros",
                    "MSG6": "$<200: liste des offres dont le total est inférieur à euros"
                },
                "MENU": {
                    "LIST OF OFFERS": "Liste des offres",
                    "ADD AN OFFER": "Ajouter une offre",
                    "INFO": "Info",
                    "OPERATIONS": "Opérations",
                    "SERVICES": "Services",
                    "ORDERED SERVICES": "Services commandés",
                    "SELECT SERVICES": "Choisir des services",
                    "VERSIONS": "Versions",
                    "ALL VERSIONS": "Toutes les versions",
                    "SAVE CURRENT VERSION": "Sauver la version actuelle"
                },
                "COLUMN": {
                    "DATE": "Date",
                    "NUMERO": "Numéro",
                    "REASON": "Raison",
                    "PRICE": "Prix",
                    "PRODUCTS": "Produits",
                    "SERVICE": "Service",
                    "QUANTITY": "Quantité",
                    "PRICE/U.": "Prix/u.",
                    "REDUCT. (%)": "Réduct. (%)",
                    "TOTAL": "Total",
                    "PREPAID": "Prépayé",
                    "COMMENT": "Commentaire",
                    "STATUS": "Statut",
                    "CLIENT": "Client"
                },
                "LABEL": {
                    "NUMERO": "Numéro",
                    "DESCRIPTION": "Description",
                    "CLIENT": "Client",
                    "CLIENT TYPE": "Type de client",
                    "COMMERCIAL STATUS": "Statut commercial",
                    "OPERATIVE STATUS": "Statut opératif",
                    "CHOOSE A CLIENT": "chosir un client",
                    "CHOOSE A STATUS": "choisir un statut",
                    "SNAPSHOT REASON": "raison du snapshot",
                    "THESE OPERATION WILL CREATE NEW VERSION": "Cette opération va créer une nouvelle version de l'offre et sauver la version actuelle",
                    "SEND TO CLIENT": "Envoyer au client",
                    "INVOICE HAS BEEN SENT": "La facture a été envoyée",
                    "HIDE DETAILS": "cacher les détails",
                    "DESCRIPTION OF SNAPSHOT PHOLDER": "description du snapshot",
                    "SNAPSHOT": "Snapshot",
                    "TOTAL": "Total"
                }
            }
        }        
    }
}
