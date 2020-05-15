<template>
	<div class="main">
		<div class="logo">
			<img src="../../../static/icon/logo.png" class="logo-image"/>
			<span class="logo-text">网易云音乐</span>
		</div>
		<div class="input-area">
			<input type="text" placeholder="搜索音乐,视频,歌词.电台"/>
		</div>
		<div v-if="!isLogin" class="user-info" @click="visiblity = true">
			<img src="../../../static/icon/user.png" class="user-avator"/>
			<div class="user-name">未登录</div>
		</div>
		<div v-else-if="isLogin" class="user-info">
			<img :src="this.$store.state.Counter.avatorImg" class="user-avator"/>
			<div class="user-name">{{this.$store.state.Counter.userName}}</div>
		</div>
		<div class="tool-options">
			<div class="mini-button" @click="option('min')"></div>
			<div v-show="!isMax" class="max-button" @click="option('max')"></div>
			<div v-show="isMax" class="default-button" @click="option('max')"></div>
			<div class="close-button" @click="option('close')"></div>
		</div>
		<Jdialog :visible="visiblity" @close="visiblity = false" @submit="submit"></Jdialog>
	</div>
</template>

<script>
	const {ipcRenderer: ipc} = require('electron');
	import Jdialog from '@/components/dialog.vue'
	export default{
		name: 'toolbar',
		components:{Jdialog},
		data(){
			return{
				isMax: false,
				isLogin: false,
				visiblity: false
			}
		},
		methods:{
			//提交登录
			async submit(e){
				await this.getUserId(e).then(resp=>{
					this.$store.commit('LOGIN', 
					{
						id: resp.data.profile.userId, 
						userName: resp.data.profile.nickname,
						avatorImg: resp.data.profile.avatarUrl
					})
					this.isLogin = true
					this.visiblity = false
				})				
			},
			//获取用户Id
			getUserId(e){
				let url = ''
				if(e.dist == 'phone'){
					url = `${this.$baseUrl}/login/cellphone?phone=${e.account}&password=${e.password}`
				}else{
					url = `${this.$baseUrl}/login?email=${e.account}&password=${e.password}`
				}
				return this.$axios.get(url)				 
			},			
			//窗口右上角 '最小化'、'最大化'、‘关闭’按钮
			option(e){
				switch(e){
					case 'min':
						ipc.send('min');
						break
					case 'max':
						this.isMax=!this.isMax
						ipc.send('max');
						break
					case 'close':
						ipc.send('close');
						break
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		-webkit-app-region: drag;
		height: 7.2vh;
		background-color: #de1b2b;
		box-shadow: 0 2px 2px 2px #f5f5f5;
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-content: center;
		user-select: none;
		cursor: default;
		position: relative;
		padding: 5px 10px;
		.logo{
			display: flex;
			justify-content: space-around;
			align-content: center;
			width: 150px;
			.logo-image{
				width: 34px;
				height: 35px;
				position: relative;
				top: 2px;
			}
			.logo-text{
				font-size: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
			}
		}
		.input-area{
			display: flex;
			justify-content: center;
			align-items: center;
			input[type="text"]{
				-webkit-app-region: no-drag;
				background-color: #b71721;
				outline: none;
				width: 200px;
				height: 20px;
				padding: 3px 10px;
				border: 1px solid #d51a27;
				font-size: 12px;
				color: #f0f0f0;
				border-radius: 20px;
			}
			input::-webkit-input-placeholder {
			    color: #ffa5a7;
			}
		}
		.user-info{
			-webkit-app-region: no-drag;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100px;
			.user-avator{
				width: 20px;
				height: 20px;
				border-radius: 100%;
				background-color: #ebebeb;
				padding: 5px;
				cursor: pointer;
			}
			.user-name{
				font-size: 14px;
				cursor: pointer;
				transition: .3s;
			}
			.user-name:hover{
				font-weight: bold;
			}
		}
		.tool-options{
			-webkit-app-region: no-drag;
			width: 80px;
			display: flex;
			justify-content: space-around;
			align-content: center;
			.mini-button,
			.max-button,
			.close-button,
			.default-button{
				width: 20px;
				height: 20px;
				position: relative;
				top: 8px;
				cursor: pointer;
				position: relative;
			}
			
			.default-button::before{
				content: "";
				width: 8px;
				height: 6px;
				border-radius: 1px;
				border: 1px solid #f0f0f0;
				position: absolute;
				top: 40%;
				left: 18%;
			}
			.default-button::after{
				content: "";
				width: 8px;
				height: 6px;
				border-radius: 1px;
				border: 1px solid #f0f0f0;
				position: absolute;
				top: 25%;
				left: 30%;
			}
			
			.mini-button::before{
				content: "";
				width: 10px;
				height: 0;
				border-bottom: 1px solid #f0f0f0;
				position: absolute;
				top: 50%;
				left: 25%;
			}
			.max-button::before{
				content: "";
				width: 10px;
				height: 8px;
				border-radius: 1px;
				border: 1px solid #f0f0f0;
				position: absolute;
				top: 30%;
				left: 20%;
			}
			.close-button::before{
				content: "\d7";
				color: #f0f0f0;
				font-size: 20px;
				font-weight: bold;
				position: absolute;
				left: 20%;
			}
		}
	}
</style>
