<template>
  <div class="hello">
    Vue微应用页面
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
}
</style>
