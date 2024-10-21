

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
        showCheckOut() {
            this.showProduct = !this.showProduct;
        },
        submitCheckOut() {
            alert("Order placed successfully!");
        },
        canAddtoCart(program) {
            return program.availableInventory > this.cartCount(program.id);
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
        }
    }
});