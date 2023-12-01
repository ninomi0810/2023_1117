<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import child from '../components/child.vue'
export default {
    data() {
        return {
            title: "father to son",
            name: "",
            password: "",
            tel: "",
            open: false,
            warm: "",
            num: "",
            person: {
                name: "可樂",
                age: 2,
            }
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        click() {
            const all = document.querySelectorAll("input")
            all.forEach(element => {
                if (element.value.length == 0) {
                    this.warm = "尚未填寫完成"
                    return
                }
                this.num++
                if (this.num == all.length) {
                    this.open = !this.open
                }
            });
        }
    },
    components: {
        child
    },
    mounted() {
        this.setLocation(9)
    }
}
</script>

<template>
    <!-- 傳字串寫法 -->
    <!-- <div class="area">
                    <h2>{{ this.title }}</h2>
                    <child v-bind:parentMsg="this.title" />
                </div> -->

    <!-- 傳入input輸入值 -->
    <!-- <h1 v-show="this.num !== 3" style="color: red;">{{ this.warm }}</h1>
                        <div class="all" v-show="this.open == false">
                            <label for="">名字　</label>
                            <input type="text" v-model="this.name">
                            <br><br>
                            <label for="">密碼　</label>
                            <input type="text" v-model="this.password">
                            <br><br>
                            <label for="">手機　</label>
                            <input type="number" v-model="this.tel">
                            <br><br>
                            <button type="button" @click="click()">確認</button>
                        </div> -->

    <!-- <child v-bind:name="this.name" :password="this.password" :tel="this.tel" v-show="this.open == true" /> -->

    <!-- 傳入物件寫法 bug版 -->
    <!-- <h3>{{ this.person }}</h3>
    <child :person="this.person" /> -->

    <!-- 傳入物件寫法 無bug版 -->
    <!-- <h3>{{ this.person }}</h3>
    <child :person="this.person.name" /> -->

    <!-- 傳入物件寫法 v-bind版 -->
    <child v-bind="this.person" />
</template>

<style scoped lang="scss">
// .area {
//     width: 500px;
//     height: 500px;
//     border: 1px solid black;
//     // margin-top: 50px;
//     margin-left: 30%;
// }

.all {
    width: 800px;
    height: 500px;
    margin-left: 30%;
    padding-top: 30px;
}
</style>