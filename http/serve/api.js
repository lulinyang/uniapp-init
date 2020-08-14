import Vue from 'vue';
const install = (Vue, vm) => {
	Vue.prototype.$http = vm.$u.api = {
		//微信授权登录
		wxLogin: (params = {}) => vm.$u.post('/wxapi/wxauth/wxLogin', params),
	};
}

export default {
	install
}
