!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t){Vue.component("todo-item",{props:["todo"],template:"<li>{{ todo.text }}</li>"}),Vue.component("vue-item",{template:'<div class="block">{{ name }} <button @click="changeName"> Change Name </button> </div>',data:function(){return{name:"Ivan"}},methods:{changeName:function(){this.name="Maxim"}}});new Vue({el:"#vue-app",data:{name:"",url:"https://www.google.com/",img:"https://placeimg.com/640/480/any",urlTag:'<a href="https://www.google.com/" target="_blank">Google link</a>',todos:[{id:1,text:"Learn JavaScript"},{id:2,text:"Learn Vue"},{id:3,text:"Build something awesome"}],message:"Hello Vue!",age:28,x:0,y:0,ageA:0,ageB:0,available:!1,nearby:!1},watch:{question:function(e,t){this.answer="Ожидаю, когда вы закончите печатать...",this.debouncedGetAnswer()}},methods:{func:function(e){return"Good "+e+" "+this.name},updateXY:function(e){this.x=e.offsetX,this.y=e.offsetY}},computed:{addToA:function(){return this.ageA+this.age},addToB:function(){return this.ageB+this.age},compClasses:function(){return{available:this.available,nearby:this.nearby}}}})}]);
//# sourceMappingURL=build.js.map