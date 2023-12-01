<script>
export default {
    data() {
        return {

        }
    },
    // 要用父層指令用props:[]
    props: [
        "parentMsg",
        "name",
        "password",
        "tel",
        "person",
    ]
}
</script>


<template>
    <!-- 傳字串寫法 -->
    <!-- <div class="childArea">
            <h3>childArea</h3>
            <h3>{{ this.parentMsg }}</h3>
        </div> -->

    <!-- 傳入input輸入值 -->
    <!-- <div class="sign">
            <h3>名字:{{ this.name }}</h3>
            <h3>密碼:{{ this.password }}</h3>
            <h3>手機:{{ this.tel }}</h3>
        </div> -->

    <!-- 傳入物件寫法 bug版 -->
    <!-- <h3>{{ this.person }}</h3>
    <input type="text" v-model="this.person"> -->

        <!-- 傳入物件寫法 無bug版 -->
    <!-- <h3>{{ this.person }}</h3>
    <input type="text" v-model="this.person.name"> -->

        <!-- 傳入物件寫法 v-bind版 -->
        <h3>{{ this.name }}</h3>
</template>

<style scoped lang="scss">
// .childArea {
//     width: 300px;
//     height: 300px;
//     margin-top: 30px;
//     margin-left: 30px;
//     border: 1px solid red;
// }
.sign {
    width: 300px;
    height: 300px;
    // padding-top: 30px;
    margin-left: 40%;
    border: 1px solid blue;
    color: black;
}
</style>