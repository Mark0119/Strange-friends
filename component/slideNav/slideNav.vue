<template>
	<view>
		<van-tabs animated swipeable title-active-color="#F85F81">
			<block v-for="(item,index) in IndexNavList" :key="index">
				<van-tab :title="item.classname">
					<view class="wh-100 bg-dark" :style="{height:`${$store.getters.GetEquipmentContentHeight-99}px`}">
						123
					</view>
				</van-tab>
			</block>

		</van-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			IndexNavList: {
				type: Array,
				default: []
			}
		},
		created() {
		},
		methods: {

		}
	}
</script>

<style>

</style>
