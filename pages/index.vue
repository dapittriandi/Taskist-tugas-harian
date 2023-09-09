<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
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
        <CardItem v-for="(task, i) in resultQuery" :key="i" :task="task" :isGrid="isGrid" />
      </div>
      <FilterData :tasks="tasks" :selectedPriority="selectedPriority" :task="task" :isGrid="isGrid"></FilterData>

      <!-- //form add task -->
      <div class="action py-2">
        <!-- /* Jika isCreating == false maka tombol Add Task tidak akan tampil */
        /* isCreating = !isCreating berfungsi sebagai switcher toggle */ -->
        <a href="#" class="add-button" v-if="!isCreating" @click="isCreating =
          !isCreating">Add Task</a>
        <div class="add-card" v-else>
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input class="form-control border-0 mb-2" placeholder="Title" type="text">
              <textarea class="form-control border-0 small" placeholder="Description" rows="3"></textarea>
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button class="btn btn-outline-secondary" @click="isCreating =
              !isCreating">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'; // Import komponen BootstrapVue
import CardItem from "@/components/Card/CardItem.vue"
import FilterData from "@/components/filtering/FilterData.vue"

export default {
  layout(context) {
    return 'custom'
  },
  components: {
    CardItem,
    FilterData,
    BDropdown,
    BDropdownItem,
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
          title: "Tugas 1", 
          description: "Deskripsi Tugas 1", 
          category: "Pekerjaan", 
          deadline: "2023-09-15", 
          priority: "Low", 
          isDone: false
        },
        {
          id: 2, 
          title: "Tugas 2", 
          description: "Deskripsi Tugas 2", 
          category: "Pendidikan", 
          deadline: "2023-09-20", 
          priority: "Medium", 
          isDone: false
        },
        {
          id: 3, 
          title: "Tugas 3", 
          description: "Deskripsi Tugas 3", 
          category: "Proyek", 
          deadline: "2023-09-30", 
          priority: "High", 
          isDone: false
        },
        {
          id: 4, 
          title: "Tugas 4", 
          description: "Deskripsi Tugas 4", 
          category: "Pribadi", 
          deadline: "2023-09-25", 
          priority: "Low", 
          isDone: false
        },
        {
          id: 5, 
          title: "Tugas 5", 
          description: "Deskripsi Tugas 5", 
          category: "Pekerjaan", 
          deadline: "2023-10-05", 
          priority: "Medium", 
          isDone: false
        }
      ]
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
    }
  }
}
</script>
<style scoped></style>