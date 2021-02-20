<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="vue-app" name="vue3"></el-tab-pane>
        <el-tab-pane label="react-app" name="react17"></el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'vue3'
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