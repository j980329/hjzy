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
 async login() {
    //  ref绑定的数值 用$refs.数值使用   async 异步  validate是element的表单校验方法
      
            // 不是valid 就不执行之后的
       
        //   上传用户名和密码到login地址中 基础地址在amin中
          const {data:res} = await this.$axios.post('/manage/user/login.do',
          qs.stringify(this.loginForm) )
          console.log(res)
        //   如果状态不等于200 则返回登录失败 并不执行以下代码，否之 这条就当不存在
        if(res.status !=0) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 登录成功后吧token保存在本地sessionStirage中
       
        // 跳转
        this.$router.push('/home')
        ;
      },

    
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
