var CHECK = {
		// 0有空格 1 密码太短 2 密码太长  3 强度为弱  4强度为中 5强度为强
	checkPsd:function (psd){
		// 密码中有空格
		if(psd.match(/\s/g))
		{
			return 0;
		}
		if(psd.length <6){
			return 1;
		}
		if(psd.length >16)
			return 2;
		if(psd.match(/\d/g)&&psd.match(/\D/g)&&psd.length >10)
			return 5;
		if(psd.match(/\d/g)&&psd.match(/\D/g))
			return 4;
		return 3;

	},
	// 0 成功  1失败   匹配11位以1开头的数字
	checkPhone:function (phone){
		phone = phone.replace(/\s/g,'');
		if(phone.match(/\D/g)||phone.length!==11||!phone.match(/^1/))
			return 1;
		return 0;
	},
	// 0 成功  1失败   匹配11位以1开头的数字

	checkMail:function (mail){
		mail = mail.replace(/\s/g,'');
		//*?^%$
		if(mail.match(/[*?^%$]/g) || !(/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(mail)){
			return 1;
		}
		return 0;
	}
	};
	console.log(CHECK.checkMail('meng@16.3.com')+"   "+CHECK.checkPhone('19287483799')+"   "+CHECK.checkPsd('fjdska#l884'));