<template>
    <div class="common foot">
      -foot-{{msg}}-
    </div>
</template>

<script>
    export default {
        name: "foot",
        data(){
          return {
            msg: "这个公共模块"
          }
        }
    }
</script>

<style scoped>
  .common{

  }
</style>
