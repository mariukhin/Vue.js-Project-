Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

new Vue({
    el: '#vue-app',
    data:{
        name: 'Max',
        url: 'https://www.google.com/',
        img: 'https://placeimg.com/640/480/any',
        urlTag: '<a href="https://www.google.com/" target="_blank">Google link</a>',
        todos: [
            { id: 1, text: 'Learn JavaScript' },
            { id: 2, text: 'Learn Vue' },
            { id: 3, text: 'Build something awesome' }
        ],
        message: 'Hello Vue!',
        age: 28,
        x: 0,
        y: 0
    },
    methods:{
        func: function(date){
            return 'Good '+ date + " " + this.name;
        },
        updateXY: function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;
        }

    }
})
