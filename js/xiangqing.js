window.onload = function () {
	
	$('#headed').load('head.html');
	$('#botm').load('bottom.html');
	
	$('.tu_box1').hover(function(){
		
		$('.small').css('display','block');
		$('.big').css('display','block');
	},function(){
		
		$('.small').css('display','none');
		$('.big').css('display','none');
	})
	
	
	
		var box1 = document.querySelector('.tu_box1');
		var small = document.querySelector('.small');
		var big = document.querySelector('.big');
		var img = document.querySelectorAll('.big img');
		var index1 = 0;
		box1.onmousemove= function (ev){
			
			var ev = ev || event;
			
			var x = ev.pageX - box1.offsetLeft - small.offsetWidth/2;
			var y = ev.pageY - box1.offsetTop - small.offsetHeight/2;
			
			var kuan = box1.offsetWidth - small.offsetWidth;
			var gao = box1.offsetHeight - small.offsetHeight;
			
			if(x<0){
				x = 0 ;
			}
			if(x>kuan){
				
				x = kuan ; 
			}
			if(y<0){
				
				y=0;
			}
			if(y>gao){
				
				y=gao;
			}
			
			$('.small').css({
				
				'left': x + 'px' ,
				'top' : y + 'px' ,
			})
			console.log($('.small').offset().top)
			var bilix = x / (box1.offsetWidth - small.offsetWidth);
			var biliy = y / (box1.offsetHeight - small.offsetHeight);
	
			var X = - bilix * (img[index1].offsetWidth-big.offsetWidth);
			var Y = - biliy * (img[index1].offsetHeight-big.offsetHeight);
		
				img[index1].style.left = X + 'px';
				img[index1].style.top = Y + 'px';	
		}
	

	var num = 0 ;
	var l = $('.img_box li').width()+10;
	
	$('.btnR').click(function(){
		
		if(!$('.img_box ul').is(':animated')){
			num++;
			if(num >=  $('.img_box li').length-1){
				
				num = $('.img_box li').length-1;
				$('.btnR').css('backgroundPositionX','9px');
				
			}
			$('.btnL').css('backgroundPositionX','0px');
			$('.img_box ul').animate({'left':-num*l + 'px',});
		}
	})
	$('.btnL').click(function(){
		
		if(!$('.img_box ul').is(':animated')){
			num--;
			if(num <= 0){
				
				num = 0;
				$('.btnL').css('backgroundPositionX','19px')
			}
			$('.btnR').css('backgroundPositionX','-10px');
			$('.img_box ul').animate({'left':-num*l + 'px',});
		}
	})
	
	$('.img_box li').mouseover(function(){
		var index = $(this).index();
		index1 = index ;
		$('.tu_box1 .imgs').css('display','none').eq(index).css('display','block');
		$('.big img').css('display','none').eq(index).css('display','block');
		$('.img_box a').css('borderColor','#e1e1e1').eq(index).css('borderColor','#333');
	})
	
	$('.weixin,.wx').hover(function(){
		
		$('.wx').css('display','block');
		$('.weixin').css({
			'borderColor':'#f0f0f0',
			'borderBottomColor':'#fff',
			
		})
	},function(){
		
		$('.wx').css('display','none');
		$('.weixin').css({
			'borderColor':'#fff',
		})
	})
	
	$('.lianjie,.lj').hover(function(){
		
		$('.lj').css('display','block');
		$('.lianjie').css({
			'borderColor':'#f0f0f0',
			'borderBottomColor':'#fff',
			
		})
	},function(){
		
		$('.lj').css('display','none');
		$('.lianjie').css({
			'borderColor':'#fff',
		})
	})
	
	var n = 1 ;
	$('.shang').click(function(){
		
		n ++ ;
		if(n>=99){
			n = 99 ;
		}
		$('.shuliang>input').val(n);
	})
	$('.xia').click(function(){
		
		n -- ;
		if(n<=1){
			n = 1 ;
		}
		$('.shuliang>input').val(n);
	})
	
	

	var top1 = $('.shanpinjs').offset().top;
	
	$(document).scroll(function(){
		
		var h = $(document).scrollTop();
		console.log(h);
		if(h>=top1+275){
			
			$('.shanpinjs').addClass('fixed');
		}else{
			
			$('.shanpinjs').removeClass('fixed');
		}
	})
	
	
	$('.jieshao').click(function(){
		
		var index = $(this).index();
		
		$('.jieshao').css('background','#999').eq(index).css('background','#b7ab91');
		$('.xuanxiang').css('display','none').eq(index).css('display','block');
		if(index!=0){
			$('#bd').css('height','4800px');	
			$('body,html').animate({
				scrollTop:top1,
			},300)
		}else{
			$('#bd').css('height','15608px');	
		}
	})
	
	
	
	
}
