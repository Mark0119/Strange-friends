<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
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
