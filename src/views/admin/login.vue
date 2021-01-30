<template>
    <div class="box">
    <div class="login">
      <div class="hogo">请登录
      </div>
    <!-- 双向绑定  (绑定到数组里)              正则验证       ref和refs绑定                 -->
<el-form :model="loginForm"  label-width="100px" class="demo-loginForm">
  <el-form-item label="用户名" prop="username">
      <!--       双向绑定到数组里的username       -->
    <el-input v-model="loginForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" >
      <!-- 双向绑定到数组里的password -->
    <el-input v-model="loginForm.password" @keyup.enter.native="login"></el-input>
  </el-form-item>

  <el-form-item>
      <!-- 调用登录 -->
    <el-button type="primary" @click="login">登录</el-button>
    <!-- 调用重置 -->
 
  </el-form-item>
</el-form>
    </div>
<div id="circle1">
      <div id="inner-cirlce1">
        <h2> </h2>
      </div>
    </div>






</div>
</template>

<script>
import qs from 'qs'
export default {
    data() {
        return {
loginForm: {
    // 测试用 默认密码
          username: '',
          password: '',
        },
     
      };
    },
    methods: {
    l(){
console.log("艾呀")
    },
   login() {
        this.$axios.login(this.ruleForm).then(res => {
          if (res.code == 200) {
            localStorage.setItem("admin", res.data.remember_token);
            this.$message.success(res.msg);
            this.$router.push("/home");
          } else {
            this.$message.error(res.msg);
          }
        });
 
    }

    
    },

computed:{},

watch:{},

};

</script>

<style scoped>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  background-color: #f8f8f8;
  height: 100vh;
}

.login {
  width: 30%;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 5px 15px;
  border-radius: 5px;
  box-shadow: 1px 3px 6px rgba(80, 80, 80, 0.8);
}
.hogo{
    background-color: #f5f5f5;
    border-color: #ddd;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px ridge black;
}
</style>
