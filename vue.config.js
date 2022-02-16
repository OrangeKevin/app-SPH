module.exports = {
	//关闭esLint
	lintOnSave: false,
	//代理跨域
	devServer: {
		proxy: {
			'/api': {//带/api的请求转发到代理服务器
				target: 'http://39.98.123.211',//数据来自于哪台服务器
				// changeOrigin: true,
				// pathRewrite: {
				// 	'^/api': ''
				// }
			},
		}
	}
}