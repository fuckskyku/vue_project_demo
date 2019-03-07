<template>
  <div>
    <div @click="skip('Index',1)">home</div>
    <div @click="skip('Approval',2)">Approval</div>
    <div @click="skip('ApprovalVoting',3)">ApprovalVoting</div>
  </div>
</template>

<script>
import { getStationtList } from "@/api/api";
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
    skip(type,param) {
      this.$router.push({
        name: type,
        params: {
          id: param
        }
      });
    }
  },
  components: {
    
  },
  
};
</script>
<style scoped lang="less">

</style>
