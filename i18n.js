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
                        tryButton: 'Try it out for FREE',
                        contactButton: 'Contact Us',
                        topContent: {
                            title: 'REAL-TIME EDITING, REAL-TIME RESULTS.',
                            paragraph: 'The easiest way of using AI to put the fun back into content creation while protecting your work from sanctions and demonetizations on Twitch, Youtube, Instagram, and more.'
                        },
                        sectionDesc: {
                            title: 'EFFORTLESS HIGH QUALITY.',
                            protection: {
                                title: 'Real-time protection',
                                paragraph: 'Customize our AI models to enhance your stream\'s audio and video by filtering out unwanted content in real-time. Take back control of your livestream and avoid platform penalties.'
                            },
                            possibilities: {
                                title: 'Unlimited possibilities',
                                paragraph: 'Introduce unlimited profile configurations to your streams on the cloud with multistream, layout designs, statistics analysis, and more. Let your creativity run wild!'
                            },
                            integration: {
                                title: 'Seamless integration',
                                paragraph: 'Seamlessly integrates with your favorite streaming tools and platforms. Never compromise on your current workflow, without exceptions.'
                            }
                        },
                        sectionML: {
                            title: 'CREATOR FIRST',
                            paragraph1: 'Regardless of the streaming platform, we believe that you should not have to worry about unpredictable and unfair copyrighted content and ToS violations when livestreaming. Push your best content out there, and let us worry about the details.',
                            paragraph2: 'We use AI to understand the context within your livestream to generate desired content and edits for your stream\'s video and audio.'
                        },
                        sectionBeta: {
                            title: 'INTERESTED IN BETA TESTING?',
                            paragraph: 'We are always looking for content creators to help us build our platform and bring new ideas to the table!'
                        },
                        betaPage: {
                            title: 'Hey! You\'re here early!',
                            paragraph: 'Join our beta testing program to get early access to our latest features for FREE and help us innovate a life changing service for all content creators out there.',
                            outro: 'Follow us on social media to not miss any update!'
                        }
                    }
                },
                fr: {
                    translation: {
                        tryButton: 'Essayez GRATUITEMENT',
                        contactButton: 'Contactez-nous',
                        topContent: {
                            title: 'MONTAGE LIVE, RÉSULTATS INSTANTANÉS.',
                            paragraph: 'Le moyen le plus simple d\'utiliser l\'IA pour retrouver le plaisir à la création de contenu, tout en protégeant votre travail des sanctions et de la démonétisation sur Twitch, YouTube, Instagram et plus encore.'
                        },
                        sectionDesc: {
                            title: 'HAUTE QUALITÉ SANS EFFORT.',
                            protection: {
                                title: 'Protection en temps réel',
                                paragraph: 'Personnalisez nos modèles d\'IA pour améliorer le son et la vidéo de votre stream en filtrant le contenu indésirable en temps réel. Reprenez le contrôle de votre livestream et évitez les pénalités des plateformes.'
                            },
                            possibilities: {
                                title: 'Possibilités illimitées',
                                paragraph: 'Offrez une configuration de profil illimitée à vos streams sur le cloud avec le multistream, la conception de mises en page, l\'analyse de statistiques et plus encore. Libérez votre créativité!'
                            },
                            integration: {
                                title: 'Intégration facile',
                                paragraph: 'Intégration transparente avec vos outils et plateformes de streaming préférés. Ne faites jamais de compromis sur votre flux de travail actuel, sans exception.'
                            }
                        },
                        sectionML: {
                            title: 'LES CREATEURS D\'ABORD',
                            paragraph1: 'Quelle que soit la plateforme de streaming, vous ne devriez pas avoir à vous soucier des violations de droits d\'auteur et des conditions d\'utilisation imprévisibles et injustes lors du streaming en direct. Diffusez votre meilleur contenu et laissez-nous nous occuper des détails.',
                            paragraph2: 'Nous utilisons l\'IA pour comprendre le contexte de votre livestream afin de générer le contenu et les modifications souhaités pour la vidéo et l\'audio de votre stream.'
                        },
                        sectionBeta: {
                            title: 'INTÉRESSÉ(E) PAR LE PROGRAMME BÊTA?',
                            paragraph: 'Nous sommes toujours à la recherche de créateurs de contenu pour nous aider à développer notre plateforme et apporter de nouvelles idées!'
                        },
                        betaPage: {
                            title: 'Hé! Tu es en avance!',
                            paragraph: 'Rejoignez notre programme de test bêta pour accéder gratuitement à nos dernières fonctionnalités en avant-première et aidez-nous à innover pour créer un service qui va changer le monde pour tous les créateurs de contenu.',
                            outro: 'Suivez-nous sur les réseaux sociaux pour ne manquer aucune mise à jour!'
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
                const opt = new Option(languages[lng].nativeName, lng);
                if (lng === i18next.resolvedLanguage) {
                    opt.setAttribute("selected", "selected");
                }
                $('#languageSwitcher').append(opt);
            });
            $('#languageSwitcher').change((a, b, c) => {
                const chosenLng = $(this).find("option:selected").attr('value');
                i18next.changeLanguage(chosenLng, () => {
                    rerender();
                });
            });
    
            rerender();
          });
  });