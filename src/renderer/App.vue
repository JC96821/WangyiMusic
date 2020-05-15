<template>
  <div id="app">
	<tool-bar></tool-bar>
	<router-view></router-view>
  </div>
</template>

<script>
	import toolBar from '@/components/toolbar'
  export default {
    name: 'test',
	components:{toolBar}
  }
</script>

<style>
	body{
		margin: 0;
	}
	#app{
		overflow: hidden;
	}
</style>
