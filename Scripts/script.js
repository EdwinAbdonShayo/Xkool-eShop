

let xkoolWebstore = new Vue({
    el: '#xkool-webstore',
    data: {
        showPage: true,
        cart: [],
        programs: programs,
        selectedSort: "",
        selectedFilter: "",
        order: {
            name: "",
            phone: "",
            address: "",
            city: "",
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
            this.showPage = !this.showPage;
        },
        submitCheckOut() {
            alert("Order placed successfully!");
        },
        canAddtoCart(program) {
            return program.availableSpaces > this.cartCount(program.id);
        },
        canRemovefromCart(program) {
            return this.cartCount(program.id) > 0;
        },
        cartCount(id) {
            return this.cart.filter(itemId => itemId === id).length;
        },
        itemsLeft(program) {
            return program.availableSpaces - this.cartCount(program.id);
        }
    },
    computed: {
        sortedPrograms() {
            if (this.selectedSort === "nameAsc") {
                return [...this.programs].sort((a, b) => a.title.localeCompare(b.title));
            } else if (this.selectedSort === "nameDes") {
                return [...this.programs].sort((a, b) => b.title.localeCompare(a.title));
            } else if (this.selectedSort === "priceAsc") {
                // return [...this.programs].sort((a, b) => a.price - b.price);
                return this.programs.sort((a, b) => a.price - b.price);
            } else if (this.selectedSort === "priceDes") {
                return [...this.programs].sort((a, b) => b.price - a.price);
            } else if (this.selectedSort === "ratingL") {
                return [...this.programs].sort((a, b) => a.rating - b.rating);
            } else if (this.selectedSort === "ratingH") {
                return [...this.programs].sort((a, b) => b.rating - a.rating);
            }
            return this.programs;
        },
        // Returns an array of detailed program objects currently in the cart
        cartDetails() {
            return this.cart.map(cartItemId => {
                return this.programs.find(program => program.id === cartItemId);
            });
        },
        // Calculates the total price of all items in the cart
        totalPrice() {
            return this.cartDetails.reduce((total, program) => total + program.price, 0);
        }
    }
});


// App.js code  

