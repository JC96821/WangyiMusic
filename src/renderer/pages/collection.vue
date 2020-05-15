<template>
	<div class="main">
		<header>
			<img :src="init.coverImgUrl || ''" class="cover-img"/>
			<div class="dtl-info">
				<div class="dtl-info-row1">
					<div class="tag">歌单</div>
					<h2>{{init.name}}</h2>
				</div>
				<div class="dtl-info-row2">
					<img :src="init.creator.avatarUrl" class="user-avator"/>
					<div class="nick-name">{{init.creator.nickname}}</div>
				</div>
				<div class="dtl-info-row3">
					<div class="play-all">播放全部</div>
					<div class="download-btn">下载全部</div>
				</div>
			</div>
		</header>
		<main>
			<j-table v-if="songs" class="j-table" :list="songs"></j-table>
		</main>
	</div>
</template>

<script>
	import jTable from '@/components/jTable.vue'
	export default{
		name: 'collection',
		components:{jTable},
		data(){
			return{
				init:{},
				songs:''
			}
		},
		created() {
			this.init = this.$route.query.init
			this.getSongs(this.init.id).then(resp=>{
				this.songs = resp.data.playlist.tracks
			})
		},
		methods:{
			getSongs(id){
				return this.$axios.get(`${this.$baseUrl}/playlist/detail?id=${id}`)
			},
			playSong(id){
				
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
		header{
			display: flex;
			justify-content: space-around;
			justify-content: center;
			padding: 2vw 3vw;
			.cover-img{
				width: 20vw;
				height: 20vw;
			}
			.dtl-info{
				display: flex;
				justify-content: flex-start;
				align-items: space-between;
				flex-direction: column;
				margin: 0 5vw;
				.dtl-info-row1{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.tag{
						width: 4vw;
						height: 2vw;
						border-radius: .3vw;
						border: 1px solid #de1b2b;
						font-size: 1.3vw;
						color: #de1b2b;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					h2{
						margin: 0 .5vw;
						font-weight: 500;
					}
				}
				.dtl-info-row2{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin: 2vw 0;
					.user-avator{
						width: 2.5vw;
						height: 2.5vw;
						border-radius: 50%;
						user-select: none;
						cursor: pointer;
					}
					.nick-name{
						margin: 0 1vw;
						font-size: 1.5vw;
						user-select: none;
						cursor: pointer;
					}
				}
				.dtl-info-row3{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.play-all{
						width: 10vw;
						height: 2.5vw;
						border-radius: .3vw;
						background-color: #de1b2b;
						border: 1px solid #de1b2b;
						font-size: 1.3vw;
						font-weight: bold;
						color: #fff;						display: flex;
						justify-content: center;
						align-items: center;
						user-select: none;
						cursor: pointer;
						transition: background-color .3s, color .3s;
					}
					.play-all:hover{
						background-color: transparent;
						color: #de1b2b;
					}
					.download-btn{
						width: 10vw;
						height: 2.5vw;
						border-radius: .3vw;
						border: 1px solid #bababa;
						color: #7f7f7f;
						font-size: 1.3vw;
						font-weight: bold;
						display: flex;
						justify-content: center;
						align-items: center;
						position: relative;
						left: 2vw;
						user-select: none;
						cursor: pointer;
						transition: border-color .3s, color .3s;
					}
					.download-btn:hover{
						border-color: #de1b2b;
						color: #de1b2b;
					}
				}
			}
		}
		main{
			display: flex;
			justify-content: center;
			align-items: flex-start;
			width: 80vw;
		}
	}
</style>
