<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            point: 0,
            ntd: 0,
        }
    },
    watch: {
        //監看變數名稱(){}
        point() {
            this.ntd = this.point * 10
            // console.log(this.ntd)
        }
    },
    computed: {
        //偽元素變數名稱(){return }

    },
    methods: {
        ...mapActions(counter, ["getLocation", "setLocation"]),
        clickpoint() {
            this.point += 1;
        },
    },
    beforeCreate() {
        //vue檔建立，但事件、變數、屬性尚未建立
        console.log("beforeCreate")
    },
    created() {
        //vue檔建立，且事件、變數、屬性已建立
        console.log("created")
    },
    beforeMount() {
        // DOM Tree 未連接
        console.log("beforeMount")
    },
    mounted() {
        // DOM Tree 已連接
        this.setLocation(7)
        console.log("mounted")
    },
    beforeUpdate() {
        //變數已更動，畫面未更動
        console.log("beforeUpdate")
    },
    updated() {
        //變數已更動，畫面已更動
        console.log("updated")
    },
    beforeUnmount() {
        //vue檔銷毀前
        console.log("beforeUnmount")
    },
    unmounted() {
        // vue檔已銷毀
        console.log("unmounted")
    },
}
</script>

<template>
    <div class="all">
        <div class="one">
            <br>
            <h2>Watch</h2>
            <br>
            <h5>this.point　:　{{ this.point }}</h5>
            <h5>this.ntd　:　{{ this.ntd }}</h5>
            <br>
            <div class="circle" @click="clickpoint()">
            </div>
        </div>
        <!-- <div class="two"></div> -->
    </div>
</template>

<style scoped lang="scss">
.all {
    display: flex;
    justify-content: space-around;

    .one {
        justify-content: center;

        .circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #8d6d52;
        }
    }
}
</style>