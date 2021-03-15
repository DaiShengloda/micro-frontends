<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="vue-app" name="vue"></el-tab-pane>
        <el-tab-pane label="react-app" name="react17"></el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'vue'
        }
    },
    methods: {
        handleClick({ name: subapp }){
            subapp = '/' + subapp
            history.pushState(null, subapp, subapp)
        }
    }
}
</script>

<style>

</style>