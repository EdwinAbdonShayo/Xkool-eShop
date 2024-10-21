let xkoolWebstore = new Vue({
    el: '#xkool-webstore',
    data: {
        showProduct: true,
        cart: [],
        products: [
            { id: 1, title: 'Beginner Piano Lessons', description: 'Learn the basics of piano playing.', price: 200, image: '/Media/Programs/piano.jpg', availableInventory: 10, rating: 4 },
            { id: 2, title: 'Advanced Math Tutoring', description: 'Master advanced math concepts.', price: 250, image: '/Media/Programs/math.jpg', availableInventory: 28, rating: 5 },
            { id: 3, title: 'Soccer Skills for Kids', description: 'Enhance soccer skills with top coaches.', price: 150, image: '/Media/Programs/soccer.jpg', availableInventory: 15, rating: 4 },
        ],
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