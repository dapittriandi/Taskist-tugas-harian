<template>
    <div class="container">
        <ul>
            <li v-for="item in items" :key="item.message">
            {{ kataAwal }} - {{ item.message }}</li>
        </ul>
        <ul>
            <li v-for="(value, name, index) in object" :key='name'>
            {{ index }} . {{ name }} : {{ value }}</li>
        </ul>
        <ul>
            <li v-for="n in evenNUmbers" :key="n"> {{ n }}</li>
        </ul>
        <span v-for="n in 10" :key="n">{{ n }}</span>
        <div id="todo-list-example">
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Tambahkan sebuah todo</label>
                <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="Makan Ayam"
                >
                <button>Tambah</button>
            </form>
            <ul>
                <li
                is="todo-item"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                v-on:remove="todos.splice(index, 1)"
                ></li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
  layout (contect) {
    return 'custom'
  },props: ['title'],
  data () {
    return {
      items: [
        { message: 'Selamat' },
        { message: 'Malam' },
        { message: 'Yang' },
        { message: 'Indah' }
      ],
      kataAwal: 'Mengucapkan',
      object: {
        title: 'Belajar Nuxt Js bersama Alkademi',
        author: 'Kang Helmi',
        year: '2023',
        city: 'Bandung'
      },
      numbers: [1, 2, 3, 4, 5],
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  computed: {
    evenNUmbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>

</style>