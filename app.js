const app = Vue.createApp({
    // template: '<h2>This is the main template</h2>'
    data() {
        return {
            url: 'https://wdbsa.netlify.app',
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                { title: 'book 1', author: 'test', age: 22, isFav: true },
                {  title: 'Legend of Drizzt', author: 'RA Salvadore', age: 38, isFav: false },
                {  title: 'Legend of Drizzt2', author: 'RA Salvadore', age: 38, isFav: true },
                {  title: 'Legend of Drizzt3', author: 'RA Salvadore', age: 38, isFav: false },
                {  title: 'Legend of Drizzt4', author: 'RA Salvadore', age: 38, isFav: true }
            ]
        }
    },
    methods: {
        // increaseAge() {
        //     console.log('click')
        //     this.age++
        // }
        handleEvents(e, data) {
            console.log('mouse', e)
            if(data) {
                console.log('data', data)
            }
        },
        toggle() {
            this.showBooks = !this.showBooks
        },
        changeTitle(title) {
            this.title = title
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")