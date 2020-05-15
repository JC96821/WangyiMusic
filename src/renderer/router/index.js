import Vue from 'vue'
import Router from 'vue-router'

/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  if(typeof(location)=="string"){
    var Separator = "&";
    if(location.indexOf('?')==-1) { Separator='?'; }
    location = location + Separator + "random=" + Math.random();
  }
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  name: 'home',
	  component: ()=>import('@/pages/home'),
	  redirect: '/recommend',
	  children:[
		//发现音乐
	    {
	        path:'/recommend',
	        component: ()=>import('@/pages/recommend'),
			redirect: '/recommend/personalRecommend',
			children:[
				//个性推荐
				{
				    path:'/recommend/personalRecommend',
				    component: ()=>import('@/pages/subRecommend/personalRecommend')
				},
				//歌单
				{
				    path:'/recommend/songList',
				    component: ()=>import('@/pages/subRecommend/songList')
				},
				//主播电台
				{
				    path:'/recommend/anchorStation',
				    component: ()=>import('@/pages/subRecommend/anchorStation')
				},
				//排行榜
				{
					path:'/recommend/ranking',
					component: ()=>import('@/pages/subRecommend/ranking')
				},
				//歌手
				{
					path:'/recommend/singer',
					component: ()=>import('@/pages/subRecommend/singer')
				},
				//最新音乐
				{
					path:'/recommend/lastestMusic',
					component: ()=>import('@/pages/subRecommend/lastestMusic')
				}
			]
	    },
		//私人FM
		{
		    path:'/fm',
		    component: ()=>import('@/pages/fm')
		},
		//视频
		{
		    path:'/jvideo',
		    component: ()=>import('@/pages/jvideo')
		},
		//我的收藏
		{
		    path:'/star',
		    component: ()=>import('@/pages/star')
		},
		//下载管理
		{
		    path:'/download',
		    component: ()=>import('@/pages/download')
		},
		//创建的歌单
		{
		    path:'/collection',
		    component: ()=>import('@/pages/collection')
		}
	  ]
	}
  ]
})
