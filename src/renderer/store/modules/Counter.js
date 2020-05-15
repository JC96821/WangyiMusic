const state = {
  id: localStorage.getItem("id") || '',
  userName: localStorage.getItem("userName") || '',
  avatorImg: localStorage.getItem("avatorImg") || ''
}

const mutations = {
  LOGIN(state, e){
	state.id = e.id
	state.userName = e.userName
	state.avatorImg = e.avatorImg
	localStorage.setItem("id", e.id)
	localStorage.setItem("userName", e.userName)
	localStorage.setItem("avatorImg", e.userName)
  }
}

export default {
  state,
  mutations
}
