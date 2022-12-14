define(["knockout", "utilities", "text!navigationTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.layout.navigation;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.hasSelectedContent = params.data.hasSelectedContent;
                        self.goHome = params.functions.goHome;

                        self.CVSlideshowShown = ko.observable(false);

                        self.showCVSlideshow = () => { self.CVSlideshowShown(true); }

                        self.koComponents = {
                            slideshows: {
                                cv: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/KieranNoble-CV-Nov22.webp"],
                                        downloadUrl: "/assets/KieranNoble-CV-Nov22.pdf",
                                        visible: self.CVSlideshowShown
                                    }
                                }
                            }
                        }

                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/KieranNoble-CV-Nov22.webp"
            ]);
        }

        return {
            register: register
        };

    }
)