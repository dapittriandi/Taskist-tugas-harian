<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
          <!-- // menu dropdown -->
          <b-dropdown 
            v-model="selectedPriority" 
            variant="secondary" 
            style=" margin-right: 2px;">
            <template #button-content>
              {{ selectedPriority }}
            </template>
            <b-dropdown-item 
              @click="setSelectedPriority('Semua')" 
              :class="{ active: selectedPriority === 'Semua' }">
              Semua Task
            </b-dropdown-item>
            <b-dropdown-item 
              @click="setSelectedPriority('Low')"
              :class="{ active: selectedPriority === 'Low' }">
              Low
            </b-dropdown-item>
            <b-dropdown-item 
              @click="setSelectedPriority('Medium')"
              :class="{ active: selectedPriority === 'Medium' }">
              Medium
            </b-dropdown-item>
            <b-dropdown-item 
              @click="setSelectedPriority('High')"
              :class="{ active: selectedPriority === 'High' }">
              High
            </b-dropdown-item>
          </b-dropdown>

          <!-- /* Form input pencarian */ -->
          <input 
          type="text" class="form-control" placeholder="Search" v-model="searchQuery">
          <div 
            class="d-flex align-items-center justify-content-end w-100">
            <span 
              class="me-2">
              View As
            </span>
            <button 
            @click="toggleView" 
            class="btn btn-outline-secondary py-1 px-3">
              {{ gridView ? 'List' : 'isGrid' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Tampilan Task if for grid-->
      <div v-if="gridView" 
        class="row mx-1" 
        style="margin-top: 7px;">
        <div 
          v-for="task in filteredTasks" 
          :key="task.id" 
          class="col-12 col-md-6 col-lg-4">
          <div class="card mb-3">
            <div class="card-body">
              <h5 
                class="card-title" 
                :class="{ 'completed-task': task.completed }">
                  {{ task.title }}
              </h5>
              <p class="card-text">
                {{ task.description }}
              </p>
              <p class="card-text">
                Kategori: {{ task.category }}
              </p>
              <p class="card-text">
                Deadline: {{ task.deadline }}
              </p>
              <p class="card-text">
                Prioritas: {{ task.priority }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- //else for not grid -->
      <div v-else>
        <div 
          v-for="task in filteredTasks" 
          :key="task.id"
          class="item-task d-flex align-items-start border-bottom pt-3 pb-4">
          <input 
          type="checkbox" name="status" class="me-2 mt-2" 
          v-model="task.completed" 
          :id="'taskCheck' + task.id">
          <div :class="'d-flex flex-column'">
            <div 
              class="title-task mb-1" 
              :class="{ 'completed-task': task.completed }" 
              :for="'taskCheck' + task.id">
                {{ task.title }}
            </div>
            <div 
              class="description-task small text-muted"
              :class="{ 'text-decoration-line-through': 
              task.completed, 'font-italic': task.completed }">
                {{ task.description }}
            </div>
            <div 
              class="description-task small text-muted"
              :class="{ 'text-decoration-line-through': 
              task.completed, 'font-italic': task.completed }">
                Kategori: {{ task.category }}
            </div>
            <div 
              class="description-task small text-muted"
              :class="{ 'text-decoration-line-through': 
              task.completed, 'font-italic': task.completed }">
                Deadline: {{ task.deadline }}
            </div>
            <div 
            class="description-task small text-muted"
            :class="{ 'text-decoration-line-through': 
            task.completed, 'font-italic': task.completed }">
            Prioritas: {{ task.priority }}
            </div>
          </div>
        </div>
      </div>

      <!-- //form add task -->
      <div class="action py-2">
        <!-- /* Jika isCreating == false maka tombol Add Task tidak akan tampil */
          /* isCreating = !isCreating berfungsi sebagai switcher toggle */ -->
        <a href="#" class="add-button" 
          v-if="!isCreating" @click="isCreating = !isCreating">
            Add Task
        </a>
        <div class="add-card" v-else>
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input class="form-control border-0 mb-2" placeholder="Title" type="text">
              <textarea 
                class="form-control border-0 small" 
                placeholder="Description" rows="3">
              </textarea>
              <input class="form-control border-0 mb-2" placeholder="category" type="text">
              <input class="form-control border-0 mb-2" placeholder="Deadline" type="text">
              <input class="form-control border-0 mb-2" placeholder="Prioritas" type="text">
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button class="btn btn-outline-secondary" 
            @click="isCreating = !isCreating">Cancel</button>
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

      localSelectedPriority: this.value,
      //variable penammpung arr category

      selectedPriority: "Semua",
      // Variabel penampung teks pencarian

      searchQuery: '',
      // Status saat menambahkan task

      isCreating: false,
      // Tipe layout daftar task

      gridView: true,
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
    },
    toggleView() {

      this.gridView = !this.gridView; // Mengganti tampilan grid/daftar saat tombol ditekan
    },
  }
}
</script>
<style scoped>.completed-task {
  text-decoration: line-through;
  font-style: italic;
}

.active {
  background-color: #007bff;
  /* Ganti dengan warna yang sesuai untuk menandai item yang aktif */
  color: white;
  /* Warna teks pada item yang aktif */
}</style>