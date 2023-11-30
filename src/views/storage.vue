<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        storage() {
            let dog = {
                name: "可樂",
                age: 2,
            }
            // 將物件轉為字串
            // JSON.stringify()
            localStorage.setItem("dog", JSON.stringify(dog))
            console.log(JSON.stringify(dog))
            console.log(typeof (JSON.stringify(dog)))

            // 將字串轉為物件
            // JSON.parse()
            let obj = localStorage.getItem("dog")
            console.log(JSON.parse(obj))
            console.log(typeof (JSON.parse(obj)))
        }
    },
    mounted() {
        this.setLocation(8)
    },
}
</script>

<template>
    <button @click="storage()">button</button>
</template>

<style scoped lang="scss">
button {
    width: 100px;
    height: 100px;
}
</style>