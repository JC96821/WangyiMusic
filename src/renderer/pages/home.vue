<template>
	<div class="main">
		<j-menu class="side-menu" @jump="jump"></j-menu>
		<div class="main-content">
			<router-view v-if="reload" class="content-view"></router-view>
		</div>
		<div class="play-panel">
			<j-audio></j-audio>
		</div>
	</div>
</template>

<script>
	import jMenu from '@/components/menu.vue'
	import jAudio from '@/components/jAudio.vue'
	export default{
		name: 'home',
		components:{jMenu, jAudio},
		data(){
			return{
				reload: true
			}
		},
		methods:{
			jump(e){
				this.reload = false;
				this.$nextTick(()=>{
					this.$router.push(e)
				    this.reload = true;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 100%;
		position: relative;
		display: flex;
		.side-menu{
			width: 20vw;
			height: 85vh;
			background-color: #fdfdfd;
			overflow-x: hidden;
			overflow-y: auto;
		}
		.main-content{
			width: 80vw;
			height: 85vh;	
		}
		
		.side-menu::-webkit-scrollbar {
		  width: .6vw;
		}
		.side-menu::-webkit-scrollbar-track {
		  background-color: transparent;
		  -webkit-border-radius: 2em;
		  -moz-border-radius: 2em;
		  border-radius: 2em;
		}
		.side-menu::-webkit-scrollbar-thumb {
		  background-color: #e8e8e8;
		  -webkit-border-radius: 2em;
		  -moz-border-radius: 2em;
		  border-radius: 2em;
		}
		
		.play-panel{
			width: 100vw;
			height: 7.8vh;
			position: fixed;
			bottom: 0;
			left: 0;
			border-top: .5px solid #e8e8e8;
			background-color: #f9f9f9;
		}
	}
</style>
