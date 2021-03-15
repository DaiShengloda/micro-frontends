<template>
    <div>
        <h2>About</h2>
        <el-input v-model="value" />
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    computed: {
        value: {
            get() {
                return this.$store.getters.iptValue
            },
            set(value) {
                this.setStore({'iptValue': value})
            }
        }
    },
    methods: {
        ...mapMutations(['setStore'])
    }
}
</script>