<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(['token'])
  },
  mounted() {
      
  },
  methods: {
    ...mapActions([
      'setToKen'
    ]),
  },
  components: {
    
  },
  
};
</script>
<style scoped lang="less">

</style>
