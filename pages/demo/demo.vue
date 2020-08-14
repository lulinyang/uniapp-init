<template>
	<view>
		<view class="waterfall">
			<view class="item-box" v-for="(item, index) in list" :key="index">
				<u-image width="100%" :src="item.img" mode="widthFix"></u-image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2813%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2812%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%281%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2810%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2817%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2818%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%289%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%281%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%284%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2814%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2815%29.jpg'
					},
					{
						img: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox/videoimage/800x450a80a121%20%2817%29.jpg'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	@import url("index");
</style>
