<template>
    <div class="py-4">
        <div class="container">
            <div v-for="article in articles" :key="article.id" class="mx-auto p-2">
                <div v-if="article.id == paramId">
                    <div class="card mb-3 shadow p-3 rounded" style="max-width: 100%;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img :src="article.img" class="img-fluid rounded-start" alt="">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ article.title }}</h5>
                                    <p class="card-text">{{ article.content }}</p>
                                    <div class="action mt-4">
                                        <div class="btn btn-outline-secondary btn-sm mb-3" @click="$router.go(-1)">Kembali
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            articles: [
                {
                    id: 1,
                    title: "Judul Artikel 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
                    img: 'https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                },
                {
                    id: 2,
                    title: "Judul Artikel 2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
                    img: 'https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                },
                {
                    id: 3,
                    title: "Judul Artikel 3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
                    img: 'https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                },
            ]
        }
    }
}
</script>