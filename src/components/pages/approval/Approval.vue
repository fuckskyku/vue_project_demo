/*
 * @Author: fuckSkyKu
 * @Date: 2019-03-06 10:34:20 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-06 15:20:35
 */
<template>
    <div class="approval">
        mdzzapproval
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
      console.log(this.$route)
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
