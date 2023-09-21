<template>
    <div class="py-4">
    <div class="container">
        <div v-for="task in tasks" :key="task.id">
            <div class="item-task d-flex align-items-start pt-3 pb-4" v-if="task.id == paramId">
                <input type="checkbox" name="status" id="task" class="me-2 mt-2" :checked="task.isDone"
                    v-model="task.isDone">
                <div>
                    <div class="title-task mb-1">
                        {{ task.title }}
                    </div>
                    <div class="description-task small text-muted mb-3">
                        {{ task.description }}
                    </div>
                    <input class="form-control form-control-sm" type="date" />
                </div>
            </div>
        </div>
        <div class="action mt-4">
            <div class="btn btn-outline-secondary btn-sm mb-3" @click="$router.go(-1)">Kembali</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    layout(context) {
        return 'custom'
    },
    data() {
        return {
            paramId: this.$route.params.id,
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    description: 'ini deskripsi 1',
                    isDone: false
                },
                {
                    id: 2,
                    title: 'Tugas 2',
                    description: 'ini deskripsi 2',
                    isDone: false
                },
                {
                    id: 3,
                    title: 'Kerja 3',
                    description: 'ini deskripsi 3',
                    isDone: false
                }
            ]
        }
    }
}

</script>