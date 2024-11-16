

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
            this.cart.push(program);
        },
        removeFromCart(program) {
            this.cart.splice(
                this.cart.indexOf(program), 1
            );
        },
        showCheckOut() {
            this.showProduct = !this.showProduct;
        },
        submitCheckOut() {
            alert("Order placed successfully!");
        },
        canAddtoCart(program) {
            return program.availableInventory > this.cartCount(program);
        },
        canRemovefromCart(program) {
            return this.cartCount(program) > 0;
        },
        cartCount(id) {
            return this.cart.filter(itemId => itemId === id).length;
        },
        itemsLeft(program) {
            return program.availableInventory - this.cartCount(program);
        }
    },
    computed: {
        sortedPrograms() {
            return this.products.sort((a, b) => a.price - b.price);
        }
    }
});