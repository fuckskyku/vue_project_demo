<template>
    <div>
      <el-scrollbar :native="false" tag="section">
        <div v-for="(item,index) in data" :key="index">
          
        </div>
      </el-scrollbar>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      value1: '',
      data: []
    };
  },
  computed: {
    ...mapState(['token','APPid'])
  },
  mounted() {
    console.log('store.APPid',this.APPid)
    for(var i = 0;i < 199;i++) {
      this.data[i] = i
    }
  },
  methods: {
    ...mapActions([
      'setToKen',
      'setAPPid'
    ]),
  },
  components: {
    
  },
  
};
</script>
<style scoped lang="less">

</style>
