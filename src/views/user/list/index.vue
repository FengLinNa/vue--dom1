<template>
  <div>
    <el-table
    :data="tableData"
    border>
    <el-table-column
      fixed
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      fixed
      prop="className"
      label="班级">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="bianji(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
 <el-dialog title="更改用户信息" :visible.sync="infoDialog">
  <el-form :model="form">
    <el-form-item label="班级" :label-width="form">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="姓名" :label-width="form">
       <el-input v-model="form.className" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button>取 消</el-button>
    <el-button type="primary" @click="save">保 存</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
  data(){
    return {
      infoDialog: false,
      form: {
        id: '',
        name: '',
        className: ''
      }
    }
  },
  computed:{
    ...mapState({
      tableData:state=>state.user.list
    })
  },
  methods:{
    ...mapActions({
      getDateFind:"user/getDateFind",
      getDateDel:"user/getDateDel",
      getDateXiu:"user/getDateXiu"
    }),
    handleClick(row){
      this.getDateDel({id:row.id})
    },
    bianji(row){
      this.infoDialog = true
      this.form = {...row};
    },
    save(){
      this.getDateXiu(this.form)
      this.infoDialog = false
    }
  },
  created(){
    this.getDateFind()
  }
}
</script>

