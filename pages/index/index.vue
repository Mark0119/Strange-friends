<template>
	<view>
		<!-- 导航占位符 -->
		<div>
			<my-TransparentBox></my-TransparentBox>
		</div>
		<view :style="{height:`${$store.getters.GetEquipmentContentHeight}px`}" class="bg-danger">
			首页
			{{$store.getters.GetEquipmentContentHeight}}
		</view>
	</view>
</template>

<script>
	// 导入组件
	import TransparentBox from '@/component/TransparentBox/TransparentBox.vue'//透明盒子
	// 导入api
	// 导入function
	export default {
		// 组件注册
		components:{
			"my-TransparentBox":TransparentBox,//导航占位符
			
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
