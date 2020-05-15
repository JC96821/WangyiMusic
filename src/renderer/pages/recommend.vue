<template>
	<div>
		<nav-menu :list="menuList"></nav-menu>
		<router-view></router-view>
	</div>
</template>

<script>
	import navMenu from '@/components/navMenu.vue'
	export default{
		name: 'recommend',
		components:{navMenu},
		data(){
			return{
				menuList:[
					{label: '个性推荐', to: '/recommend/personalRecommend'},
					{label: '歌单', to:'/recommend/songList'},
					{label: '主播电台', to: '/recommend/anchorStation'},
					{label: '排行榜', to:'/recommend/ranking'},
					{label: '歌手', to:'/recommend/singer'},
					{label: '最新音乐', to:'/recommend/lastestMusic'}
				]
			}
		},
		created() {
			
		}
	}
</script>

<style lang="scss" scoped>
</style>
