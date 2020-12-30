<template>
	<view class="">
		<!-- 加载 -->
		<view v-if="loding==false" :style="{height:`${$store.getters.GetEquipmentContentHeight+$store.getters.GetEquipmentNavHeight}px`}">
			<my-loding :lodingText="lodingText"></my-loding> 
		</view>
		<!-- 内容 -->
		<view v-if="loding==true">
			<!-- 导航占位符 -->
			<div>
				<my-TransparentBox></my-TransparentBox>
			</div>
			<view :style="{height:`${$store.getters.GetEquipmentContentHeight}px`}">
				<!-- App端 -->
				<view class="flex flex-column">
					<!-- 搜索组件，H5可用 -->
					<view>
						<my-Search :InputText="InputText"></my-Search>
					</view>
					<!-- 滑动导航组件 -->
					<view>
						<my-SlideNav :IndexNavList='IndexNavList'></my-SlideNav>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 导入组件
	import loding from '@/component/loding/loding.vue' //加载
	import TransparentBox from '@/component/TransparentBox/TransparentBox.vue' //透明盒子
	import search from '@/component/search/search.vue' //搜索框
	import slideNav from '@/component/slideNav/slideNav.vue' //滑动导航
	// 导入api	
	import {
		IndexNav
	} from '@/api/Index/IndexNav.js'
	// 导入function
	export default {
		// 组件注册
		components: {

			"my-loding": loding, //加载
			"my-TransparentBox": TransparentBox, //导航占位符
			"my-Search": search, //搜索框
			"my-SlideNav": slideNav, //滑动导航
		},
		data() { 
			return {
				lodingText: '正在加载...', 
				loding: false,
				InputText: '搜索帖子',
				IndexNavList: [],
			}
		},
		computed: {},
		onLoad() {
			this.GetIndexNav() // 启动时请求数据
		},
		created() {

		},
		methods: {
			// 请求首页滑动导航数据
			GetIndexNav() {
				IndexNav().then(res => {
					this.IndexNavList = res.data.data.list
					this.loding = true
				})
			}
		}
	}
</script>

<style>

</style>
