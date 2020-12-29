<script>
	export default {
		onLaunch: function() {
			console.log('启动')
			this.GetEquipmentNavHeight()// 获取设备状态栏高度
			this.GetEquipmentContentHeight()// 获取设备可用高度
		},
		onShow: function() {
			console.log('开始')
		},
		onHide: function() {
			console.log('关闭')
		},
		methods: {
			// 获取设备状态栏高度
			GetEquipmentNavHeight() {
				const Height = uni.getSystemInfoSync().statusBarHeight;
				this.$store.commit('GetEquipmentNavHeight',Height)//将高度保存至vuex
			},
			// 获取设备可用高度
			GetEquipmentContentHeight() {
				const NavHeight = uni.getSystemInfoSync().statusBarHeight;// 获取设备状态栏高度
				const ConntentHeight = uni.getSystemInfoSync().windowHeight;// 获取设备可用高度
				const TabbarHeight = 50;// Tabbar高度
				const Height=ConntentHeight-NavHeight-TabbarHeight//真实可用高度
				this.$store.commit('GetEquipmentContentHeight',Height)//将高度保存至vuex
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* //公共样式 */
	@import url("@/assets/style/style.css");
	/* //公共颜色 */
	@import url("@/assets/color/color.css");
	/* //字体图标 */
	@import url("@/assets/iconfont/iconfont.css");
	/* //导入vant样式 */
	@import "/wxcomponents/vant/common/index.wxss";
</style>
