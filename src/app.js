Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  Vue.component('vue-item',{
    template: '<div class="block">{{ name }} <button @click="changeName"> Change Name </button> </div>',
    data: function(){
        return{
            name: "Ivan"
        }
    },
    methods:{
        changeName: function(){
            this.name = "Maxim"
        }
    }
  })
  var one = new Vue({
    el: '#vue-app',
    data:{
        name: '',
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
        y: 0,
        ageA: 0,
        ageB: 0,
        available: false,
        nearby: false
    },
    watch: {
        // эта функция запускается при любом изменении вопроса
        question: function (newQuestion, oldQuestion) {
          this.answer = 'Ожидаю, когда вы закончите печатать...'
          this.debouncedGetAnswer()
        }
    },
    methods:{
        func: function(date){
            return 'Good '+ date + " " + this.name;
        },
        updateXY: function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;
        },
        
    },
    computed:{
        addToA: function(){
            return this.ageA + this.age;
        },
        addToB: function(){
            return this.ageB + this.age;
        },
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        },
        readRefs: function(){
            console.log(this.$refs.input.value);
            this.message = this.$refs.input.value;
        }
    }
  })
  
  