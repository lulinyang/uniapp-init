 //正式版
let baseUrl = 'https://zhifuapi.soft-in-hard.vip';
//#ifdef MP-WEIXIN
//开发版 体验版
if(__wxConfig.envVersion != 'release') {
	baseUrl = 'https://zhifuapi.soft-in-hard.vip'
}else{
	baseUrl = 'https://zhifuapi.soft-in-hard.vip'
}
//#endif
export default {
	baseUrl: baseUrl,//接口基础路径
	iconUrl: 'https://lulinyang.oss-cn-beijing.aliyuncs.com/teabox',//网路图片（背景图，图标）
	uploadFileUrl: '/wxapi/public/upload',//上传接口
	//上拉加载
	loadText: {
		loadmore: '轻轻上拉',
		loading: '努力加载中',
		nomore: '实在没有了'
	},
	// 主题颜色，更新时请手动更改 @/common/css/uview.theme.scss
	uviewTheme: {
		mainColor: '#12141A',
		contentColor: '#606266',
		lightColor: '#85878A',
		primary: '#02C8A5',
		warning: '#ff9900',
		success: '#19be6b',
		error: '#fa3534',
		info: '#909399',
		theme1: '#e54d42',
		theme2: '#f37b1d',
		theme3: '#fbbd08',
		theme4: '#39b54a',
		theme5: '#1cbbb4',
		theme6: '#6739b6'
	}
}
