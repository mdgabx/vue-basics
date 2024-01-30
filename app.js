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
                {  title: 'Legend of Drizzt', author: 'RA Salvadore', age: 38,isFav: false }
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
    }
})

app.mount("#app")