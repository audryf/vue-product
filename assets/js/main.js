var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '../../assets/images/vue-socks.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '../../assets/images/vue-socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: '../../assets/images/vue-socks-blue.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        }
    }
})
