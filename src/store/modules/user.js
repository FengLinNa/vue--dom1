import axios from "axios"
const state = {
  list:[]
}

const mutations = {
  updateList(state,payload){
    state.list = payload
  }
}

const actions = {
  //查找用户
  getDateFind({commit},payload){
    axios.get("/api/find").then(res=>{
      commit("updateList",res.data)
    })
  },

  //添加用户
  getDataAdd({commit},payload){
    return new Promise((resolve,reject)=>{
      axios.post("/api/add",payload).then(res=>{
        console.log(res,",.............")
        resolve(res)
      })
    })
  },

  //删除用户
  getDateDel({commit,dispatch},payload){
    return new Promise((reslove,reject)=>{
      axios.post("/api/del",payload).then(res=>{
        console.log(1111)
        dispatch("getDateFind")
        reslove()
      })
    })
  },

  //修改用户
  getDateXiu({commit,dispatch},payload){
    return new Promise((resolve,reject)=>{
      axios.post("/api/update",payload).then(res=>{
        console.log(res,"config..........")
        dispatch("getDateFind")
        resolve()
      })
    })
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}