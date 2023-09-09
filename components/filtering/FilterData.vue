<template>
    <div>
        <div v-for="task in filteredTasks" :key="task.id" 
        :class="['item-task d-flex align-items-start border-bottom pt-3 pb-4',
            isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
        ]">
            <input type="checkbox" name="status" 
            class="me-2 mt-2" v-model="task.completed" :id="'taskCheck' + task.id">
            <div :class="'d-flex flex-column'">
                <div class="title-task mb-1" 
                :class="{ 'completed-task': task.completed }" :for="'taskCheck' + task.id">
                    {{ task.title }}</div>
                <div class="description-task small text-muted" :class="{
                    'text-decoration-line-through':
                        task.completed, 'font-italic': task.completed
                }">
                    {{ task.description }}</div>
                <div class="description-task small text-muted" :class="{
                    'text-decoration-line-through':
                        task.completed, 'font-italic': task.completed
                }">
                    Kategori: {{ task.category }}</div>
                <div class="description-task small text-muted" :class="{
                    'text-decoration-line-through':
                        task.completed, 'font-italic': task.completed
                }">
                    Deadline: {{ task.deadline }}</div>
                <div class="description-task small text-muted" :class="{
                    'text-decoration-line-through':
                        task.completed, 'font-italic': task.completed
                }">
                    Prioritas: {{ task.priority }}</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        tasks: Object, // Menerima daftar tugas dari parent
        selectedPriority: String // Menerima prioritas yang dipilih dari parent
    },
    isGrid: {
        type: Boolean,
        required: true,
        default: false
    },
    computed: {
        filteredTasks() {

            // Fungsi computed untuk melakukan filter berdasarkan prioritas yang dipilih
            if (this.selectedPriority === "Semua") {

                // Jika "Semua" dipilih, tampilkan semua task
                return this.tasks;
            } else {

                // Jika prioritas tertentu dipilih, hanya tampilkan task dengan prioritas yang sesuai
                return this.tasks.filter((task) => task.priority === this.selectedPriority);
            }
        },
    },
};
</script>

<style scoped>
.completed-task {
    text-decoration: line-through;
    font-style: italic;
}
</style>
  