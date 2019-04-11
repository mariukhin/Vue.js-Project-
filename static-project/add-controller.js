const add = new Vue({
    el: '#add',
    data: {
      fNameValue: '',
      lNameValue: '',
      nicknameValue: '',
    },
    methods: {
      addValue(fname, lname, nickname){
        const user = {fname, lname, nickname};
        EventEmitter.$emit('input-add', user);
      }
    }
  });