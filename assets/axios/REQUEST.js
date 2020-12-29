// 导入前缀
import {
	API
} from './API.js'
// 定义返回的错误状态码
const statusList = {
	1: '抱歉，出现了一个错误',
	200: "请求成功",
	201: "创建成功",
	202: "更新成功",
	204: "删除成功",
	301: "永久重定向",
	400: "请求包含不支持的参数",
	401: "未授权",
	403: "被禁止访问",
	404: "请求的资源不存在",
	413: "上传的File体积太大",
	500: "内部错误",
	1000: "输入参数错误",
	1001: "输入的json格式不正确",
	1002: "找不到资源",
	1003: "未知错误",
	1004: "禁止访问",
	1005: "不正确的开发者key",
	1006: "服务器内部错误",
	2000: "你已经点过赞了",
	2001: "你还没点过赞",
	3000: "该期内容不存在"
}
// Encapsulate common requests
// 封装公共请求
class REQUEST {
	// promise封装
	request_promise(parameter) {
		return new Promise((resolve, reject) => {
			this._request(parameter, resolve, reject)
		})
	}
	// 请求封装
	_request(parameter, resolve, reject) {
		return uni.request({
			url: `${API.api_url}${parameter.url}`,
			mothod: parameter.mothod,
			data: parameter.data,
			success: (data) => {
				if (data.statusCode == 200) {
					resolve(data)
				} else {
					this.error_message(data.statusCode)
				}
			},
			fail: (error) => {
				reject(error)
			}
		})
	}
	// 返回参数
	error_message(status) {
		if (status in statusList) {
			wx.showToast({
				title: statusList[status],
				icon: "none",
				duration: 2000
			})
		} else {
			wx.showToast({
				title: statusList[1],
				icon: "none",
				duration: 2000
			})
		}
	}
}
// 导出请求
export {
	REQUEST
}
