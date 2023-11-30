<script >
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            title:"title",
            info:{
                name : "可樂",
                age:2,
            },
            cool:"",
            selectText:"",
            lazyTest:"",
            numTest:"",
            trimTest:"",
            checkboxText:[],
            radioText:"",
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"])
    },
    mounted(){
        this.setLocation(2)
    }
}
</script>

<template>
    <button type="button" @click="getLocation">btn1</button>
    <button type="button" @click="setLocation(2)">btn2</button>
    <div class="api">
        <div class="v v-text">
            <br>
            <h1>vtext</h1>
            <h1>{{ this.title }}</h1>
            <!-- Vtext -->
            <p v-text="'this is a page'"></p>
            <p v-text="title"></p>
            <p v-text="info"></p>
            <p v-text="'info'+ info"></p>
            <p v-text="`info ${info}`"></p>
            <p>info{{ this.info }}</p>
        </div>
    
        <br />
        <!-- V-model  雙向綁定 -->
        <div class="v v-model">
            <br>
            <h1>v-model</h1>
            <div class="v model">
                <div class="left">
                    <br>
                    <input type="text" v-model="cool">
                    <p>{{ this.cool }}</p>
                    <!-- lazy,numTest -->
                    <h2>lazyTest</h2>
                    <h4>輸入回傳後才顯示</h4>
                    <input type="text" v-model.lazy="lazyTest">
                    <p>{{ this.lazyTest }}</p>
                    <h2>numTest</h2>
                    <input type="number" v-model.numTest="numTest">
                    <p>{{ this.numTest }}</p>
                    <h2>trimTest</h2>
                    <h4>輸入時可同步顯示</h4>
                    <input type="text" v-model.trimTest="trimTest">
                    <p>{{ this.trimTest }}</p>
                </div>
                <div class="right">
                    <br>
                    <select name="" id="" v-model="selectText">
                        <option value="" hidden>請選擇</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <p>{{ this.selectText }}</p>
                    <br>
                    <!-- checkbox 複選-->
                    <!-- 變數需為陣列 -->
                    <!-- 會將value值塞進v-model變數名稱內 -->
                    <h2>checkbox</h2>
                    <label for="">早餐</label>
                    <input type="checkbox" v-model="checkboxText" name="meal" value="breakfast">
                    <label for="">午餐</label>
                    <input type="checkbox" v-model="checkboxText" name="meal" value="launch">
                    <label for="">晚餐</label>
                    <input type="checkbox" v-model="checkboxText" name="meal" value="dinner">
                    <p>{{ this.checkboxText }}</p>
                    <br>
                
                    <!-- radio 單選 -->
                    <!-- 變數為空字串就行 -->
                    <h2>radio</h2>
                    <label for="">早餐</label>
                    <input type="radio" v-model="radioText" name="food" value="breakfast">
                    <label for="">午餐</label>
                    <input type="radio" v-model="radioText" name="food" value="launch">
                    <label for="">晚餐</label>
                    <input type="radio" v-model="radioText" name="food" value="dinner">
                    <p>{{ this.radioText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.api{
    display: flex;
    margin-left: 30px;
    .v-text{
        width: 40%;
        height: 100%;
    }
    .v-model{
        width: 60%;
        height: 100%;
    }
    .v{
        input{
            border: 1px solid  #8d6d52;
            border-radius: 5px;
        }
        select{
            border: 1px solid  #8d6d52;
            border-radius: 5px;
            color: #8d6d52;
        }
    }
    .model{
        display: flex;
        justify-content: space-around;
    }
}
</style>
