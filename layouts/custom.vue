<template>
    <div id="app">
        <HeaderWeb />
        <Nuxt />
        <FooterWeb />
    </div>
</template>
<script>
//memanggil component sesuai lokasi masing-masing file
import Header from '@/components/HeaderWeb.vue'
import Footer from '@/components/FooterWeb.vue'
import CardItem from '@/components/card/CardItem.vue'
import Filter from '@/components/filtering/FilterData.vue'

export default{
    layouts: {
        Header,
        Footer,
        CardItem,
        Filter
    },
}
</script>
