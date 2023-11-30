<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            car:false,
            cars:3,
            car2:false,
            house:0,
            house2:0,
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"])
    },
    mounted() {
        this.setLocation(6)
        
    },
}
</script>

<template>
    <div class="all">
        <div class="vif area">
            <br><br>
            <h2>V-if</h2>
            <br>
            <h5>畫面顯示與v-show無差異</h5>
            <h5>僅條件滿足時才產生元素</h5>
            <br>
            <label for="">小名有車</label>
            <input type="checkbox" value="true" v-model="car">
            <p v-if="car">確實有</p>
            <p v-if="cars == 4">確實有~</p>
            
        </div>
        <div class="vshow area">
            <br><br>
            <h2>V-show</h2>
            <h5>畫面顯示與v-if無差異</h5>
            <h5>僅條件滿足時才顯示元素</h5>
            <label for="">小盒有車</label>
            <input type="checkbox" v-model="car2" value="true">
            <p v-show="car2">確實有</p>
        </div>
        <div class="velse area">
            <br><br>
            <h2>V-if & V-else</h2>
            <h5>v-else會綁定最近的v-if做判斷</h5>
            <label for="">小名有房</label>
            <select name="" id="" v-model="house">
                <option value="" hidden>請選擇</option>
                <option value="1" >1</option>
                <option value="2" >2</option>
            </select>
            <p v-if="house == 1">普通</p>
            <p v-if="house == 2">最大</p>
            <p v-else>真的有?</p>
        </div>
        <div class="velse area">
            <br><br>
            <h2>V-if & V-else-if & V-else</h2>
            <h5>v-else會綁定最近的v-if做判斷</h5>
            <label for="">小名有房</label>
            <select name="" id="" v-model="house2">
                <option value="" hidden>請選擇</option>
                <option value="1" >1</option>
                <option value="2" >2</option>
            </select>
            <p v-if="house2 == 1">普通</p>
            <p v-else-if="house2 == 2">最大</p>
            <p v-else>真的有?</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.all{
    display: flex;
    justify-content: space-around;
}
.area{
    margin-left: 50px;
    margin-top: 0;
}
</style>