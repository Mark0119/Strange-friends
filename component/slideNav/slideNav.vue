<template>
	<view>
		<!-- 导航栏 -->
		<van-tabs @scroll="scrollEvent" @change="onChange" animated swipeable title-active-color="#F85F81">
			<block v-for="(item,index) in IndexNavList" :key="index">
				<van-tab :title="item.classname" >
					<view class="wh-100" :style="{height:`${$store.getters.GetEquipmentContentHeight-99}px`}">
						<!-- 加载 -->
						<view v-if="loding==false" :style="{height:`${$store.getters.GetEquipmentContentHeight+$store.getters.GetEquipmentNavHeight-160}px`}">
							<my-loding :lodingText="lodingText"></my-loding>
						</view>
						<!-- 内容 -->
						<view v-if="loding==true" class="wh-100">
							<my-IndexContent></my-IndexContent>
						</view>
					</view>
				</van-tab>
			</block>

		</van-tabs>
	</view>
</template>

<script>
	// 导入组件
	import loding from '@/component/loding/loding.vue' //加载
	import IndexContent from '@/component/IndexContent/IndexContent.vue' //内容
	export default {
		data() {
			return {
				loding: false,
				lodingText: "数据加载中",
			}
		},
		components: {
			"my-loding": loding, //加载
			'my-IndexContent': IndexContent, //内容

		},
		props: {
			IndexNavList: {
				type: Array,
				default: []
			}
		},
		created() {
			// 加载效果
			const thia = this
			const itemer = setTimeout(() => {
				thia.loding = true
				clearTimeout(itemer)
			}, 1000)
		},
		methods: {
			// 滑动触发事件
			onChange(event) {
				console.log(event)
				this.IndexNavList.filter(item=>{
					if (item.classname == event.detail.title) {
						this.$store.commit('indexes',item.id)
					}
				})
			}, 
			// 滚动时触发
			scrollEvent(event){
				
			}
		},
	}
</script>

<style>

</style>
