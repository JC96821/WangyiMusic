<template>
	<div class="main">
		<div class="menu-item-header">推荐</div>
		<div class="menu-item" :class="{'menu-active':$route.path.indexOf('/recommend') != -1}">
			<img src="../../../static/icon/music.png" class="item-img"/>
			<router-link to="/recommend" class="item-link">发现音乐</router-link>
		</div>
		<div class="menu-item" :class="{'menu-active':$route.path.indexOf('/fm') != -1}">
			<img src="../../../static/icon/fm.png" class="item-img"/>
			<router-link to="/fm" class="item-link">私人FM</router-link>
		</div>
		<div class="menu-item" :class="{'menu-active':$route.path.indexOf('/jvideo') != -1}">
			<img src="../../../static/icon/video.png" class="item-img"/>
			<router-link to="/jvideo" class="item-link">视频</router-link>
		</div>
		<div class="menu-item-header">我的音乐</div>
		<div class="menu-item" :class="{'menu-active':$route.path.indexOf('/star') != -1}">
			<img src="../../../static/icon/star.png" class="item-img"/>
			<router-link to="/star" class="item-link">我的收藏</router-link>
		</div>
		<div class="menu-item" :class="{'menu-active':$route.path.indexOf('/download') != -1}">
			<img src="../../../static/icon/download.png" class="item-img"/>
			<router-link to="/download" class="item-link">下载管理</router-link>
		</div>
		<div class="menu-item-header">创建的歌单</div>
		<div class="menu-coll">
			<div v-for="(item, index) in collectionList" :key="index" class="col-item" :class="{'menu-active':isActive(item.name)}">
				<img src="../../../static/icon/user_music.png" class="item-img"/>
				<a class="item-link" @click="goItem(item)">{{item.name}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Jmenu',
		data(){
			return{
				timer: '',
				collectionList:[]
			}
		},
		computed:{
			isActive:function(){
				return function(e){
					if(this.$route.query.init){
						return this.$route.query.init.name == e
					}
					return false
				}
			}
		},
		created() {
			let uid =''
			this.timer = setInterval(()=>{
				uid = this.$store.state.Counter.id
				if(uid){
					this.getUserInfo(uid).then(resp=>{
						this.collectionList = resp.data.playlist
						clearInterval(this.timer)
					})
				}
			}, 3000)
		},
		methods:{
			//获取用户详细信息,歌单、收藏、mv、dj数量
			getUserInfo(uid){
				return this.$axios.get(`${this.$baseUrl}/user/playlist?uid=${uid}`)
			},
			//页面跳转至 我收藏的歌单
			goItem(e){
				this.$emit('jump', {path: '/collection', query: {init: e}})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		color: #464646;
		.menu-item-header{
			font-size: 1.4vw;
			padding: 1vw .5vw;
			user-select: none;
			cursor: default;
		}
		.menu-item{
			padding: 1vw 1.5vw;
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-content: center;
			user-select: none;
			.item-img{
				width: 1.5vw;
				height: 1.5vw;
				margin-right: .5vw;
			}
			.item-link{
				font-size: 1.3vw;
				color: #464646;
				text-decoration: none;
				cursor: pointer;
			}
		}
		.menu-coll{
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;
			.col-item{
				width: 90%;
				padding: .8vw 1.5vw;
				user-select: none;
				.item-img{
					width: 1.5vw;
					height: 1.5vw;
					margin-right: .5vw;
				}
				.item-link{
					font-size: 1.3vw;
					color: #464646;
					text-decoration: none;
					cursor: pointer;
				}
			}
		}
		.menu-active{
			background-color: #e8e8e8;
			transition: .2s;
			position: relative;
		}
		.menu-active::before{
			content: "";
			width: .3vw;
			height: 100%;
			background-color: #de1b2b;
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>
