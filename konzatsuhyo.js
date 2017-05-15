//@charset Shift_jis



(function ($,nowDate){
	
	function getTimeListConst_toiletroom(){
		// �g�C��
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
		// ����
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
		// �L�b�`��
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
		//���̑��i���ʁj
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
		// �^�C��
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
		//���r���O
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
		//�T�b�V�E�h�A
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
		// �G�N�X�e���A
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
		// �G�N�X�e���A
		return getTimeListConst_powerroom();
		}
	
	
	/*/////////////////////////////////////////////////////////////////////////////////////////////////*/
	function getFlags(){
		// 0�F�c�Ǝ��ԊO�A1�F���G���Ă��Ȃ��A2�F�������G���Ă���A3�F���G���Ă���
		return ['<td class="empty"></td>','<td class="flag1"> </td>','<td class="flag2"> </td>','<td class="flag3"> </td>'];
	}
	
	function getAttentionCommentList(){
		// 0�F�c�Ǝ��ԊO�A1�F���G���Ă��Ȃ��A2�F�������G���Ă���A3�F���G���Ă���
		plus = '<br>�\���󂲂����܂��񂪌��݁A�ʘb�ɂ����Ԃ𒸂��ꍇ���������܂��B';
		return [
			'<span class="konzatsuhyo_attention_b">�c�Ǝ��ԊO</span>�ł�<br>(����9:00�`18:00�A�y���j9:00�`17:00)',
			'<span class="konzatsuhyo_attention_b1"></span>',
			'<span class="konzatsuhyo_attention_b">���݁A�����Ȃ���ɂ������ԑтł�</span>'+plus,
			'<span class="konzatsuhyo_attention_b">���݁A�Ȃ���ɂ������ԑтł�</span>'+plus
		];
	}
	
	function getSummary(){
		return '<div class="lxl-table"><table class="table-01 konzatsuhyo_summary">'+
			'<tr>'+getFlags()[1]+'<td>�Ȃ���₷�����ԑ�</td></tr>'+
			'<tr>'+getFlags()[2]+'<td>�����A�Ȃ���ɂ������ԑ�</td></tr>'+
			'<tr>'+getFlags()[3]+'<td>�Ȃ���ɂ������ԑ�</td></tr>'+
			'<tr>'+getFlags()[0]+'<td>�c�Ǝ��ԊO</td></tr>'+
			'</table></div>';
	}
		
	function getTableHeader(){
		return '<tr><th class="top"></th><th class="top">��</th><th class="top">��</th><th class="top">��</th><th class="top">��</th><th class="top">��</th><th class="top">�y</th><th class="top">���j</th></tr>';
	}
	
	function getComment(){
		return '<p>���G�\�͂����܂ł��ڈ��ł��B���₢���킹�����ۂ̎Q�l�ɂ����p���������B</p>';
	}
	
	
	/*/////////////////////////////////////////////////////////////////////////////////////////////////*/
		
	// ����̕��͂̈ꗗ��Ԃ�
	function getHoursComment(list){
		return list.map(
			function (x,n){
				if(n!==list.length-1){
					return x+'���`'+list[n+1]+'��';
				}
				else{
					return x
				}
			}
		);
	}
		
	// ��T�ԕ��̍��ݍ����󋵂̃e�[�u����Ԃ�
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
	
	// �����̓��t���j���ł����ture�A�łȂ����false��Ԃ�
	function getHolidayFlag(nowDateP){
		//������
		return false;
	}
	
	// ���ݍ����󋵂���R�����g��I���������Ԃ�
	function message(date,getListF){
		// ���Ԃ̊m�F
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
		
		//�j������
		return (getAttentionCommentList()[time[0] ? getListF()[ getHolidayFlag(date) ? 7 : date.getDay() ][time[1]] : 0]);
	}
	
	// ���ݍ����J�����_�[�����ۂɕ\�����镔��
	function main(idStr,getListF){
		
		console.log('main�֐����{�Fid='+idStr+',���{����='+nowDate);
		
		function getAttentionId(){return idStr+'_'+"konzatsuhyo_summary";}
		function getCalendarId(){return idStr+'_'+"Calendar";}
		function getAttentionTag(content,title){
			if(content === undefined) content = ""; // IE�΍�i�f�t�H���g�����̑�ցj
			if(title === undefined) title = ""; // IE�΍�i�f�t�H���g�����̑�ցj
			return '<p id="'+getAttentionId()+'" title="'+title+'">'+content+'</p>';
		}
		
		//��莞�ԂɎ��{����֐�
		function intervalF(){
			console.log('intervalF�֐��̎��{(id:'+idStr+')->',new Date());
			$('#'+getAttentionId()).html( message(new Date(),getListF) );
			//document.getElementById(getAttentionId()).innerHTML = message(new Date(),getListF);
		}
		
		//���ݍ����J�����_�[�̕\��
		$('#'+idStr).html( getAttentionTag() + getCalendar1(getListF(),getCalendarId()) + getSummary() );
		//document.getElementById(idStr).innerHTML = getAttentionTag() + getCalendar1(getListF(),getCalendarId()) + getSummary();
		// $('#'+id).html(message(nowDate)+'<br>'+getCalendar1(getListF())+getAttention());
		
		//�y�[�W�\������̍��ݍ����󋵂̃R�����g��\��
		intervalF();
		
		// ���A���^�C���\�L�i60.000�b�̃T�C�N���ō��ݍ����󋵂̃R�����g���X�V�j
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


