<template>
  <form @submit.prevent="addTask">
    <div class="action py-2"> 
      <!-- /* Jika isCreating == false maka tombol Add Task tidak akan tampil */
      /* isCreating = !isCreating berfungsi sebagai switcher toggle */ -->
       <a href="#" class="add-button" v-if="!isCreating" @click="isCreating =
        !isCreating">Add Task</a>
      <div class="add-card" v-else>
        <div class="card mb-2">
          <div class="card-body d-flex flex-column p-0">
            <input 
            class="form-control border-0 mb-2" 
            placeholder="Masukkan Title" 
            type="text" 
            id="title"
            v-model="newTask.title">
            <textarea 
            class="form-control border-0 small" 
            placeholder="Description" 
            rows="3"
            id="description"
            v-model="newTask.description"></textarea>
            <input 
            class="form-control border-0 mb-2" 
            placeholder="Masukkan Category" 
            type="text" 
            id="category"
            v-model="newTask.category">
            <input 
            class="form-control border-0 mb-2" 
            placeholder="Deadline" 
            type="text" 
            id="deadline"
            v-model="newTask.deadline">
            <input 
            class="form-control border-0 mb-2" 
            placeholder="Prioritas" 
            type="text" 
            id="title"
            v-model="newTask.priority">
          </div>
        </div>
        <div class="button-wrapper d-flex">
          <button type="submit" class="btn btn-primary me-2">Save</button>
          <button class="btn btn-outline-secondary" @click="isCreating =
            !isCreating">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isCreating: false,
      newTask: {
        title: '',
        description: '',
        category: '',
        deadline: '',
        priority: ''

      }
    };
  },
  methods: {
    addTask() {
      if (this.newTask.title.trim() === '' || this.newTask.description.trim() === '' 
      || this.newTask.category.trim() === '' || this.newTask.deadline.trim() === '' 
      || this.newTask.priority.trim() === '') {
        
        return;
      }
      this.$emit('task-added', this.newTask);
      this.newTask = {
        title: '',
        description: '',
        category: '',
        deadline: '',
        priority: ''
      };
    }
  }
};
</script>