<template>
  <div class="HelloWorld">
    <span class="icon-close"></span>
    aaa
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-close{
  font-size: 30px;
  color: red;
}
</style>
