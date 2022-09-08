const app = Vue.createApp({
    data(){
        return{
            showBooks:true,
            title: 'The Final Battle',
            author: 'Jose Rizal',
            age: '69',
            x:0,
            y:0,
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,number){
            console.log(e,e.type)
            if(number){
                console.log(number)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }

    }
})

app.mount('#app')

