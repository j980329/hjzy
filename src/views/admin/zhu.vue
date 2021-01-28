<template>
    <div>
<el-container>
  <el-header>
      <h3>MMALL ADMIN</h3>
   <p>欢迎:admin <el-button type="primary" @click="tc">退出</el-button></p> 
  </el-header>
  <el-container>
    <el-aside width="200px">

<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @close="handleClose"
      background-color="#fff"
      text-color="blue"
	        ref="menus"
      :default-openeds="openeds"
      active-text-color="black">

 <el-menu-item index="0" @click="$router.push('/home')">
        <i class="el-icon-setting"></i>
        <span slot="title">Home</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
      
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="$router.push('/spgl')">商品管理</el-menu-item>
          <el-menu-item index="1-2">品类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">订单管理</el-menu-item>
      
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
openeds:["1","2"]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
 handleClose(key, keyPath) {
		      this.$refs.menus.open(keyPath);
            },
           async tc(){
                const data= await this.$axios.post("/user/logout.do")
                this.$router.push('/')
            }
    },

computed:{},

watch:{},

};

</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #f8f8f8;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
    display: flex;
    border-color: #e7e7e7;
    justify-content: space-between;
  }
  
  .el-aside {
   background-color: #f8f8f8;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
    
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    /* text-align: center; */

  }
  
 .el-container {
   
    height: 100vh;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu >>> .el-submenu .el-submenu__title .el-submenu__icon-arrow {
        visibility: hidden
    }
</style>
