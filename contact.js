


(function ($){

//contact-normallyTel
//contact-businessTel

function flagListConst(){return ['contact1Business','contact3All','contact2Normally'];}

function getFlag(list){
	result = list.map(
		function (x){
			r = flagListConst().map(function (y){return x===y ? y : '';});
			return r.reduce(function (p,c){return p + c});
		}).filter(function (x){return x!=='';}
	);
	return result.length === 0 ? '' : (result.sort())[0] ;
}

function setUnshow(flag){
	
	f = function (select){$(select).hide();}
	
	if(flag==='contact1Business'){
		f('.contact-normallyTel');
	}
	else if(flag==='contact2Normally'){
		f('.contact-businessTel');
	}
	else{
	}
}

(function (list){
	setUnshow(getFlag(list))
})(location.search.substring(1).split('&'));

})($);

(function ($){
	$(document).ready(function(){
		$('h3.title').unbind('click');
		
		
		$('h3.title').click(function(){
			var $$ = $(this);
			if($$.hasClass('select')){
				$$.removeClass('select');
				$$.next().slideUp();
			}else{
				$('h3.title.select').next().slideUp();
				$('h3.title.select').removeClass('select');
				$$.addClass('select');
				$$.next().slideDown();
				heightLine_func();
			}
		});
		
	})
})($);
		/*

		/**/







