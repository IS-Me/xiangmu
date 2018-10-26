/*用户点击不同的导航，跳转到不同的页面*/
$(function(){
	$('.KDbody ul').on({
		click:function(){
			console.log($(this).text());
			if($(this).text().indexOf("首页")!=-1){
				// 注意相对的是引入的文件的路径
				$('.content2').load('pages/shouye.html');
				return;
			}
			if($(this).text().indexOf("栏目管理")!=-1){
				$('.content2').load('pages/lanmu.html');
				return;
			}
			if($(this).text().indexOf("资讯管理")!=-1){
				$('.content2').load('pages/zixun.html');
				return;
			}
			if($(this).text().indexOf("用户管理")!=-1){
				$('.content2').load('pages/user.html');
				return;
			}
		}
	},'li');
})