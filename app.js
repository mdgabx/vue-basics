const app = Vue.createApp({
    // template: '<h2>This is the main template</h2>'
    data() {
        return {
            title: 'Legend of Drizzt',
            author: 'RA Salvadore',
            age: 38,
            showBooks: true
        }
    },
    methods: {
        // increaseAge() {
        //     console.log('click')
        //     this.age++
        // }

        toggle() {
            this.showBooks = !this.showBooks
        },
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount("#app")