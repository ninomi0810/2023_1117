<script>
import { RouterLink, RouterView } from 'vue-router'
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default {
    data(){
        return {
        }
    },
    components : {
        RouterLink,
    },
    computed : {
        //...為淺層複製
        //(元儲存位置[需使用的變數])
        ...mapState(counter, ["location", "locationInfo"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="header" :class="{'cass' : this.location === 1}">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="header" :class="{'cass' : this.location === 2}">VtextAndVmodel</RouterLink>
        <RouterLink to="/Vfor" class="header" :class="{'cass' : this.location === 3}">Vfor</RouterLink>
        <RouterLink to="/Von" class="header" :class="{'cass' : this.location === 4}">Von</RouterLink>
        <RouterLink to="/Vbind" class="header" :class="{'cass' : this.location === 5}">Vbind</RouterLink>
        <RouterLink to="/VifAndVshow" class="header" :class="{'cass' : this.location === 6}">VifAndVshow</RouterLink>
        <RouterLink to="/WatchAndComputed" class="header" :class="{'cass' : this.location === 7}">WatchAndComputed</RouterLink>
        <RouterLink to="/storage" class="header" :class="{'cass' : this.location === 8}">storage</RouterLink>
        <RouterLink to="/Props" class="header" :class="{'cass' : this.location === 9}">Props</RouterLink>
        <RouterLink to="/Emit" class="header" :class="{'cass' : this.location === 10}">Emit</RouterLink>
    </div>
    <span>{{ location }}</span>
    <span>{{ locationInfo }}</span>
</template>

<style scoped lang="scss">
.headerShow{
    width:100%;
    height:100%;
    background-color:rgb(237, 214, 214);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .header{
        text-decoration: none;
        color: rgb(92, 69, 40);
        font-size: 30px;
        &:hover{
            font-size: 35px;
        }
    }
    .cass{
        background-color: rgb(92, 69, 40);
        color: #fff;
    }
}
</style>