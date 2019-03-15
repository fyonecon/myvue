<template>
    <div class="home">
      <!--公共组件-->
      <com_head></com_head>
      <!--开始内容-->
      <div>


        home-{{msg}}

      </div>
      <!--结束-内容-->
      <!--公共组件-->
      <com_foot></com_foot>
    </div>
</template>

<script>

    /*
    * 注册公共模块
    * */
    import Foot from '@/components/common/foot'
    import Head from '@/components/common/head'

    export default {
      name: "home",
      data(){
        return {
          msg: "home模块"
        }
      },
      methods: {

      },
      components: { // 注册公共组件
        com_foot: Foot,
        com_head: Head,
      },

    }
</script>

<style scoped>
  .home{
    color: red;
    font-size: 20px;
  }
</style>
