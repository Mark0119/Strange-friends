<template>
	<view class="wh-100 pt-1" style="background-color: #F5F5F4;">
		<!-- 加载 -->
		<view v-if="loding==true" class="wh-100" style="background: #FFFFFF;">
			<my-loding :lodingText="lodingText1"></my-loding>
		</view>
		<!-- 数据图文混排 -->
		<view class="pt-2 box-ing" v-if="loding==false">
			<block v-for="(item,index) in IndexList" :key="index">
				<view class="mb-2 pl-2 pr-2" style="background: #FFFFFF;">
					<!-- 用户信息 -->
					<view class="flex mb-1 justify-between">
						<!-- 用户信息 -->
						<view class="flex justify-between pt-1 mb-2">
							<view class="mr-2">
								<image style="width: 64rpx;height: 64rpx; border-radius: 50%;" :src="item.user.userpic"></image>
							</view>
							<view class="flex flex-column">
								<text style="font-size: 30rpx; color: #000000;">{{item.user.username}}</text>
								<text style="font-size: 24rpx; color: #708090;">{{item.create_time}}</text>
							</view>
						</view>
						<!-- 关注按钮 -->
						<view class="flex justify-center align-center p-1 box-ing">
							<view class="pl-2 pr-2 box-ing" style="background:#FF4B6B; color: #ffffff; font-size: 28rpx; border-radius: 12rpx;">关注</view>
						</view>
					</view>
					<!-- 发布话题 -->
					<view class="pl-1 pr-1 box-ing mb-2">
						<text class="mt-1 mb-1" style="font-size: 34rpx;">{{item.content}}</text>
					</view>
					<!-- 图片 -->
					<view class="w-100 bg-danger mb-2" style="height: 350rpx; border-radius: 10rpx;">
						<image class="wh-100" :src="item.titlepic"></image>
					</view>
					<!-- 操作 -->
					<view class="flex text-center pb-2">
						<view class="flex-1">
							<i class="iconfont mr-1" style="color: #000000;">&#xe600;</i>
							<text style="font-size: 28rpx;">{{item.ding_count}}</text>
						</view>
						<view class="flex-1">
							<i class="iconfont mr-1" style="color: #000000;">&#xe701;</i>
							<text style="font-size: 28rpx;">{{item.cai_count}}</text>
						</view>
						<view class="flex-1">
							<i class="iconfont mr-1" style="color: #000000;">&#xe719;</i>
							<text style="font-size: 28rpx;">评论</text>
						</view>
						<view class="flex-1">
							<i class="iconfont mr-1" style="color: #000000;">&#xe637;</i>
							<text style="font-size: 28rpx;">分享</text>
						</view>
					</view>
				</view>
			</block>
			<!-- 加载更多 -->
			<view v-if="loding2==true" class="wh-100" style="background: #FFFFFF;">
				<my-loding :lodingText="lodingText2"></my-loding>
			</view>
		</view>
	</view>
</template>

<script>
	// 导入组件
	import loding from '@/component/loding/loding.vue' //加载
	export default {
		data() {
			return {
				loding: true,
				lodingText1: '数据缓冲中...',
				lodingText2: "加载更多..."
			}
		},
		components: {
			"my-loding": loding, //加载
		},
		created() {
			// 延时加载
			if (this.$props.IndexList !== []) {
				this.loding = false
			}
		},
		props: {
			IndexList: {
				type: Array,
				default: []
			},
			loding2:{
				type:Boolean,
				default:false
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
