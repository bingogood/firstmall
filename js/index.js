		
		/*超值特卖手机专场品牌活动切换*/
		$(".sjzx").hover(function(){
			$(".sjzx").css("border-bottom", "5px solid #e5004f")
			$(".cztm").css("border-bottom", "5px solid #333333")
			$(".pphd").css("border-bottom", "5px solid #333333")
		})
		$(".cztm").hover(function(){
			$(".cztm").css("border-bottom", "5px solid #e5004f")
			$(".sjzx").css("border-bottom", "5px solid #333333")
			$(".pphd").css("border-bottom", "5px solid #333333")
		})
		$(".pphd").hover(function(){
			$(".pphd").css("border-bottom", "5px solid #e5004f")
			$(".cztm").css("border-bottom", "5px solid #333333")
			$(".sjzx").css("border-bottom", "5px solid #333333")
		})
		$(".sjzx a").hover(function(){
			$(".zhuo1").css("display","block")
			$(".zhuo2").css("display","none")
			$(".zhuo3").css("display","none")
			$(".sjzx span").css("display","block")
			$(".cztm span").css("display","none")
			$(".pphd span").css("display","none")
		})
		$(".cztm a").hover(function(){
			$(".zhuo2").css("display","block")
			$(".zhuo1").css("display","none")
			$(".zhuo3").css("display","none")
			$(".sjzx span").css("display","none")
			$(".cztm span").css("display","block")
			$(".pphd span").css("display","none")
			
		})
		$(".pphd a").hover(function(){
			$(".zhuo3").css("display","block")
			$(".zhuo1").css("display","none")
			$(".zhuo2").css("display","none")
			$(".sjzx span").css("display","none")
			$(".cztm span").css("display","none")
			$(".pphd span").css("display","block")
		})
		
		/*专柜同款切换*/
		$(".zg-tab .rmpp").hover(function(){
			$(".zg-tab .rmpp").css("border-bottom","3px solid #e70050")
			$(".zg-tab .bztz").css("border-bottom","3px solid #000")
		})
		$(".zg-tab .bztz").hover(function(){
			$(".zg-tab .bztz").css("border-bottom","3px solid #e70050")
			$(".zg-tab .rmpp").css("border-bottom","3px solid #000")
		})
		$(".zg-tab .rmpp").hover(function(){
			$(".zg-tab .rmjiao").css("display","block")
			$(".zg-tab .bzjiao").css("display","none")
		})
		$(".zg-tab .bztz").hover(function(){
			$(".zg-tab .bzjiao").css("display","block")
			$(".zg-tab .rmjiao").css("display","none")
		})
		$(".zg-tab .rmpp").hover(function(){
			$(".navrm").css("display","block")
			$(".navbz").css("display","none")
		})
		$(".zg-tab .bztz").hover(function(){
			$(".navbz").css("display","block")
			$(".navrm").css("display","none")
		})
		
   /*banner轮播*/
  		var timer=setInterval(xuan,2000);
  		var num=0;
  		function xuan(){
  			num++;
  			if(num>=$(".panels .change").length){
  				num=0;
  			};
  			$(".panels .change").fadeOut(2000).eq(num).fadeIn(2000);
  			$(".bn-ol li").css("border-color","").eq(num).css("border-color","#e5004f");
  		}
