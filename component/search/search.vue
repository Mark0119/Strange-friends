<template>
	<view class="search">
		<!-- 搜索组件 -->
		<van-search :placeholder="InputText" input-align="center" />
	</view>
</template>
<script>
	export default {
		props: {
			// 接收的提示语
			InputText: {
				type: String,
				default: ''
			}
		},
	}
</script>

<style>
	/* 搜索框图标定位 */
	.search>>>.van-cell__left-icon {
		position: absolute;
		margin-left: 30%;
		color: #ccc;
	}
</style>
