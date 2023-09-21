<template>
    <div class="py-4">
        <div class="container">
            <div class="title border-bottom d-flex align-items-center py-2">
        <h5>List Judul Article</h5>
    </div>
            <div v-for="article in articles" :key="article">
                <ul class="mt-2">
                    <li>
                        <nuxt-link class="btn btn-outline-primary btn-sm" :to="'detail-article/' + article.id">
                            {{ article.title }}
                        </nuxt-link>
                    </li>
                </ul>
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