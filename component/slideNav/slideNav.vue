<template>
	<view>
		<van-tabs animated swipeable title-active-color="#F85F81">
			<block v-for="(item,index) in IndexNavList" :key="index">
				<van-tab :title="item.classname"> 
					<view class="wh-100" :style="{height:`${$store.getters.GetEquipmentContentHeight-99}px`}">
						<!-- 加载 -->
						<view v-if="loding==false" :style="{height:`${$store.getters.GetEquipmentContentHeight+$store.getters.GetEquipmentNavHeight-160}px`}">
							<my-loding :lodingText="lodingText"></my-loding>
						</view>
						<!-- 内容 -->
						<view v-if="loding==true" class="wh-100 bg-dark">
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
	import IndexContent from '@/component/IndexContent/IndexContent.vue'//内容
	export default {
		data() {
			return {
				loding:false,
				lodingText:"数据加载中"
			}
		},
		components:{
			"my-loding": loding, //加载
			'my-IndexContent':IndexContent,//内容
			
		},
		props: {
			IndexNavList: {
				type: Array,
				default: []
			}
		},
		created() {
			const thia=this
			const itemer=setTimeout(()=>{
				thia.loding=true
				clearTimeout(itemer)
				},3000)
		},
		methods: {

		}
	}
</script>

<style>

</style>
