import config from '@/config/index.js';
import Vue from 'vue';
const vue = new Vue;
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: config.baseUrl,
		dataType: 'json',
		originalData: true,
		header: {
			'content-type': 'application/json;charset=UTF-8',
			'tenant': config.tenant
		},
	});

	// 请求拦截部分，如配置，每次请求前都会执行，见上方说明
	Vue.prototype.$u.http.interceptor.request = (configData) => {
		if (uni.getStorageSync('token')) {
			configData.header.authorization = 'Bearer ' + uni.getStorageSync('token');
		}
		return configData;
	}

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.statusCode * 1 === 200) {
			if (res.data.code * 1 === 0) {
				return res.data;
			} else {
				vue.$toast(res.data.msg || '喝口水吧，让数据飞一会，请稍后再试');
				return false;
			}
		} else {
			switch (res.statusCode * 1) {
				case 500:
					vue.$toast('喝口水吧，让数据飞一会，请稍后再试');
					break;
				case 401:
					vue.$toast('没有权限');
					break;
				case 404:
					vue.$toast('找不到接口');
					break;
				case 413:
					vue.$toast('上传失败');
					break;
				default:
					vue.$toast('喝口水吧，让数据飞一会，请稍后再试');
					break;
			}
			return false;
		}

	}
}

export default {
	install
}
