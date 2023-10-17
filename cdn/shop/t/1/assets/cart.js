/** Shopify CDN: Minification failed

Line 16:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 17:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 28:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 29:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 44:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 48:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 78:16 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 81:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 93:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 98:6 Transforming const to the configured target environment ("es5") is not supported yet
... and 27 more hidden warnings

**/
class CartRemoveButton extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', (event) => {
            event.preventDefault();
            this.closest('cart-items').updateQuantity(this.dataset.index, 0);
        });
    }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
    constructor() {
        super();
        this.isMiniCart = !!this.dataset.isMiniCart;
        this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status');

        this.currentItemCount = Array.from(this.querySelectorAll('[name="updates[]"]'))
            .reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0);

        this.debouncedOnChange = debounce((event) => {
            this.onChange(event);
        }, 300);

        this.addEventListener('change', this.debouncedOnChange.bind(this));
    }

    onChange(event) {
        this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
    }

    getSectionsToRender() {
        return [{
                id: 'main-cart-items',
                section: document.getElementById('main-cart-items').dataset.id,
                selector: '.js-contents',
            },
            {
                id: 'cart-icon-bubble',
                section: 'cart-icon-bubble',
                selector: '.js-contents'
            },
            {
                id: 'cart-icon-bubble-mobile',
                section: 'cart-icon-bubble-mobile',
                selector: '.js-contents'
            },
            {
                id: 'cart-live-region-text',
                section: 'cart-live-region-text',
                selector: '.shopify-section'
            },
            {
                id: 'main-cart-footer',
                section: !!document.getElementById('main-cart-footer') ? document.getElementById('main-cart-footer').dataset.id : false,
                selector: '.js-contents',
            }
        ];
    }

    updateQuantity(line, quantity, name) {
        this.enableLoading(line);

        const body = JSON.stringify({
            line,
            quantity,
            sections: this.getSectionsToRender().map((section) => section.section),
            sections_url: window.location.pathname
        });

        fetch(`${routes.cart_change_url}`, { ...fetchConfig(),
                ...{
                    body
                }
            })
            .then((response) => {
                return response.text();
            })
            .then((state) => {
                const parsedState = JSON.parse(state);

                this.renderContents(parsedState)

                this.updateLiveRegions(line, parsedState.item_count);
                const lineItem = document.getElementById(`CartItem-${line}`);
                if (lineItem && lineItem.querySelector(`[name="${name}"]`)) lineItem.querySelector(`[name="${name}"]`).focus();
                this.disableLoading();
            }).catch(() => {
                this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
                if (!!document.getElementById('cart-errors')) document.getElementById('cart-errors').textContent = window.cartStrings.error;
                this.disableLoading();
            });
    }

    renderContents(parsedState) {
        this.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartFooter = document.getElementById('main-cart-footer');
        const cartMsg = document.getElementById('cart-msg')

        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartMsg) cartMsg.classList.toggle('is-empty', parsedState.item_count === 0);

        this.getSectionsToRender().forEach((section => {
            if (!!section.section) {
                const elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
                elementToReplace.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
            }
        }));

        if (this.isMiniCart) {
            const miniCartHtml = parsedState.sections['mini-cart']
            this.updateMiniCart(miniCartHtml)
        }

        if (!this.isMiniCart) {
            const footerSection = this.getSectionsToRender().filter(section => section.id === 'main-cart-footer');
            if (footerSection.length) {
                this.updateProgressBar(parsedState.sections[footerSection[0].section])
                this.updateShippingsMethod(parsedState.sections[footerSection[0].section])
            }
        }
    }

    updateShippingsMethod(html) {
        const newDOM = new DOMParser().parseFromString(html, 'text/html');
        const elShippingMethod = document.querySelector('#cart-shipping-methods');
        const newShippingMethod = newDOM.querySelector('#cart-shipping-methods');
        if (!!elShippingMethod && newShippingMethod) {
            elShippingMethod.innerHTML = newShippingMethod.innerHTML
        }
    }

    updateProgressBar(html) {
        const newDOM = new DOMParser().parseFromString(html, 'text/html');
        const elProgressBar = document.querySelector('#cart-free-shipping');
        const newProgressBar = newDOM.querySelector('#cart-free-shipping');

        if (!!elProgressBar && newProgressBar) {
            elProgressBar.innerHTML = newProgressBar.innerHTML
        }
    }

    updateMiniCart(html) {
        const newDOM = new DOMParser()
            .parseFromString(html, 'text/html');
        const elMiniCartFooter = this.querySelector('#mini-cart-footer');
        const newFooter = newDOM.querySelector('#mini-cart-footer');

        if (!!elMiniCartFooter && newFooter) {
            elMiniCartFooter.innerHTML = newFooter.innerHTML
        }
        const elMiniCartHeader = this.querySelector('#mini-cart-header');
        const newHeader = newDOM.querySelector('#mini-cart-header');

        if (!!elMiniCartHeader && newHeader) {
            elMiniCartHeader.innerHTML = newHeader.innerHTML
        }
    }

    updateLiveRegions(line, itemCount) {
        if (this.currentItemCount === itemCount) {
            document.getElementById(`Line-item-error-${line}`)
                .querySelector('.cart-item__error-text')
                .innerHTML = window.cartStrings.quantityError.replace(
                    '[quantity]',
                    document.getElementById(`Quantity-${line}`).value
                );
        }

        this.currentItemCount = itemCount;
        this.lineItemStatusElement.setAttribute('aria-hidden', true);

        const cartStatus = document.getElementById('cart-live-region-text');
        cartStatus.setAttribute('aria-hidden', false);

        setTimeout(() => {
            cartStatus.setAttribute('aria-hidden', true);
        }, 1000);
    }

    getSectionInnerHTML(html, selector) {
        return new DOMParser()
            .parseFromString(html, 'text/html')
            .querySelector(selector).innerHTML;
    }

    enableLoading(line) {
        const loader = this.querySelector('.loading-overlay__spinner') || document.querySelector('.loading-overlay__spinner');
        document.getElementById('main-cart-items').classList.add('cart__items--disabled');
        this.querySelectorAll(`#CartItem-${line} .loading-overlay`).forEach((overlay) => overlay.classList.remove('hidden'));
        document.activeElement.blur();
        this.lineItemStatusElement.setAttribute('aria-hidden', false);
        if (loader) loader.classList.remove('hidden')
    }

    disableLoading() {
        document.getElementById('main-cart-items').classList.remove('cart__items--disabled');
        const loader = this.querySelector('.loading-overlay__spinner') || document.querySelector('.loading-overlay__spinner');
        if (loader) loader.classList.add('hidden')
    }
}

customElements.define('cart-items', CartItems);