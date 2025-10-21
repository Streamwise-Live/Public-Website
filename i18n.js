// Code from https://locize.com/blog/jquery-i18next/

const languages = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' }
}

const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
}

$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
        // detect user language
        // learn more: https://github.com/i18next/i18next-browser-languageDetector
        .use(i18nextBrowserLanguageDetector)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
            debug: true,
            fallbackLng: 'en',
            resources: {
                en: {
                    translation: {
                        nav: {
                            featuresBtn: 'Features',
                            missionBtn: 'Mission',
                            pricingBtn: 'Pricing',
                            faqBtn: 'FAQ',
                            tryBtn: 'Open App',
                            lang: "EN"
                        },
                        tc2025: {
                            text: "Meet us at TwitchCon 2025, San Diego from Oct 17 to 19 to get early access to the app.",
                            button: "I got an invite code"
                        },
                        sectionHero: {
                            title: 'YOUR LIVESTREAM SO YOU DON\'T HAVE TO',
                            keywords: ["MODERATES", "EDITS", "FILTERS", "ENHANCES"],
                            description: 'Real-time AI audio/video moderation that blocks bans, prevents demonetization, and adapts to your style — so you can stream stress-free.',
                            actionBtn: 'Register Now'
                        },
                        featuresSection: {
                            title: 'EFFORTLESS HIGH QUALITY.',
                            feature1: {
                                title: 'Real-time protection',
                                description: 'We monitor your video and audio as you stream, with real-time latency so that any unwanted content is automatically filtered out.'
                            },
                            feature2: {
                                title: 'Unlimited possibilities',
                                description: 'Think beyond basic protection filters. Our modular tools let you personalize your stream your way, with full transparency and flexibility, by detecting custom keywords in audio in real time, and applying edits to the stream based on your defined events.'
                            },
                            feature3: {
                                title: 'Seamless integration',
                                description: 'Seamlessly integrates with your favorite streaming platforms, Twitch, YouTube, and more, without disrupting your workflow. Enjoy full compatibility with OBS, Streamlabs, and other popular encoders.'
                            },
                            moreBtn: 'See it in action'
                        },
                        creatorSection: {
                            title: 'CREATOR FIRST',
                            description1: 'We believe livestreaming should be fun, creative, and safe for independant content creators of any scale. No matter the platform, you deserve the freedom to own your stream and share your best content-without the fear of mistakes, sudden copyright strikes or unfair ToS violations.',
                            description2: 'In a world where creators face constant pressure to produce more and better content, we\'re building a platform and community that offers the support and tools they need to thrive.',
                            moreBtn: 'See how this benefits you'
                        },
                        pricingSection: {
                            title: 'Pricing',
                            description: 'Streamwise has a tier-based pricing system based on the number of hours you stream per month.',
                            plans: {
                                free: {
                                    name: 'Free',
                                    price: '0',
                                    feature: '10 hours included',
                                    buyBtn: 'Book a demo'
                                },
                                starter: {
                                    name: 'Starter',
                                    price: '10',
                                    feature: '30 hours included',
                                    buyBtn: 'Coming soon'
                                },
                                intermediate: {
                                    name: 'Intermediate',
                                    price: '16',
                                    feature: '55 hours included',
                                    buyBtn: 'Coming soon'
                                },
                                pro: {
                                    name: 'Pro',
                                    price: '22',
                                    feature: '80 hours included',
                                    buyBtn: 'Coming soon'
                                }
                            },
                            onDemandDescription: 'Need more streaming time? Add on-demand hours anytime.'
                        },
                        faqSection: {
                            qsetup: "How easy is it to set up?",
                            asetup: "Streamwise is designed to be as easy to set up as possible. We use a one time setup system, meaning you’ll only need to access our web dashboard for the initial setup, and if you want to modify some action or reaction events.",
                            qstreamkeys: "Do you store my stream keys?",
                            astreamkeys: "Yes, but keys are locked away once saved, which is why you cannot view them afterwards. You can update or delete them at any time. We are constantly working to improve our security measures to ensure your data is safe with us.",
                            qmycomputer: "What do you run on my computer?",
                            amycomputer: "Nothing. Streamwise runs in the cloud as a secure middleman between your recording tool and your streaming platforms.",
                            qcompatible: "What platforms/tools is it compatible with?",
                            acompatible: "Any destination that accepts the standard streaming protocol. Works with recording tools like OBS or Streamlabs and platforms like Twitch, YouTube, and Kick.",
                            qlatency: "How much latency does it introduce?",
                            alatency: "We only introduce about 3 to 5 seconds of additional latency depending on your region and stream settings. We continuously optimize to keep this as low as possible.",
                            qlang: "What languages does your model work on?",
                            alang: "Currently we only support English, but future support for other languages is being worked on."
                        },
                        trySection: {
                            title: 'INTERESTED IN BETA TESTING?',
                            description: 'We are always looking for content creators to help us build our platform and bring new ideas to the table!',
                            moreBtn1: 'Discord',
                            moreBtn2: 'Email',
                            condition: "OR"
                        },
                        partnerSection : {
                            title: 'OUR PARTNERS',
                        },
                        footer: {
                            aboutSection: {
                                title: 'About',
                                link1: 'Our Mission',
                                link2: 'Team',
                                link3: 'Careers'
                            },
                            contactSection: {
                                title: 'Reach us here:'
                            },
                            policiesSection: {
                                title: 'Policies',
                                link1: 'Privacy',
                                link2: 'Terms'
                            },
                            helpSection: {
                                title: 'Help',
                                link1: 'Documentation',
                                link2: 'Support'
                            }
                        }
                    }
                },
                fr: {
                    translation: {
                        nav: {
                            featuresBtn: 'Fonctionnalités',
                            missionBtn: 'Mission',
                            pricingBtn: 'Prix',
                            faqBtn: 'FAQ',
                            tryBtn: 'Ouvrir l\'app',
                            lang: "FR"
                        },
                        tc2025: {
                            text: "Venez nous voir à TwitchCon 2025, à San Diego du 17 au 19 octobre pour obtenir un accès beta.",
                            button: "J'ai un code d'accès"
                        },
                        sectionHero: {
                            title: 'VOTRE LIVESTREAM',
                            keywords: ["MODÈRE", "ÉDITE", "FILTRE", "AMÉLIORE"],
                            description: 'Modération audio/vidéo IA en temps réel qui bloque les bannissements, prévient la démonétisation et s\'adapte à votre style — pour que vous puissiez streamer sans stress.',
                            actionBtn: 'Inscrivez-vous maintenant'
                        },
                        featuresSection: {
                            title: 'QUALITÉ SANS EFFORT.',
                            feature1: {
                                title: 'Protection instantanée',
                                description: 'Nous surveillons votre vidéo et votre audio pendant que vous diffusez, avec une latence minimale afin que tout contenu indésirable soit automatiquement filtré.'
                            },
                            feature2: {
                                title: 'Possibilités illimitées',
                                description: 'Allez au-delà des filtres de base. Nos outils modulaires vous permettent de personnaliser votre stream à votre manière en toute transparence et flexibilité. Nous détectons en temps réel vos mots-clés personnalisés dans l\'audio et appliquons des modifications au stream en fonction de vos événements définis.'
                            },
                            feature3: {
                                title: 'Intégration fluide',
                                description: 'S\'intègre parfaitement à vos outils de streaming préférés, Twitch, YouTube, et bien d\'autres, sans perturber votre flux de travail.'
                            },
                            moreBtn: 'Voir Streamwise en action'
                        },
                        creatorSection: {
                            title: 'LES CRÉATEURS AVANT TOUT',
                            description1: 'Nous croyons que le livestreaming doit être amusant, créatif et sûr pour tous les créateurs de contenu. Quelle que soit la plateforme, vous méritez la liberté de posséder votre stream et de partager votre meilleur contenu — sans la crainte d\'erreurs, de strikes soudains pour atteinte aux droits d\'auteur ou de violations injustes des conditions d\'utilisation.',
                            description2: 'Dans un monde où les créateurs subissent une pression constante pour produire toujours plus de contenu, nous construisons une plateforme et une communauté qui leur offrent le soutien et les outils dont ils ont besoin pour réussir.',
                            moreBtn: 'Découvrez ce que cela vous apporte'
                        },
                        pricingSection: {
                            title: 'Prix',
                            description: 'Streamwise utilise un système de prix basé sur le nombre d\'heures de streaming par mois.',
                            plans: {
                                free: {
                                    name: 'Graduit',
                                    price: '0',
                                    feature: '10 heures incluses',
                                    buyBtn: 'Demander une démo'
                                },
                                starter: {
                                    name: 'Débutant',
                                    price: '10',
                                    feature: '30 heures incluses',
                                    buyBtn: 'Bientôt disponible'
                                },
                                intermediate: {
                                    name: 'Intermédiaire',
                                    price: '16',
                                    feature: '55 heures incluses',
                                    buyBtn: 'Bientôt disponible'
                                },
                                pro: {
                                    name: 'Pro',
                                    price: '22',
                                    feature: '80 heures incluses',
                                    buyBtn: 'Bientôt disponible'
                                }
                            },
                            onDemandDescription: 'Besoin de plus de temps de streaming? Ajoutez des heures à la demande à tout moment.'
                        },
                        faqSection: {
                            qsetup: "À quel point est-ce facile à configurer?",
                            asetup: "Streamwise est conçu pour être aussi facile à configurer que possible. Nous utilisons un système de configuration unique, ce qui signifie que vous n'aurez besoin d'accéder à notre tableau de bord web que pour la configuration initiale ou si vous souhaitez modifier certains événements d'action ou de réaction.",
                            qstreamkeys: "Conservez-vous mes clés de stream?",
                            astreamkeys: "Oui, mais les clés sont verrouillées une fois enregistrées, c'est pourquoi vous ne pouvez plus les consulter ensuite. Par contre, Vous pouvez les mettre à jour ou les supprimer à tout moment. Nous travaillons en permanence à améliorer nos mesures de sécurité afin de garantir que vos données soient en sécurité avec nous.",
                            qmycomputer: "Qu'est-ce qui roule sur mon ordinateur avec vous?",
                            amycomputer: "Rien. Streamwise fonctionne dans le cloud comme intermédiaire sécurisé entre votre outil d'enregistrement et vos plateformes de streaming.",
                            qcompatible: "Avec quelles plateformes/outils est-ce compatible?",
                            acompatible: "Toute destination qui accepte le protocole standard de streaming. Fonctionne avec des outils d'enregistrement comme OBS ou Streamlabs et des plateformes comme Twitch, YouTube et Kick.",
                            qlatency: "Quelle délai sur la vidéo cela introduit-il?",
                            alatency: "Nous n'ntroduisons qu'environ 3 à 5 secondes de latence supplémentaire selon votre région et vos paramètres de stream. Nous optimisons continuellement afin de maintenir ce délai aussi bas que possible.",
                            qlang: "Sur quelles langues votre modèle fonctionne-t-il?",
                            alang: "Actuellement, il fonctionne seulement en anglais, mais le support d'autres langues est en cours de développement."
                        },
                        trySection: {
                            title: 'INTÉRESSÉ(E) PAR LE PROGRAMME BÊTA?',
                            description: 'Nous cherchons toujours des créateurs de contenu pour nous aider à construire notre plateforme et à proposer de nouvelles idées !',
                            moreBtn1: 'Discord',
                            moreBtn2: 'Email',
                            condition: "OU"
                        },
                        partnerSection : {
                            title: 'NOS PARTENAIRES',
                        },
                        footer: {
                            aboutSection: {
                                title: 'À propos',
                                link1: 'Notre mission',
                                link2: 'Équipe',
                                link3: 'Carrières'
                            },
                            contactSection: {
                                title: 'Nous contacter :'
                            },
                            policiesSection: {
                                title: 'Politiques',
                                link1: 'Confidentialité',
                                link2: 'Conditions'
                            },
                            helpSection: {
                                title: 'Aide',
                                link1: 'Documentation',
                                link2: 'Support'
                            }
                        },
                        joinPage: {
                            formSection: {
                                title: "Hé! Tu es en avance!",
                                description: "Rejoignez note liste d'attente pour accéder gratuitement à nos dernières fonctionnalités en avant-première et aidez-nous à innover pour créer un service qui va changer le monde pour tous les créateurs de contenu.",
                                followUs: "Suivez-nous sur les réseaux sociaux pour ne manquer aucune mise à jour!"
                            }
                        },
                        howItWorksPage: {
                            sectionHero: {
                                title: "La transparence est primordiale pour nous",
                                description: "Nous vous emmenons dans les coulisses pour vous montrer comment fonctionne LiveGuard !"
                            },
                            pipelineSection: {
                                description: "LiveGuard utilise un système d'IA multimodale en temps réel dans le cloud, qui traite simultanément les flux vidéo et audio. Agissant comme un intermédiaire intelligent entre votre outil d'enregistrement et la plateforme de diffusion en direct, nous interceptons et modifions votre flux avant même qu'il n'atteigne la plateforme, vous permettant ainsi de produire le meilleur contenu possible.",
                                join: "Essayez-le ici !",
                                featuresHeader: "Ce que notre système détecte et vous protège en temps réel :",
                                audioFeatures: {
                                    feature1: "Grossièretés et toxicité",
                                    feature2: "Musique protégée par des droits d'auteur",
                                    feature3: "Fuites d'informations personnelles"
                                },
                                videoFeatures: {
                                    feature1: "Nudité et contenu suggestif",
                                    feature2: "Violence et drogues",
                                    feature3: "Vidéos/images protégées par des droits d'auteur"
                                },
                                customFeatures: {
                                    feature1: "Mots/phrases personnalisés",
                                    feature2: "Personne personnalisée",
                                    feature3: "Objet personnalisé",
                                    feature4: "Logo/marque personnalisé"
                                }
                            },
                            audioDetectionSection: {
                                title: "Détection audio",
                                description: "Notre moteur audio utilise une reconnaissance vocale en temps réel de pointe et une analyse acoustique pour détecter le contenu nuisible ou indésirable dès qu'il se produit. Que ce soit des grossièretés, du contenu protégé ou des informations personnelles, notre système l'intercepte avant qu'il n'atteigne la plateforme de diffusion. Pour la protection ou le contrôle créatif, avec des déclencheurs personnalisables, vous pouvez créer des moments interactifs ou réagir automatiquement à des mots ou phrases spécifiques."
                            },
                            videoDetectionSection: {
                                title: "Détection vidéo",
                                description: "Notre moteur vidéo s'appuie sur des modèles d'IA visuelle en temps réel pour détecter les violations visuelles telles que la nudité, la violence, les logos et le contenu protégé avant qu'elles n'apparaissent sur votre diffusion. Cela garantit que votre contenu respecte les règles des plateformes et évite les avertissements ou suppressions. Avec la détection personnalisée, vous pouvez aussi importer des images de référence pour surveiller des personnes, objets ou marques spécifiques."
                            }
                        }
                    }
                }
            }
        }, (err, t) => {
            if (err) return console.error(err);
      
            // for options see
            // https://github.com/i18next/jquery-i18next#initialize-the-plugin
            jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      
            // fill language switcher
            Object.keys(languages).map((lng) => {
                const li = document.createElement("li");
                const a = document.createElement("a");

                a.href = "#";
                a.setAttribute("data-lang", lng);
                a.textContent = languages[lng].nativeName;
                li.appendChild(a);
                $('#languageSwitcher').append(li);
            });
            $('#languageSwitcher').on('click', 'a[data-lang]', function (e) {
                const chosenLng = $(this).data('lang');
                i18next.changeLanguage(chosenLng, () => {
                    // Populate keywords global variable
                    window.keywords = i18next.t('sectionHero.keywords', { returnObjects: true });
                    
                    rerender();
                });
                $('#languageSwitcher').removeClass('show');
            });
            
            // Initiate keywords global variable
            window.keywords = i18next.t('sectionHero.keywords', { returnObjects: true });
    
            rerender();
          });
  });