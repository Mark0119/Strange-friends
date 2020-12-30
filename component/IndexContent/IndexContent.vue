<template>
	<view class="wh-100" id="Box" @touchstart="TouchstartLoding($event)" @touchend="TouchendLoding($event)">
		<!-- 加载 -->
		<view v-if="loding1==true" class="w-100 h-20">
			<my-loding :lodingText="lodingText"></my-loding>
		</view>
		<!-- 内容 -->
		<view v-if="loding1==false" class="wh-100">
			<my-GraphicMixed :loding2='loding2' :IndexList="IndexList"></my-GraphicMixed>
		</view>
	</view>
</template>

<script>
	// 导入组件
	import loding from '@/component/loding/loding.vue' //加载
	import GraphicMixed from '@/component/GraphicMixed/GraphicMixed.vue' //图文混排
	// 导入api
	import {
		IndexDataList
	} from '@/api/Index/IndexDataList.js'
	export default {
		data() {
			return {
				loding1: false,
				loding2: false,
				lodingText: "正在刷新...",
				// 触摸触发
				OldY: 0,
				NewY: 0,
				// 首页列表数据
				IndexList: []
			}
		},
		components: {
			"my-loding": loding, //加载
			"my-GraphicMixed": GraphicMixed, //图文混排
		},
		created() {
			this.getIndexList()
		},
		computed:{
			indexes(){
				return this.$store.getters.indexes
			}
		},
		watch:{
			indexes(newVal){
				if(newVal){
					this.loding1 = true
					this.getIndexList()
				}
			}
		},
		methods: {
			TouchstartLoding(event) {
				this.OldY = parseInt(event.touches[0].pageY)
			},
			TouchendLoding(event) {
				this.NewY = parseInt(event.changedTouches[0].pageY)
				const Gap = this.NewY - this.OldY
				if(event.target.offsetTop>2000){//距离顶部
					this.loding2 = true
					this.getIndexList()
				}
				// console.log(event.target.offsetTop)顶部距离
				if (Gap > 90 && event.target.offsetTop<400) {
					this.loding1 = true
					this.getIndexList()
				}
				console.log(Gap)//手指按下和抬起的差值
			},
			// 请求数据
			getIndexList() {
				IndexDataList(this.indexes).then(res => {
					this.IndexList = res.data.data.list
					this.loding1 = false
					this.loding2 = false
				})
			}


		}
	}
</script>
<style>
</style>
