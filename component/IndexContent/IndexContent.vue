<template>
	<view class="wh-100" @touchmove="log()">
		<!-- 加载 -->
		<view v-if="loding==true" class="w-100 h-20 bg-danger">
			<my-loding :lodingText="lodingText"></my-loding>
		</view>
		<!-- 内容 -->
		<view v-if="loding==false" class="wh-100 bg-dark">
			123
		</view>
	</view>
</template>

<script>
	// 导入组件
	import loding from '@/component/loding/loding.vue' //加载
	export default {
		data() {
			return {
				loding: false,
				lodingText: "正在刷新..."
			}
		},
		components: {
			"my-loding": loding, //加载
		},
		methods: {
			log() {
				const thia = this
				this.loding = true
				const itemer = setTimeout(() => {
					thia.loding = false
					clearTimeout(itemer)
				}, 1000)
			},
		}
	}
</script>

<style>

</style>
