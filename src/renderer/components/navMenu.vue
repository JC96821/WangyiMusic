<template>
	<div class="main">
		<router-link 
			v-for="(item, index) in list"
			:key="index"
			:class="{'menu-active':$route.path == item.to}"
			class="menu-item" 
			:to="item.to">
			{{item.label}}
		</router-link>
	</div>
</template>

<script>
	export default{
		name: 'navMenu',
		props:{
			list: Array
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #e9e9e9;
		.menu-item{
			padding: 1vw 1.5vw;
			user-select: none;
			cursor: pointer;
			position: relative;
			margin: 0 1.5vw;
			text-decoration: none;
			color: #555555;
		}
		.menu-active{
			color: #de1b2b;
			transition: .2s;
			position: relative;
		}
		.menu-active::before{
			content: "";
			width: 100%;
			height: .3vw;
			background-color: #de1b2b;
			position: absolute;
			left: 0;
			bottom: 0;
		}
		
	}
</style>
