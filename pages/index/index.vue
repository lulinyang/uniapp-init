<template>
	<view>
		<custom-button type="theme6">主要按钮</custom-button>
		<custom-button :type="theme" @click="changeTheme">主要按钮</custom-button>
		{{themeColor}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				theme: this.themeName(),
				themeColor: this.themeColorValue()
			}
		},
		onLoad() {
			console.log(this.$u.config.v);
		},
		methods: {
			changeTheme() {
				uni.setStorageSync('themeName', 'theme3');
				this.themeColor = this.themeColorValue();
				this.theme = this.themeName();
			}
		}
	}
</script>

<style>
	
</style>
