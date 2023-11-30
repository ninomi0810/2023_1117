<script>
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            title: "title",
            ispink:false,
            islarge:false,
            styleArr:[],
            imgText:"",
            array:[1,2,3,4,5,6,7,8,9,10],
            test:""
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(5)
    },
}
</script>

<template>
    <div class="all">
        <div class="one area">
            <!-- v-model 為標籤的值與變數雙向綁定 -->
            <!-- v-bind 為標籤屬性單向綁定變數 -->
            <h1 class="title">title</h1>
            <h1 v-bind:class="title">header</h1>
        </div>
        <div class="two area">
            <h2>class　{　}</h2>
            <label for="">is pink</label>
            <input type="checkbox" value="true" v-model="ispink">
            <label for="">is large</label>
            <input type="checkbox" value="true" v-model="islarge">
            <br><br>
            <input type="text" :disabled="ispink" >
            <!-- 一開始h2標籤無class名稱 -->
            <h2 :class="{
                pink:ispink,
                large:islarge,
            }">銀行</h2>
            <!-- 當ispink/islarge變為true時，便會賦予h2 pink/large class名稱 -->
        </div>
        <div class="third area">
    
            <h2>class　[　]</h2>
            <label for="">pink</label>
            <input type="checkbox" value="pink" v-model="styleArr">
            <label for="">large</label>
            <input type="checkbox" value="large" v-model="styleArr">
            <label for="">italic</label>
            <input type="checkbox" value="italic" v-model="styleArr">
            <h2 :class="styleArr">烘焙坊</h2>
        </div>
        <div class="forth area">
            <h2>更改img src</h2>
            <label for="">熊</label>
            <input type="radio" value="../../pc01_1366_768.png" v-model="imgText">
            <label for="">熊</label>
            <input type="radio" value="../../螢幕擷取畫面 2023-11-06 202408.png" v-model="imgText">
            <label for="">熊</label>
            <input type="radio" value="../../GOODS-04345412-removebg-preview.png" v-model="imgText">
            <br>
            <br>
            <img :src="imgText" alt="">
        </div>
        <div class="fifth area">
            <h2>下拉式選單給定value值</h2>
            <select name="" id="" v-model="test">
                <option value="" hidden>請選擇</option>
                <option :value="item" v-for="item in array">{{ item }}</option>
            </select>
            <p>{{ this.test }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.all{
    display: flex;
    justify-content: space-around;
    .area{
        margin-top: 50px;
        }
}
.title {
    color: #8d6d52;
    margin-top: 0;
}
.pink{
    color: pink;
}
.large{
    font-size: large ;
}
.italic{
    font-style: italic;
}
img{
    max-width: 300px;
    max-height: 300px;
}
</style>