// Code from https://locize.com/blog/jquery-i18next/

const languages = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' }
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
                            title: 'MONTAGE EN DIRECT, RESULTATS EN DIRECT.',
                            paragraph: 'La manière la plus simple d\'utiliser l\'IA afin de redonner du plaisir à la création de contenu tout en protégeant votre travail des sanctions et des démonétisations sur Twitch, Youtube, Instagram, et plus encore.'
                        },
                        sectionDesc: {
                            title: 'HAUTE QUALITÉ, AUCUN EFFORT.',
                            protection: {
                                title: 'Protection en temps réel',
                                paragraph: 'Personnalisez nos modèles d\'IA pour améliorer l\'audio et la vidéo de votre stream en filtrant le contenu indésirable en temps réel. Reprenez le contrôle de votre contenu et évitez les sanctions des plateformes.'
                            },
                            possibilities: {
                                title: 'Possibilités infinies',
                                paragraph: 'Créez des configurations de profil illimitées pour vos streams sur le cloud avec le multistream, les designs stylistiques, l\'analyse des statistiques, et plus encore. Soyez créatifs!'
                            },
                            integration: {
                                title: 'Intégration facile',
                                paragraph: 'S\'intègre parfaitement avec vos outils et plateformes de création de contenu préférés. Ne compromettez jamais votre routine de travail actuelle, sans exceptions.'
                            }
                        },
                        sectionML: {
                            title: 'CRÉATEUR AVANT TOUT',
                            paragraph1: 'Peu importe la plateforme, nous croyons que vous ne devriez pas avoir à vous soucier des règles imprévisibles et injustes, telles que le copyright et les violations des conditions d\'utilisation durant vos streams. Publiez votre meilleur contenu et laissez-nous nous occuper des détails.',
                            paragraph2: 'Nous utilisons l\'IA pour comprendre le contexte de votre livestream afin d\'appliquer le montage souhaité sur la vidéo et l\'audio de votre stream.'
                        },
                        sectionBeta: {
                            title: 'INTERESSÉS PAR LE BETA-TESTING?',
                            paragraph: 'Nous sommes toujours à la recherche de créateurs de contenu pour nous aider à construire notre plateforme et apporter de nouvelles idées!'
                        },
                        betaPage: {
                            title: 'Vous êtes en avance!',
                            paragraph: 'Devenez un testeur beta pour accéder à nos dernières fonctionnalités GRATUITEMENT et nous aider à améliorer un service révolutionnaire pour tous les créateurs de contenu.',
                            outro: 'Suivez-nous sur les réseaux sociaux pour ne rien manquer!'
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