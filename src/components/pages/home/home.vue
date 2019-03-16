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

    let all_this; // 定义一个全局指针，负责全局prototype

    export default {
      name: "home",
      data() {
        return {
          msg: "home模块"
        }
      },
      methods: {},
      components: { // 注册公共组件
        com_foot: Foot,
        com_head: Head,
      },
      beforeCreate: function () {
        all_this = this;

        console.log(this.$appName("22222=="));
        run();
      },
      created() {
        all_this = this;

        console.log(all_this.$appName("33333=="));
      }
    }

    function run() {
      console.log(all_this.$appName("22222----"))
    }



</script>

<style scoped>
  .home{
    color: red;
    font-size: 20px;
  }
</style>
