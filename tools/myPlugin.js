import Vue from 'vue';
import config from '@/config/index.js';
const vue = new Vue;
import uviewTheme from '@/static/css/uview.theme.scss';
export default {
	install: function(Vue, vm) {
		/**
		 * 轻提示
		 * @param {string} msg
		 */
		Vue.prototype.$toast = function(msg) {
			uni.showToast({
				title: msg,
				icon: "none"
			})
		}
		/**
		 * 获取主题名称
		 */
		Vue.prototype.themeName = () => {
			return uni.getStorageSync('themeName') ? uni.getStorageSync('themeName') : 'primary';
		}
		/**
		 * 获取主题颜色
		 */
		Vue.prototype.themeColorValue = (type = uni.getStorageSync('themeName') ? uni.getStorageSync('themeName') : 'primary') => {
			switch (type) {
				case 'primary':
					return uviewTheme.primary;
					break;
				case 'error':
					return uviewTheme.error;
					break;
				case 'warning':
					return uviewTheme.warning;
					break;
				case 'info':
					return uviewTheme.info;
					break;
				case 'success':
					return uviewTheme.success;
					break;
				case 'theme1':
					return uviewTheme.theme1;
					break;
				case 'theme2':
					return uviewTheme.theme2;
					break;
				case 'theme3':
					return uviewTheme.theme3;
					break;
				case 'theme4':
					return uviewTheme.theme4;
					break;
				case 'theme5':
					return uviewTheme.theme5;
					break;
				case 'theme6':
					return uviewTheme.theme6;
					break;
				default:
					return uviewTheme.primary;
			}
		}
		/**
		 * 判断项目运行环境
		 */
		Vue.prototype.$platForm = function() {
			let platForm = undefined;
			// #ifdef APP-PLUS || APP-PLUS-NVUE
			platForm = 'APP'
			// #endif
			// #ifdef MP-WEIXIN 
			platForm = 'MP-WEIXIN'
			// #endif 
			return platForm;
		}
		/**
		 * 格式化时间
		 * Y${symbol}m${symbol}d H:i:s
		 * Y${symbol}m${symbol}d H:i
		 * Y${symbol}m${symbol}d
		 * Y${symbol}m
		 */
		Vue.prototype.formatTime = (timestamp, format) => {
			const formatNumber = n => {
				n = n.toString()
				return n[1] ? n : '0' + n
			}
			const date = new Date(timestamp * 1000);
			const year = date.getFullYear()
			const month = date.getMonth() + 1
			const day = date.getDate()
			const hour = date.getHours()
			const minute = date.getMinutes()
			const second = date.getSeconds()
			if (!format) {
				return year + '年' + month + '月' + day + '日';
			}
			let symbol = format.substr(1, 1);
			if (format === `Y${symbol}m${symbol}d H:i:s`) {
				return [year, month, day].map(formatNumber).join(symbol) + ' ' + [hour, minute, second].map(formatNumber).join(
					':');
			} else if (format === `Y${symbol}m${symbol}d H:i`) {
				return [year, month, day].map(formatNumber).join(symbol) + ' ' + [hour, minute].map(formatNumber).join(':');
			} else if (format === `Y${symbol}m${symbol}d`) {
				return [year, month, day].map(formatNumber).join(symbol);
			} else if (format === `Y${symbol}m`) {
				return [year, month].map(formatNumber).join(symbol);
			} else {
				return year + '年' + month + '月' + day + '日';
			}
		}

		/**
		 * 计算时间为刚刚、几分钟前、几小时前、几天前
		 */
		Vue.prototype.timeago = dateTimeStamp => {
			let result = "";
			var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
			var hour = minute * 60;
			var day = hour * 24;
			var week = day * 7;
			var halfamonth = day * 15;
			var month = day * 30;
			var now = new Date().getTime(); //获取当前时间毫秒
			var diffValue = now - dateTimeStamp; //时间差
			if (diffValue < 0) {
				return false;
			}
			var minC = diffValue / minute; //计算时间差的分，时，天，周，月
			var hourC = diffValue / hour;
			var dayC = diffValue / day;
			var weekC = diffValue / week;
			var monthC = diffValue / month;
			if (monthC >= 1 && monthC <= 3) {
				result = " " + parseInt(monthC) + "月前"
			} else if (weekC >= 1 && weekC <= 3) {
				result = " " + parseInt(weekC) + "周前"
			} else if (dayC >= 1 && dayC <= 6) {
				result = " " + parseInt(dayC) + "天前"
			} else if (hourC >= 1 && hourC <= 23) {
				result = " " + parseInt(hourC) + "小时前"
			} else if (minC >= 1 && minC <= 59) {
				result = " " + parseInt(minC) + "分钟前"
			} else if (diffValue >= 0 && diffValue <= minute) {
				result = "刚刚"
			} else {
				var datetime = new Date();
				datetime.setTime(dateTimeStamp);
				var Nyear = datetime.getFullYear();
				var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
				var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
				var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
				var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
				var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
				result = Nyear + "-" + Nmonth + "-" + Ndate
			}
			return result;
		}
		/**
		 * 阿拉伯数字转中文字符
		 */
		Vue.prototype.numberToChinese = (num) => {
			var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
			var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
			var chnUnitChar = ["", "十", "百", "千"];

			function SectionToChinese(section) {
				var strIns = '',
					chnStr = '';
				var unitPos = 0;
				var zero = true;
				while (section > 0) {
					var v = section % 10;
					if (v === 0) {
						if (!zero) {
							zero = true;
							chnStr = chnNumChar[v] + chnStr;
						}
					} else {
						zero = false;
						strIns = chnNumChar[v];
						strIns += chnUnitChar[unitPos];
						chnStr = strIns + chnStr;
					}
					unitPos++;
					section = Math.floor(section / 10);
				}
				return chnStr;
			}
			var unitPos = 0;
			var strIns = '',
				chnStr = '';
			var needZero = false;

			if (num === 0) {
				return chnNumChar[0];
			}

			while (num > 0) {
				var section = num % 10000;
				if (needZero) {
					chnStr = chnNumChar[0] + chnStr;
				}
				strIns = SectionToChinese(section);
				strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
				chnStr = strIns + chnStr;
				needZero = (section < 1000) && (section > 0);
				num = Math.floor(num / 10000);
				unitPos++;
			}

			return chnStr;
		}
		/**
		 * 拆分数组
		 */
		Vue.prototype.groupArray = (array, subGroupLength) => {
			let index = 0;
			let newArray = [];
			while (index < array.length) {
				newArray.push(array.slice(index, index += subGroupLength));
			}
			return newArray;
		}

		/**
		 * 秒换时分秒
		 */
		Vue.prototype.formatSeconds = (value) => {
			let result = parseInt(value)
			let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
			let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
			let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));

			let res = '';
			res += `${h}:`;
			res += `${m}:`;
			res += `${s}`;
			return res;
		}

		/**
		 * 秒换分秒
		 */
		Vue.prototype.formatSecondsM = (value) => {
			let result = parseInt(value)
			let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
			let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
			let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));

			let res = '';
			res += `${m}:`;
			res += `${s}`;
			return res;
		}
		/**
		 * 检测是否是网络链接
		 */
		Vue.prototype.checkHttpLink = (value) => {
			if (/http/g.test(value)) {
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 切分小数
		 */
		Vue.prototype.groupNumMonery = (num) => {
			let monery = (num * 1).toFixed(2);
			return monery.split('.');
		}

		/**
		 * 获取两日期之间日期列表函数
		 * @begin 开始时间
		 * @end 结束时间
		 */
		Vue.prototype.getAllDate = (begin, end) => {
			if (!begin || !end) {
				return false;
			}
			// 在时间Date的原型中定义一个format方法
			Date.prototype.format = function() {
				var s = ""; // 定义一个字符串，目的，要时间格式按照我们的要求拼接
				var month = this.getMonth() + 1;
				var day = this.getDate();
				s += this.getFullYear() + "-";
				s += month + "-";
				s += day;
				return s;
			}
			var ab = begin.split('-'); // 把日期参数分割，注意，如果以'/'连接，则分割'/'
			var ae = end.split('-');
			var db = new Date();
			db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]); // 返回符合UTC的时间格式
			var de = new Date();
			de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
			var unixDb = db.getTime();
			var unixDe = de.getTime();
			var arr = [];
			for (var k = unixDb; k <= unixDe;) {
				arr.push(new Date(parseInt(k)).format());
				k = k + 24 * 60 * 60 * 1000;
			}
			return arr;
		}

	}
}
