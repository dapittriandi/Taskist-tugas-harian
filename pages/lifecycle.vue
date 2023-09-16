<!-- <template>
    <div ref="example-element">
        {{ propertyComputed }} {{ counter }}
    </div>
</template>
<script>
export default {
    data() {
        return{
            property: 'example',
            counter: 0
        }
    },
    beforeCreate() {
        console.log('Saat ini, event dan lifecycle sudah di inisialisasi');
    },
    computed: {
        propertyComputed() {
            return this.property
        }
    },
    beforeCreate() {
        console.log('saat ini, event dan lifecycle sudah di inisiasi');
    },
    created() {
        console.log('saat ini, this.property menjadi reaktive dan property computed akan ');
        this.property = 'example property updated'
        setInterval(() =>{
            this.counter++
        },1000)
    },
    beforeMount() {
        console.log('saat ini, vm.$sel belum di buat');
    },
    mounted() {
        console.log('saat ini, vm$el sudah di buat dan diganti');
        console.log(this.$el.textContent);
    },
    beforeUpdate() {
        return this.counter
    },
    updated() {
        console.log(+this.$refs['example-element'].textContent === this.counter);
    },
    before() {

    }
}
</script> -->




<!-- // contoh lain -->

<template>
    <div>
        <button @click="msg='Hello'">Ubah Tulisan</button>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return { msg:''}
    },
    created() {
        this.msg = 'Hello'
    },
    beforeMount() {
        this.msg = 'Hello World'
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 5000);
        })
    },
    beforeUpdate() {
        this.msg= 'Hello World Again'
    }
}
</script>