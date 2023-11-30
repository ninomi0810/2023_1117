<script>
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            title:"",
        }
    },
    methods:{
        print(){
            console.log("btn")
            this.title = "btn";
        },
        sky(){
            console.log("sky")
        },
        write(){
            console.log(this.text)
        },
        goOtherWay(){
            this.$router.push('/Vfor')
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(4)
    },
}
</script>

<template>
    <br>
    <br>
    <h1>V-on</h1>
    <div class="von">
        <div class="btn">
            <h2>button</h2>
            <button class="vonitem" type="button" v-on:click="print()">btn</button>
            <button class="vonitem" type="button" @click="print()">@btn</button>
            <p>{{ this.title }}</p>
        </div>
        <div class="select">
            <h2>select</h2>
            <select class="vonitem" name="" id="" @change="sky()">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
        <div class="input">
            <h2>input</h2>
            <input class="vonitem" type="text" v-model="this.text" @keydown.enter="write()" placeholder="請輸入">
        </div>
        <div class="icon">
            <h2>icon</h2>
            <button class="vonitem" type="button" @click="goOtherWay">
                <i class="fa-solid fa-heart"></i>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    h1{
        margin-top: 0;
    }
    .von{
        display: flex;
        justify-content: space-around;
    }
    .vonitem{
        width: 150px;
        height: 50px;
        font-size: 20px;
        border: none;
        background-color:rgb(237, 214, 214);
        border-radius: 5px;
        color: #8d6d52;
    }
    button{
        margin-left: 20px;
        &:hover{
            color: rgb(237, 214, 214);
            background-color: #8d6d52;
        }
    }
</style>