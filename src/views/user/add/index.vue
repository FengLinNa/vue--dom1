<template>
  <el-form label-position="center" label-width="80px" :model="form">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="班级名称">
      <el-input v-model="form.className"></el-input>
    </el-form-item>

    <el-button type="primary" :loading="loading" size="medium" @click="addUser">添加用户</el-button>
  </el-form>
</template>
<script>
import {mapActions} from "vuex"
export default {
   data(){
    return {
      form: {
        name: '',
        className: ''
      },
      loading: false
    }
  },
  methods:{
    ...mapActions({
      addnewUser:"user/getDataAdd"
    }),
    addUser(){
      if(!this.form.name){
        this.$alert("用户名不能为空")
        return
      }
      if(!this.form.className){
        this.$alert("班级名不能为空")
        return
      }
      this.addnewUser(this.form).then(res=>{
        console.log(res.data.code)
        if(res.data.code == 1){
          this.$alert("添加用户成功")
        }
      })
    }
  }
}
</script>
