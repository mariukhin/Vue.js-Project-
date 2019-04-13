Vue.component('list-item', {
  props: ['index','user'],
  template:'\
    <tr>\
      <th scope="row">\ {{ index+1 }}\ </th>\
      <td>\ {{ user.firstName }}\ </td>\
      <td>\ {{ user.lastName }}\ </td>\
      <td>\ {{ user.nickName }}\
        <button class="del_btn btn btn-outline-danger my-2 my-sm-0" v-on:click="$emit(\'remove\')">Удалить</button>\
      </td>\
    </tr>\
  ',
});
const table = new Vue({
  el: '#tables',
  data() {
    return {
      users: USERS_LIST.map( user => {
        user.isShown = true;
        return user;
      }),
      itemsTotal: 0
    }
  },
  beforeCreate(){
    EventEmitter.$emit('counter-change', this.users.length);
  },
  created() {
    EventEmitter.$on('input-change', (value) => {
      this.filterUser(value);
    });
    EventEmitter.$on('input-add', (value) => {
      this.addUser(value);
    });
  },
  methods: {
    filterUser(searchValue) {
      if (!this.users || !this.users.length) {
        return;
      }
      let newUsers;
      this.users.forEach( user => {
        const hasSearchValue = Object.values(user).join(' ').includes(searchValue);
        user.isShown = hasSearchValue;
      });
      newUsers = this.users.filter(user => user.isShown == true);
      EventEmitter.$emit('counter-change', newUsers.length);
    },
    addUser(newuser) {
      this.users.push({
        firstName: newuser.fname,
        isShown: true,
        lastName: newuser.lname,
        nickName: newuser.nickname
      });
      EventEmitter.$emit('counter-change', this.users.length);
    },
  },

});