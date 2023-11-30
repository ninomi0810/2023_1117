<script>
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            arr:[1, 2, 3],
            arr2:[
                {
                    name:"可樂",
                    type:"臘腸",
                    age:2,
                },
                {
                    name:"雪碧",
                    type:"博美",
                    age:5,
                },
                {
                    name:"奶茶",
                    type:"馬爾濟斯",
                    age:2,
                }
            ],
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(3)
    }
}
</script>

<template>
    <br>
    <h1>V-for</h1>
    <div class="arr">
        <div class="left">
            <h2>arr內容</h2>
            <p v-for="item in arr">{{ item }}</p>
        </div>
        <div class="right">
            <h2>index位置</h2>
            <p v-for="(item, index) in arr">{{ index }}</p>
        </div>
        <div class="arr2">
            <h2>列表</h2>
            <ol v-for="element in arr2">
                <li>{{ element.name }}</li>
                <li>{{ element.age }}</li>
                <li>{{ element.type }}</li>
                <p>--------------------</p>
            </ol>
        </div>
        <div class="nine">
            <h2>刻板練習</h2>
            <div class="tri" v-for="item in arr">
                <div class="sqr" v-for="item in arr"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2{
    margin-top: 0;
}
.arr{
    display: flex;
    justify-content: space-around;
}
.tri{
    display: flex;
    margin-top: 20px;
    .sqr{
        width: 50px;
        height: 50px;
        background-color:#8d6d52;
        margin-left: 20px;
    }
}
</style>