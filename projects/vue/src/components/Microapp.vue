<template>
    <div>
        <h2>手动加载微应用</h2>
        <div id="micro-app"></div>
    </div>
</template>
<script>
import { loadMicroApp } from 'qiankun'
export default {
    data() {
        return {
            microApp: null,
        }
    },
    mounted() {
        this.microApp = loadMicroApp(
            { 
                name: 'micro-app', 
                entry: '//localhost:8102', 
                container: '#micro-app', 
                props: { name: 'qiankun' } 
            },
        )
    }
}
</script>