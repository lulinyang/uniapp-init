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
	},
	//tabbar
	list: [{
			iconPath: "/static/images/home.png",
			selectedIconPath: "/static/images/home_full.png",
			text: '首页',
			customIcon: false,
		},
		{
			iconPath: "/static/images/elegant-demeanour.png",
			selectedIconPath: "/static/images/elegant-demeanour_full.png",
			text: '风采',
			customIcon: false,
			
		},
		{
			iconPath: "/static/images/school.png",
			selectedIconPath: "/static/images/school_full.png",
			text: '学校',
			customIcon: false,
		},
		{
			iconPath: "/static/images/my.png",
			selectedIconPath: "/static/images/my_full.png",
			text: '我的',
			count: 0,
			isDot: true,
			customIcon: false,
		},
	]
}
