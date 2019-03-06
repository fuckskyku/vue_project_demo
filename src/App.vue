<template>
  <div id="app">
    <el-scrollbar :native="false" tag="section">
      <router-view></router-view>  
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Login from "@/components/pages/login/Login"

export default {
  name: 'App',
  components: {
    Login
  },
  computed: {
    ...mapState(['token'])
  },
  mounted() {
    //this.setToKen(123)
  },
  methods: {
    ...mapActions([
      'setToKen'
    ]),
  },
}

</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  .el-scrollbar {
    width: 100%;
    height: 100%;
    .el-scrollbar__wrap {
      .el-scrollbar__view {
        height: 100%;
        // border: 1px solid red;
      }
      overflow-x: hidden;
      height: 100%;
    }
  }
}
</style>
