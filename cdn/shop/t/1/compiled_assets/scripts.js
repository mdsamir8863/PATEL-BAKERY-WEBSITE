/** Shopify CDN: Minification failed

Line 27:43 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 28:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 32:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 36:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 41:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 46:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 47:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 48:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 52:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 68:2 Transforming class syntax to the configured target environment ("es5") is not supported yet
... and 12 more hidden warnings

**/
(function() {
    var __sections__ = {};
    (function() {
        for (var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
            __sections__[s[i]] = true;
    })();
    (function() {
        if (!__sections__["featured-product"] && !window.DesignMode) return;
        try {

            if (!customElements.get('product-modal')) {
                customElements.define('product-modal', class ProductModal extends ModalDialog {
                    constructor() {
                        super();
                    }

                    hide() {
                        super.hide();
                    }

                    show(opener) {
                        super.show(opener);
                        this.showActiveMedia();
                    }

                    showActiveMedia() {
                        this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
                            element.classList.remove('active');
                        })
                        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
                        const activeMediaTemplate = activeMedia.querySelector('template');
                        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
                        activeMedia.classList.add('active');
                        activeMedia.scrollIntoView();

                        const container = this.querySelector('[role="document"]');
                        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

                        if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
                            activeMedia.loadContent();
                    }
                });
            }

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-cart-footer"]) return;
        try {

            class CartNote extends HTMLElement {
                constructor() {
                    super();

                    this.addEventListener('change', debounce((event) => {
                        const body = JSON.stringify({
                            note: event.target.value
                        });
                        fetch(`${routes.cart_update_url}`, { ...fetchConfig(),
                            ...{
                                body
                            }
                        });
                    }, 300))
                }
            }

            customElements.define('cart-note', CartNote);

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["mini-cart"]) return;
        try {

            class ProductRecommendationsMinicart extends HTMLElement {
                constructor() {
                    super();
                    const handleIntersection = (entries, observer) => {
                        if (!entries[0].isIntersecting) return;
                        observer.unobserve(this);

                        fetch(this.dataset.url)
                            .then(response => response.text())
                            .then(text => {
                                const html = document.createElement('div');
                                html.innerHTML = text;
                                const recommendations = html.querySelector('product-recommendations-mini-cart');
                                if (recommendations && recommendations.innerHTML.trim().length) {
                                    this.innerHTML = recommendations.innerHTML;
                                }
                            })
                            .catch(e => {
                                console.error(e);
                            });
                    }

                    new IntersectionObserver(handleIntersection.bind(this), {
                        rootMargin: '0px 0px 0px 0px'
                    }).observe(this);
                }
            }
            customElements.define('product-recommendations-mini-cart', ProductRecommendationsMinicart);

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["product-recommendations"]) return;
        try {

            class ProductRecommendations extends HTMLElement {
                constructor() {
                    super();

                    const handleIntersection = (entries, observer) => {
                        if (!entries[0].isIntersecting) return;
                        observer.unobserve(this);

                        fetch(this.dataset.url)
                            .then(response => response.text())
                            .then(text => {
                                const html = document.createElement('div');
                                html.innerHTML = text;
                                const recommendations = html.querySelector('product-recommendations');
                                if (recommendations && recommendations.innerHTML.trim().length) {
                                    this.innerHTML = recommendations.innerHTML;
                                }
                            })
                            .catch(e => {
                                console.error(e);
                            });
                    }

                    new IntersectionObserver(handleIntersection.bind(this), {
                        rootMargin: '0px 0px 200px 0px'
                    }).observe(this);
                }
            }

            customElements.define('product-recommendations', ProductRecommendations);

        } catch (e) {
            console.error(e);
        }
    })();

})();