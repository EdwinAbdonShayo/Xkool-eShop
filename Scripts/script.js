

let xkoolWebstore = new Vue({
    el: '#xkool-webstore',
    data: {
        showPage: true,
        cart: [],
        programs: [],
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
            const existingItem = this.cart.find(item => item.id === program.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                this.cart.push( {id: program.id, count: 1} );
            }            
        },
        removeFromCart(program) {
            // this.cart.splice(this.cart.indexOf(program.id), 1);
            const existingItem = this.cart.find(item => item.id === program.id);
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count -= 1;
                } else {
                    // this.cart.splice(this.cart.indexOf(program.id), 1);
                    this.cart = this.cart.filter(item => item.id !== program.id);
                }
            }
            if (this.cart.length === 0) {
                this.showPage = true;
            }
        },        
        showCheckOut() {
            this.showPage = !this.showPage;
        },
        submitCheckOut() {
            // alert("Order placed successfully!");

            const orderData = {
                name: this.order.name,
                phone: this.order.phone,
                address: this.order.address,
                city: this.order.city,
                programs: this.cartDetails,
                price: this.price,
            };

            fetch('http://localhost:5454/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("Order placed successfully!");
                this.cart = [];
                // this.showPage = true;
            })
            .catch(error => {
                console.error('Error making an order', error);
            });
            
        },
        canAddtoCart(program) {
            return program.availableSpaces > this.cartItemCount(program.id);
        },
        canRemovefromCart(program) {
            return this.cartItemCount(program.id) > 0;
        },
        cartCount() {
            // Sum up the 'count' property of each item in the cart
            return this.cart.reduce((total, cartItem) => total + cartItem.count, 0);
        },
        cartItemCount(id) {
            // return this.cart.filter(itemId => itemId === id).length;
            const item = this.cart.find(cartItem => cartItem.id === id);
            return item ? item.count : 0;
        },
        itemsLeft(program) {
            return program.availableSpaces - this.cartItemCount(program.id);
        }
    },
    computed: {
        count1() {
            // Total count of items in the cart
            return this.cartCount();
        },
        // filteredPrograms(){
        //     if (this.selectedFilter === "sports") {
        //         return this.programs.filter(program => program.category === "sports");
        //     } else if (this.selectedFilter === "music") {
        //         return this.programs.filter(program => program.category === "music");
        //     } else if (this.selectedFilter === "arts") {
        //         return this.programs.filter(program => program.category === "arts");
        //     } else if (this.selectedFilter === "education") {
        //         return this.programs.filter(program => program.category === "education");
        //     }
        //     return this.programs;
        // },
        // sortedPrograms() {
        //     if (this.selectedSort === "nameAsc") {
        //         return this.programs.sort((a, b) => a.title.localeCompare(b.title));
        //     } else if (this.selectedSort === "nameDes") {
        //         return this.programs.sort((a, b) => b.title.localeCompare(a.title));
        //     } else if (this.selectedSort === "priceAsc") {
        //         //what is the difference between this two lines?
        //         // return [...this.programs].sort((a, b) => a.price - b.price);  
        //         return this.programs.sort((a, b) => a.price - b.price);
        //     } else if (this.selectedSort === "priceDes") {
        //         return this.programs.sort((a, b) => b.price - a.price);
        //     } else if (this.selectedSort === "ratingL") {
        //         return this.programs.sort((a, b) => a.rating - b.rating);
        //     } else if (this.selectedSort === "ratingH") {
        //         return this.programs.sort((a, b) => b.rating - a.rating);
        //     }
        //     return this.programs;
        // },

            filteredAndSorted() {
                let filtered = this.programs;
        
                // Apply filtering
                if (this.selectedFilter === "sports") {
                    filtered = filtered.filter(program => program.category === "Sports");
                } else if (this.selectedFilter === "music") {
                    filtered = filtered.filter(program => program.category === "Music");
                } else if (this.selectedFilter === "art") {
                    filtered = filtered.filter(program => program.category === "Art");
                } else if (this.selectedFilter === "education") {
                    filtered = filtered.filter(program => program.category === "Education");
                }
        
                // Apply sorting
                if (this.selectedSort === "nameAsc") {
                    filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
                } else if (this.selectedSort === "nameDes") {
                    filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
                } else if (this.selectedSort === "priceAsc") {
                    filtered = filtered.sort((a, b) => a.price - b.price);
                } else if (this.selectedSort === "priceDes") {
                    filtered = filtered.sort((a, b) => b.price - a.price);
                } else if (this.selectedSort === "ratingL") {
                    filtered = filtered.sort((a, b) => a.rating - b.rating);
                } else if (this.selectedSort === "ratingH") {
                    filtered = filtered.sort((a, b) => b.rating - a.rating);
                }
        
                return filtered;
            },
        

        // Returns an array of detailed program objects currently in the cart
        cartDetails() {
            return this.cart.map(cartItem => {
                const program = this.programs.find(program => program.id === cartItem.id);
                if (program) {
                    return { ...program, count: cartItem.count }; // Include count in the details
                }
                return null;
            }).filter(item => item !== null);
            // return this.cart.map(cartItemId => {
            //     return this.programs.find(program => program.id === cartItemId);
            // });
        },
        // Calculates the total price of all items in the cart
        totalPrice() {
            return this.cartDetails.reduce((total, program) => total + (program.price * program.count), 0);
        }
    },
    created() {
        fetch('http://localhost:5454/programs')
            .then( res => {
                if (!res.ok) {
                throw new Error (`Status: {res.status}`);
                }
                return res.json();
            })
            .then(data => {
                this.programs = data;
                })
            .catch(err => {
                console.error('Error Fetching Programs', err);
            });
    }
});


