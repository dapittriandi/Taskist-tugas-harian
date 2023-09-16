<template>
    <div :class="
    'item-task d-flex align-items-start border-bottom pt-3 pb-4 col-12 col-md-6 col-lg-4'" style="margin-left: 3px;">
        <div v-show="o" class="left">
            hello!
        </div>
        <div v-if="awesome" class="left">
            nama saya dapit triandi
        </div>
        <div class="left">
            {{ count }}
        </div>
        <div v-if="number > 0.5" class="left">
            now you see me with number {{ number }}
        </div>
        <div v-else class="left">
            now not see with number {{ number }}
        </div>
    </div>
</template>
<script>

export default {
    layout(contect) {
        return 'custom'
    },
    name: "HelloWorld",
    data() {
        return {
            shopNumber: 2238471038461,
            awesome: true,
            number: Math.random(),
        }
    },
    computed: {
        count: function () {
            return 'My number ' + this.shopNumber
        }
    }

}
</script>
<style scoped>
.left {
    border-left: 1px solid #333;
    padding: 5px;
    width: 100%;
    height: 80px;
}
</style>




