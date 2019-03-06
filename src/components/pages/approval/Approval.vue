/*
 * @Author: fuckSkyKu
 * @Date: 2019-03-06 10:34:20 
 * @Last Modified by:   fuckSkyKu
 * @Last Modified time: 2019-03-06 10:34:20 
 */
<template>
    <div>
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
