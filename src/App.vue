<template>
  <div id="app">
        <!-- <h1>{{ func('morning')}}</h1>
        <a v-bind:href="url" target="_blank">Google link</a>
        <img v-bind:src="img" />
        <h1>{{ name }}</h1> -->

        <!-- Нумерованный список массива -->
        <!-- <ol>
            <li v-for="todo in todos">
              {{ todo.text }}
            </li>
        </ol>

        Вставить верстку
        <p v-html='urlTag'></p>

        Транспайлит с инпута в р
        <p>{{ message }}</p>
        <input v-model="message"> -->

        <!-- Можно использовать как v-on так @ -->
        <!-- <button @click="age++">Add Year</button>
        <button v-on:click="age--" >Subtract Year</button>
        <p>Age: {{age}}</p>
        <div id="canvas" @mousemove = "updateXY">{{ x }}, {{ y }}</div> -->

        <!--
              Взаимодействует с Vue.component
              Now we provide each todo-item with the todo object
              it's representing, so that its content can be dynamic.
              We also need to provide each component with a "key",
              which will be explained later.
            -->
        <!-- <ol>
            <todo-item
              v-for="item in todos"
              v-bind:todo="item"
              v-bind:key="item.id"
            ></todo-item>
        </ol> -->

        <!-- v-model Транспайлит текст с инпута в спан -->
        <!-- <input type="text" v-model="name">
        <span>{{ name }}</span>
        <input type="text" v-model="age">
        <span>{{ age }}</span> -->


        <!-- <button @click="ageA++">Add A Year</button>
        <button @click="ageB++" >Add B Year</button>
        <p>Age A: {{ ageA }}</p>
        <p>Age B: {{ ageB }}</p>
        <p>Age + AgeA: {{ addToA }}</p>
        <p>Age + AgeB: {{ addToB }}</p> -->

        <!-- <h1>Dynamic CSS</h1>
        <h2>Example 1</h2>
        <div v-on:click="available = !available" v-bind:class="{available: available}">
            <span>Ryu</span>
        </div>
        <h2>Example 2</h2>
        <button v-on:click="nearby = !nearby">Toggle nearby</button>
        <button v-on:click="available = !available">Toggle available</button>
        <div v-bind:class="compClasses">
            <span>Ryu</span>
        </div>
        <p v-show="nearby">JJJJJJJJSJJJSJJJSJJJJSJ</p> -->

        <!-- Слежение за тем что ввел клиент с помощью v-model -->
        <!-- <p>
            Задайте вопрос, на который можно ответить "да" или "нет":
            <input v-model="question">
        </p>
        <p>{{ answer }}</p> -->
        
        <!-- <vue-item></vue-item>
        <vue-item></vue-item> -->
        <input type="text" ref="input"/>
        <button @click.prevent ="readRefs">Submit</button>
        <p>Your message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Hello Vue!'
    }
  },
  methods:{
    readRefs(){
        console.log(this.$refs.input.value);
        this.message = this.$refs.input.value;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
