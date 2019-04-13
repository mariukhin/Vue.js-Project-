const counter = new Vue({
    el: '#counter',
    data: {
      itemsCount: '',
    },
    beforeCreate(){
        EventEmitter.$on('counter-change', (value) => {
            this.itemsCount = value;
        });
    }
  });