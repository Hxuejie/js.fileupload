/*文件上传
* @param btnID 提交按钮ID
* @param formID 表单ID
* @param callback(result) 提交回调,返回图片名称
*/
function fileUpload(btnID,formID,callback) {
	btn = document.getElementById(btnID),
	form = document.getElementById(formID);
	btn.addEventListener('click', function() {
		var ifr = document.createElement('iframe');
		ifr.id = 'test-ifr';
		ifr.name = 'test-ifr';
		//隐藏iframe
		ifr.style.display = 'none';
		form.appendChild(ifr);
		//iframe加载事件,获取到数据以前onload会触发一次,获取到数据后再触发一次,需要添加一个判断
		ifr.onload = function () {
			//后台尽量传JSON的字符串,这样可以确保一致性,同时可以调用innerHTML来获取DOM里面的内容
			var _result = this.contentDocument.getElementsByTagName('body')[0].innerHTML;
			//iframe的body标签里面的内容就是从后台传输过来的数据。例如后台传输过来的是图片的url地址
			callback(_result);
		};
		//调用Form表单事件
		form.submit();
	})
};