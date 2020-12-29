<template>
	<view :style="{height:`${$store.getters.GetEquipmentContentHeight+$store.getters.GetEquipmentNavHeight}px`}" class="flex justify-center align-center">
		<view><van-loading size="24px" vertical>{{lodingText}}</van-loading></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			lodingText:{
				type:String,
				default:'加载中...'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
