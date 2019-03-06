<template>
    <div>
        mdzzindex
    </div>
</template>

<script>
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
