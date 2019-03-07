<template>
  <div class="index">
    <Header></Header>
    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from '@/components/publicTemplate/Header'

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["token"])
  },
  mounted() {},
  methods: {
    ...mapActions(["setToKen"])
  },
  components: {
    Header
  }
};
</script>
<style scoped lang="less">
</style>
