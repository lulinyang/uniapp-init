import config from '@/config/index.js';
import qiniuUploader from './qiniuUploader.js';
import md5Libs from "uview-ui/libs/function/md5";
import Vue from 'vue';
const vue = new Vue();

let domain = config.qiniuURL;

function fileName() {
	let time = new Date().getTime();
	let char_str = [
		'0', '1', '2', '3', '4', '5', '6',
		'7', '8', '9', '-', '+', '.', '*',
		'a', 'b', 'c', 'd', 'e', 'f', 'g',
		'h', 'i', 'j', 'k', 'l', 'm', 'n',
		'o', 'p', 'q', 'r', 's', 't', ',',
		'u', 'v', 'w', 'x', 'y', 'z', '$'
	];
	let arr = vue.$u.randomArray(char_str);
	return md5Libs.md5(arr.join('') + time);
}

export default {
	qiniuUpload: (filePath, token) => {
		let fileExtension = filePath.substring(filePath.lastIndexOf('.') + 1);
		let file_name = fileName() + '.' + fileExtension;
		return new Promise((resolve, reject) => {
			qiniuUploader.upload(
				filePath,
				res => {},
				error => {
					uni.hideLoading();
					vue.$toast('上传失败！')
					reject(err)
				}, 
				{
					region: 'NCN', // （必须填写正确）ECN, SCN, NCN, NA, ASG，分别对应七牛的：华东，华南，华北，北美，新加坡 5 个区域
					domain: domain,    
					key: file_name, 
					uptoken: token
				},
				res => {
					res.path = `${domain}/${file_name}`;
					uni.showLoading({
						title: `正在上传...${res.progress}%`
					});
					if (res.progress === 100) {
						uni.hideLoading();
						res.path = `${domain}/${file_name}`;
						resolve(res);
					}
				}
			);
		});
	}
}
