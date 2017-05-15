//@charset Shift_jis



(function ($,nowDate){
	
	function getTimeListConst_toiletroom(){
		// トイレ
		return [[9,11,13,15,17,18],
			[2,3,3,1,1],
			[2,3,3,2,2],
			[2,2,3,2,2],
			[1,2,3,2,2],
			[1,3,3,2,2],
			[2,3,3,2,0],
			[2,3,3,2,0]]
		}


		function getTimeListConst_bathroom(){
		// 浴室
		return [[9,11,13,15,17,18],
			[1,3,3,3,3],
			[1,3,3,2,3],
			[1,3,3,2,3],
			[1,3,2,2,3],
			[1,3,3,2,3],
			[2,3,3,3,0],
			[2,3,3,3,0]]
		}


		function getTimeListConst_kitchen(){
		// キッチン
		return [[9,11,13,15,17,18],
			[1,2,2,2,1],
			[1,2,3,2,1],
			[1,2,2,2,1],
			[1,2,2,2,1],
			[1,2,2,2,1],
			[1,3,3,1,0],
			[2,3,3,2,0]]
		}


		function getTimeListConst_powerroom(){
		//その他（洗面）
		return [[9,11,13,15,17,18],
			[1,3,3,2,2],
			[2,3,3,3,3],
			[2,3,2,2,2],
			[1,2,3,2,2],
			[1,3,3,2,2],
			[2,3,3,2,0],
			[2,3,3,2,0]]
		}


		function getTimeListConst_tile(){
		// タイル
		return [[9,11,13,15,17,18],
			[1,2,1,2,2],
			[1,2,2,3,1],
			[1,2,1,2,1],
			[1,2,1,2,2],
			[1,2,2,2,2],
			[1,2,2,1,0],
			[1,3,3,1,0]]
		}


		function getTimeListConst_living(){
		//リビング
		return [[9,11,13,15,17,18],
			[1,1,2,1,1],
			[1,1,2,2,1],
			[1,1,1,1,1],
			[1,1,2,1,1],
			[1,1,2,1,1],
			[1,2,3,3,0],
			[1,2,3,3,0]]
		}


		function getTimeListConst_window_shutter(){
		//サッシ・ドア
		return [[9,11,13,15,17,18],
			[1,1,2,2,1],
			[1,1,2,2,2],
			[1,1,2,2,1],
			[1,2,2,2,2],
			[1,1,2,2,1],
			[1,2,3,3,0],
			[1,2,3,2,0]]
		}


		function getTimeListConst_exterior(){
		// エクステリア
		return [[9,11,13,15,17,18],
			[2,3,3,3,3],
			[2,3,3,3,3],
			[1,2,2,1,2],
			[2,3,3,2,2],
			[2,3,3,3,3],
			[1,3,2,2,0],
			[1,2,2,1,0]]
		}
	function getTimeListConst_sentaku(){
		// エクステリア
		return getTimeListConst_powerroom();
		}
	
	
	/*/////////////////////////////////////////////////////////////////////////////////////////////////*/
	function getFlags(){
		// 0：営業時間外、1：混雑していない、2：少し混雑している、3：混雑している
		return ['<td class="empty"></td>','<td class="flag1"> </td>','<td class="flag2"> </td>','<td class="flag3"> </td>'];
	}
	
	function getAttentionCommentList(){
		// 0：営業時間外、1：混雑していない、2：少し混雑している、3：混雑している
		plus = '<br>申し訳ございませんが現在、通話にお時間を頂く場合がございます。';
		return [
			'<span class="konzatsuhyo_attention_b">営業時間外</span>です<br>(平日9:00～18:00、土日祝9:00～17:00)',
			'<span class="konzatsuhyo_attention_b1"></span>',
			'<span class="konzatsuhyo_attention_b">現在、少しつながりにくい時間帯です</span>'+plus,
			'<span class="konzatsuhyo_attention_b">現在、つながりにくい時間帯です</span>'+plus
		];
	}
	
	function getSummary(){
		return '<div class="lxl-table"><table class="table-01 konzatsuhyo_summary">'+
			'<tr>'+getFlags()[1]+'<td>つながりやすい時間帯</td></tr>'+
			'<tr>'+getFlags()[2]+'<td>少し、つながりにくい時間帯</td></tr>'+
			'<tr>'+getFlags()[3]+'<td>つながりにくい時間帯</td></tr>'+
			'<tr>'+getFlags()[0]+'<td>営業時間外</td></tr>'+
			'</table></div>';
	}
		
	function getTableHeader(){
		return '<tr><th class="top"></th><th class="top">月</th><th class="top">火</th><th class="top">水</th><th class="top">木</th><th class="top">金</th><th class="top">土</th><th class="top">日祝</th></tr>';
	}
	
	function getComment(){
		return '<p>混雑表はあくまでも目安です。お問い合わせされる際の参考にご利用ください。</p>';
	}
	
	
	/*/////////////////////////////////////////////////////////////////////////////////////////////////*/
		
	// 第一列の文章の一覧を返す
	function getHoursComment(list){
		return list.map(
			function (x,n){
				if(n!==list.length-1){
					return x+'時～'+list[n+1]+'時';
				}
				else{
					return x
				}
			}
		);
	}
		
	// 一週間分の混み合い状況のテーブルを返す
	function getCalendar1(lists,idStr){
		
		result = (function (ls,listTitle){
			r = '';
			for(var i=0;i<ls[1].length;i++){
				r=r+'<tr>'+ls.map(function (x,n){return (n===0) ? '<td>'+listTitle[i]+'</td>' : getFlags()[x[i]]}).reduce(function (a,b){return a+b},'')+'</tr>';
			}
			return r;
		})(lists,getHoursComment(lists[0]));
			
		return '<div class="lxl-table"><table id="'+idStr+'" class="table-01 konzatsuCalendar">'+getTableHeader()+result+'</table></div>';
	}
	
	// 引数の日付が祝日であればture、でなければfalseを返す
	function getHolidayFlag(nowDateP){
		//未実装
		return false;
	}
	
	// 混み合い状況からコメントを選択しそれを返す
	function message(date,getListF){
		// 時間の確認
		time = (function (line,x){
			result = [false,0];
			for(var i=0;i<line.length-1;i++){
				if(line[i]<=x && x<line[i+1]){
					result = [true,i];
					break;
				}
			}
			return result;
		})(getListF()[0],date.getHours());
		
		//祝日判定
		return (getAttentionCommentList()[time[0] ? getListF()[ getHolidayFlag(date) ? 7 : date.getDay() ][time[1]] : 0]);
	}
	
	// 混み合いカレンダーを実際に表示する部分
	function main(idStr,getListF){
		
		console.log('main関数実施：id='+idStr+',実施時間='+nowDate);
		
		function getAttentionId(){return idStr+'_'+"konzatsuhyo_summary";}
		function getCalendarId(){return idStr+'_'+"Calendar";}
		function getAttentionTag(content,title){
			if(content === undefined) content = ""; // IE対策（デフォルト引数の代替）
			if(title === undefined) title = ""; // IE対策（デフォルト引数の代替）
			return '<p id="'+getAttentionId()+'" title="'+title+'">'+content+'</p>';
		}
		
		//一定時間に実施する関数
		function intervalF(){
			console.log('intervalF関数の実施(id:'+idStr+')->',new Date());
			$('#'+getAttentionId()).html( message(new Date(),getListF) );
			//document.getElementById(getAttentionId()).innerHTML = message(new Date(),getListF);
		}
		
		//混み合いカレンダーの表示
		$('#'+idStr).html( getAttentionTag() + getCalendar1(getListF(),getCalendarId()) + getSummary() );
		//document.getElementById(idStr).innerHTML = getAttentionTag() + getCalendar1(getListF(),getCalendarId()) + getSummary();
		// $('#'+id).html(message(nowDate)+'<br>'+getCalendar1(getListF())+getAttention());
		
		//ページ表示直後の混み合い状況のコメントを表示
		intervalF();
		
		// リアルタイム表記（60.000秒のサイクルで込み合い状況のコメントを更新）
		setInterval(intervalF,60000);
	}
	
	main('js-konzatsuhyo-toiletroom',getTimeListConst_toiletroom);
	main('js-konzatsuhyo-bathroom',getTimeListConst_bathroom);
	main('js-konzatsuhyo-kitchen',getTimeListConst_kitchen);
	main('js-konzatsuhyo-powerroom',getTimeListConst_powerroom);
	main('js-konzatsuhyo-tile',getTimeListConst_tile);
	main('js-konzatsuhyo-living',getTimeListConst_living);
	main('js-konzatsuhyo-window_shutter',getTimeListConst_window_shutter);
	main('js-konzatsuhyo-exterior',getTimeListConst_exterior);
	main('js-konzatsuhyo-sentaku',getTimeListConst_sentaku);
	
	
	
})($,new Date());


