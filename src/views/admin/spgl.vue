<template>
    <div>
<header>
  <h3>商品管理</h3>
   <p><el-button type="primary" >添加商品</el-button></p> 
</header>

  <el-select v-model="value" placeholder="请选择" @change="val" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
     @change="val"
      :value="item.value">
    </el-option>
  </el-select>
<el-input v-model="input"   placeholder="请输入内容"></el-input>

  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="资讯"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>

    </div>
</template>

<script>
export default {
    data() {
        return {
    tableData:[],
   value: '',
   input:"",
   options: [{
          value: '0',
          label: '根据id选择'
        }, {
          value: '1',
          label: '根据名称选择'
        },],
        };
    },
    created() {
this.list()
    },
    mounted() {

    },
    methods: {
val(){
    console.log(this.value)
},
async list(){
    console.log("oh")
    const res= await this.$axios.get("manage/product/list.do?pageNum=1")
    console.log(res)
}
    },

computed:{},

watch:{},

};

</script>

<style scoped>
header{
border-bottom: 1px solid #eee;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}
.el-input{
    width: 200px;
    margin-left: 20px;
}
</style>
