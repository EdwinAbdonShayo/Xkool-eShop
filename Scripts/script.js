

let xkoolWebstore = new Vue({
    el: '#xkool-webstore',
    data: {
        showProduct: true,
        cart: [],
        products: programs,
        order: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
        }
    },
    methods: {
        addItemtoCart(program) {
            this.cart.push(program.id);
        },
        removeFromCart(program) {
            this.cart.splice(this.cart.indexOf(program.id), 1);
        },
        showCheckOut() {
            this.showProduct = !this.showProduct;
        },
        submitCheckOut() {
            alert("Order placed successfully!");
        },
        canAddtoCart(program) {
            return program.availableInventory > this.cartCount(program.id);
        },
        canRemovefromCart(program) {
            return this.cartCount(program.id) > 0;
        },
        cartCount(id) {
            return this.cart.filter(itemId => itemId === id).length;
        },
        itemsLeft(program) {
            return program.availableInventory - this.cartCount(program.id);
        }
    },
    computed: {
        sortedPrograms() {
            return this.products.sort((a, b) => a.price - b.price);
        },
        // Returns an array of detailed program objects currently in the cart
        cartDetails() {
            return this.cart.map(cartItemId => {
                return this.products.find(program => program.id === cartItemId);
            });
        },
        // Calculates the total price of all items in the cart
        totalPrice() {
            return this.cartDetails.reduce((total, program) => total + program.price, 0);
        }
    }
});