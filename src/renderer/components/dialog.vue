<template>
	<div v-if="visible" class="dialog-main">
		<div class="dialog-cover"></div>
		<div class="form">
			<div class="close-button" @click="close"></div>
			<div v-if="!isEmail" class="change-area">
				<div class="img-area">
					<img src="../../../static/icon/phone.png" class="form-img"/>
				</div>
				<div class="input-area">
					<input type="text" placeholder="请输入手机号" v-model="formData.account"/>
					<input type="password" placeholder="请输入密码" v-model="formData.password" />
				</div>
			</div>
			<div v-else-if="isEmail" class="change-area">
				<div class="img-area">
					<img src="../../../static/icon/email.png" class="form-img"/>
				</div>
				<div class="input-area">
					<input type="text" placeholder="请输入邮箱" v-model="formData.account"/>
					<input type="password" placeholder="请输入密码" v-model="formData.password" />
				</div>
			</div>
			<div class="button-area">
				<div class="form-button" @click="login">登录</div>
			</div>
			<div class="change-button">
				<span class="change-text" @click="isEmail = !isEmail">{{linkText}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Jdialog',
		props:{
			visible: Boolean
		},
		data(){
			return{
				formData:{
					account: '13478707150@163.com',
					password: 'JC15542A'
				},
				isEmail: true,
				linkText: '邮箱登录 >>'
			}
		},
		watch:{
			isEmail(e){
				if(e){
					this.linkText = '手机登录 >>'
				}else{
					this.linkText = '邮箱登录 >>'
				}
				this.formData.account = ''
				this.formData.password = ''
			}
		},
		methods:{
			//关闭
			close(){
				this.$emit('close')
			},
			//登录
			login(){
				let res = {}
				if(this.isEmail){
					res = {dist: 'email', ...this.formData}
				}else{
					res = {dist: 'phone', ...this.formData}
				}
				this.$emit('submit', res)
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	.dialog-main{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.dialog-cover{
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #333333;
		opacity: 0.5;
	}
	.form{
		width: 30vw;
		height: 55vh;
		background-color: #f8f8f8;
		border-radius: 4px;
		position: fixed;
		left: 37%;
		top: 18%;
		overflow: hidden;
		.close-button{
			width: 15px;
			height: 15px;
			position: absolute;
			top: 5px;
			right: 5px;
			cursor: pointer;
			z-index: 999;
		}
		.close-button::before,
		.close-button::after{
			content: "";
			width: 1.5px;
			height: 15px;
			background-color: #8f8f8f;
			position: absolute;
			left: 6.5px;
		}
		.close-button::before{
			transform: rotate(45deg);
		}
		.close-button::after{
			transform: rotate(-45deg);
		}
		
		.change-area{
			height: 70%;
			.img-area{
				width: 100%;
				height: 65%;
				display: flex;
				justify-content: center;
				align-items: center;
				.form-img{
					width: 8vw;
					height: 8vw;
					position: relative;
					top: 10px;
				}
			}
			.input-area{
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				input[type="text"],
				input[type="password"]{
					outline: none;
					padding: .5vw;
					font-size: 1.5vw;
					font-weight: bold;
					border: none;
					border-bottom: 1px solid #b7b7b7;
					margin: 10px 0;
					width: 60%;
					background-color: transparent;
				}
			}
		}
		
		.button-area{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1vw 0;
			.form-button{
				width: 60%;
				padding: .5vw .3vw;
				border-radius: 4px;
				font-size: 1.5vw;
				background-color: #de1b2b;
				border: 1px solid #de1b2b;
				font-weight: bold;
				display: flex;
				justify-content: center;
				align-items: center;
				user-select: none;
				cursor: pointer;
				transition: background-color .3s, color .3s;
			}
			.form-button:hover{
				background-color: #fff;
				color: #de1b2b;
			}
		}
		.change-button{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #de1b2b;
			.change-text{
				font-size: 1.3vw;
				user-select: none;
				cursor: pointer;
			}
		}
	}
</style>
