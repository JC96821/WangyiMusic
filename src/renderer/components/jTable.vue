<template>
	<div class="main">
		<table>
			<th>
				<td></td>
				<td>操作</td>
				<td>音乐标题</td>
				<td>歌手</td>
				<td>专辑</td>
				<td>时长</td>
			</th>
		</table>
		<table>
			<tr v-for="(item, index) in list" :key="index">
				<td>{{jIndex(index)}}</td>
				<td>操作01</td>
				<td>{{jText(item.name, 18)}}</td>
				<td>{{jText(item.ar[0].name, 18)}}</td>
				<td>{{jText(item.al.name, 18)}}</td>
				<td>05:20</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name: 'jTable',
		props:{
			list: Array
		},
		computed:{
			jIndex:function(){
				return function(index){
					return (index + 1)<10?`0${index + 1}`:`${index + 1}`
				}
			},
			jText:function(){
				return function(e, len){
					return e.length > len?`${e.substring(0, len)}...`:e
				}
			}
		},
		created() {
			console.log(this.list)
		}
	}
</script>

<style lang="scss" scoped>
	.main::-webkit-scrollbar {
	  width: .5vw;
	}
	main::-webkit-scrollbar-track {
	  background-color: transparent;
	  -webkit-border-radius: 2em;
	  -moz-border-radius: 2em;
	  border-radius: 2em;
	}
	.main::-webkit-scrollbar-thumb {
	  background-color: #e8e8e8;
	  -webkit-border-radius: 2em;
	  -moz-border-radius: 2em;
	  border-radius: 2em;
	}
	.main{
		padding: 0 1vw;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 95%;
		height: 58vh;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		table{
			width: 100%;
			user-select: none;
			border-collapse: collapse;
			color: #535353;
			th{
				cursor: default;
				border-bottom: .5px solid #dadada;
				font-size: 1.5vw;
				font-weight: 400;
				padding: 0;
				td:nth-child(1),
				td:nth-child(2),
				td:nth-child(3),
				td:nth-child(4),
				td:nth-child(5),
				td:nth-child(6){
					transition: background-color .3s;
					padding: .5vw;
				}
				td:nth-child(1){width: 5vw;}
				td:nth-child(2){width: 5vw;}
				td:nth-child(3){width: 22vw;}
				td:nth-child(4){width: 16vw;}
				td:nth-child(5){width: 16vw;}
				td:nth-child(6){width: 8vw;}
				td:nth-child(1):hover,
				td:nth-child(2):hover,
				td:nth-child(3):hover,
				td:nth-child(4):hover,
				td:nth-child(5):hover,
				td:nth-child(6):hover{
					background-color: #e8e8e8;
				}
			}
			tr{
				font-size: 1.5vw;
				cursor: default;
				transition: background-color .3s;
				td:nth-child(1),
				td:nth-child(2),
				td:nth-child(3),
				td:nth-child(4),
				td:nth-child(5),
				td:nth-child(6){
					padding: 1vw .5vw;
				}
				td:nth-child(1){
					text-align: right;
					width: 5vw;
				}
				td:nth-child(2){
					text-align: center;
					width: 5vw;
				}
				td:nth-child(3){width: 22vw;}
				td:nth-child(4){width: 16vw;}
				td:nth-child(5){width: 16vw;}
				td:nth-child(6){width: 8vw;}
			}
			tr:nth-child(2n+1){
				background-color: #f9f9f9;
			}
			tr:hover{
				background-color: #dfdfdf;
			}
		}
	}
</style>
