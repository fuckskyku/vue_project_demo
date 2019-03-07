<template>
    <div>
      <div id="v_container" style="width: 150px;height: 50px;"></div>
      <input type="text" id="code_input" v-model="code" value="" placeholder="请输入验证码"/>
      <button id="my_button" @click="check">验证</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import '@/utils/verify.js'

export default {
  data() {
    return {
      data: [],
      code: '',
      verifyCode: ''
    };
  },
  computed: {
    ...mapState(['token'])
  },
  mounted() {
    this.verifyCode = new GVerify("v_container");
  },
  methods: {
    ...mapActions([
      'setToKen'
    ]),
    check() {
      var res = this.verifyCode.validate(this.code);
			if(res){
				alert("验证正确");
			}else{
				alert("验证码错误");
			}
    }
  },
  components: {
    
  },
};
</script>
<style scoped lang="less">
  
</style>
