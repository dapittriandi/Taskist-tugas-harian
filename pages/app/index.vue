<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
          <button class="btn btn-outline-primary py-1 px-3 me-4" @click="shuffle">
            Shuffle!
          </button>
          <!-- // menu dropdown -->
          <b-dropdown v-model="selectedPriority" variant="secondary" style=" margin-right: 2px;">
            <template #button-content>
              {{ selectedPriority }}
            </template>
            <b-dropdown-item @click="setSelectedPriority('Semua')">Semua Task</b-dropdown-item>
            <b-dropdown-item @click="setSelectedPriority('Low')">Low</b-dropdown-item>
            <b-dropdown-item @click="setSelectedPriority('Medium')">Medium</b-dropdown-item>
            <b-dropdown-item @click="setSelectedPriority('High')">High</b-dropdown-item>
          </b-dropdown>

          <!-- /* Form input pencarian */ -->
          <input type="text" class="form-control" placeholder="Search" v-model="searchQuery">
          <div class="d-flex align-items-center justify-content-end w-100">
            <span class="me-2">View As</span>
            <button class="btn btn-outline-secondary py-1 px-3" @click="isGrid = !isGrid">
              {{ isGrid ? 'Grid' : 'List' }}
            </button>
          </div>
        </div>
      </div>
      <div class="list-task row">
        <transition-group name="tasks" tag="div" class="list-task row">
          <CardItem v-for="(task, i) in resultQuery" :key="i" :task="task" :isGrid="isGrid" />
        </transition-group>

        <!-- <FilterData :selectedPriority="selectedPriority" :tasks="tasks" :task="task" :isGrid="isGrid"></FilterData> -->
      </div>

      <!-- // form add task -->
      <AddTaskForm @task-added="appendTask" />
    </div>
  </div>
</template>
  
<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'; // Import komponen BootstrapVue
import CardItem from "@/components/Card/CardItem.vue"
import FilterData from "@/components/filtering/FilterData.vue"
import AddTaskForm from '@/components/form/AddTaskForm.vue';

export default {
  layout(context) {
    return 'custom'
  },
  components: {
    CardItem,
    FilterData,
    BDropdown,
    BDropdownItem,
    AddTaskForm,
  },
  data() {
    return {
      //variable penammpung arr category
      selectedPriority: "Semua",
      // Variabel penampung teks pencarian
      searchQuery: '',
      // Status saat menambahkan task
      isCreating: false,
      // Tipe layout daftar task
      isGrid: false,
      // Daftar task
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'ini deskripsi',
          isDone: false,
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'ini deskripsi 2',
          isDone: false,
        },
        {
          id: 3,
          title: 'Task 3',
          description: ' ini deskripsi 3',
          isDone: false,
        }
      ],
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        console.log(this.tasks);
        return this.tasks
      }
    },
    filteredTasks() {

      // Fungsi computed untuk melakukan filter berdasarkan prioritas yang dipilih
      if (this.selectedPriority === "Semua") {

        // Jika "Semua" dipilih, tampilkan semua task
        return this.tasks;
      } else {

        // Jika prioritas tertentu dipilih, hanya tampilkan task dengan prioritas yang sesuai
        return this.tasks.filter((task) => task.priority === this.selectedPriority);
      }
    }
  },
  methods: {
    handleSelectedPriority(selectedPriority) {
      this.selectedPriority = selectedPriority;
    },
    setSelectedPriority(priority) {
      this.selectedPriority = priority;
    },
    appendTask(newTask) {
      this.tasks.push(newTask);
    },
    shuffle() {
      this.tasks = _.shuffle(this.tasks)
    }
  }
}
</script>
<style scoped>
#app .tasks-move {
  transition: .4s;
}
</style>