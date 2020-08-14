let baseUrl = 'https://api.zbosoft.cn';
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
