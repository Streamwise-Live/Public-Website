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
                            featuresBtn: 'Features ▾',
                            aboutBtn: 'About',
                            featuresMenu: {
                                aiOption: 'How it works',
                                customizeOption: 'Customizability',
                                missionOption: 'Made for you',
                            },
                            tryBtn: 'Join the Waitlist!'
                        },
                        sectionHero: {
                            title: 'WE MODERATE YOUR LIVESTREAM SO YOU DON\'T HAVE TO',
                            description: 'Stay focused on your content while our AI moderates in real time, keeping your stream safe, compliant, and free from strikes, bans, and demonetization.'
                        },
                        featuresSection: {
                            title: 'EFFORTLESS HIGH QUALITY.',
                            feature1: {
                                title: 'Real-time protection',
                                description: 'We monitor your video and audio as you stream, with real-time latency so that any unwanted content is automatically filtered out.'
                            },
                            feature2: {
                                title: 'Unlimited possibilities',
                                description: 'Think beyond basic filters. Our modular tools let you personalize your stream your way — with full transparency and flexibility.'
                            },
                            feature3: {
                                title: 'Seamless integration',
                                description: 'Seamlessly integrates with your favorite streaming tools, Twitch, YouTube, and more, without disrupting your workflow. Enjoy full compatibility, multistreaming, and stream analytics.'
                            },
                            moreBtn: 'See LiveGuard in action'
                        },
                        creatorSection: {
                            title: 'CREATOR FIRST',
                            description1: 'Regardless of the streaming platform, we believe that you should not have to worry about unpredictable and unfair copyrighted content and ToS violations when livestreaming. Push your best content out there, and let us worry about the details.',
                            description2: 'We use AI to understand the context within your livestream to generate desired content and edits for your stream\'s video and audio.',
                            description3: 'We are committed to putting you at the forefront of LiveGuard\'s priorities',
                            moreBtn: 'See how this benefits you'
                        },
                        trySection: {
                            title: 'INTERESTED IN BETA TESTING?',
                            description: 'We are always looking for content creators to help us build our platform and bring new ideas to the table!',
                            moreBtn: 'Contact us!'
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
                        },
                        joinPage: {
                            formSection: {
                                title: "Hey, You're here early!",
                                description: "Join our waitlist to get early access to our latest features for FREE and help us innovate a life changing service for all content creators out there.",
                                followUs: "Follow us on social media"
                            }
                        }
                    }
                },
                fr: {
                    translation: {
                        nav: {
                            featuresBtn: 'Fonctionnalités ▾',
                            aboutBtn: 'À propos',
                            featuresMenu: {
                            aiOption: 'Comment ça marche',
                            customizeOption: 'Personnalisation',
                            missionOption: 'Conçu pour vous'
                            },
                            tryBtn: 'Rejoignez la liste d\'attente !'
                        },
                        sectionHero: {
                            title: 'NOUS MODÉRONS VOTRE LIVESTREAM POUR VOUS',
                            description: 'Restez concentré sur votre contenu pendant que notre IA modère en temps réel, gardant votre diffusion sûre, conforme et protégée contre les avertissements, bannissements et démonétisations.'
                        },
                        featuresSection: {
                            title: 'QUALITÉ SANS EFFORT.',
                            feature1: {
                                title: 'Protection en temps réel',
                                description: 'Nous surveillons votre vidéo et votre audio pendant que vous diffusez, avec une latence minimale afin que tout contenu indésirable soit automatiquement filtré.'
                            },
                            feature2: {
                                title: 'Possibilités illimitées',
                                description: 'Allez au-delà des filtres de base. Nos outils modulaires vous permettent de personnaliser votre stream à votre manière — en toute transparence et flexibilité.'
                            },
                            feature3: {
                                title: 'Intégration transparente',
                                description: 'S\'intègre parfaitement à vos outils de streaming préférés, Twitch, YouTube, et bien d\'autres, sans perturber votre flux de travail. Profitez d\'une compatibilité totale, du multistreaming et d\'analyses de stream.'
                            },
                            moreBtn: 'Voir LiveGuard en action'
                        },
                        creatorSection: {
                            title: 'LES CRÉATEURS AVANT TOUT',
                            description1: 'Quelle que soit la plateforme de streaming, vous ne devriez pas avoir à vous soucier des violations de droits d\'auteur ou des conditions d\'utilisation imprévisibles et injustes. Publiez votre meilleur contenu et laissez-nous gérer les détails.',
                            description2: 'Nous utilisons l\'IA pour comprendre le contexte de votre livestream afin de générer le contenu et les modifications souhaités pour la vidéo et l\'audio de votre stream.',
                            description3: 'Nous nous engageons à faire de vous la priorité absolue de LiveGuard.',
                            moreBtn: 'Découvrez ce que cela vous apporte'
                        },
                        trySection: {
                            title: 'INTÉRESSÉ(E) PAR LE PROGRAMME BÊTA ?',
                            description: 'Nous cherchons toujours des créateurs de contenu pour nous aider à construire notre plateforme et à proposer de nouvelles idées !',
                            moreBtn: 'Contactez-nous !'
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
                    rerender();
                });
                $('#languageSwitcher').removeClass('show');
            });
    
            rerender();
          });
  });