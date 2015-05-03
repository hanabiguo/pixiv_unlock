!function(){
	var d = document;
	function getByClass(sclass){
			var results = [];
			var eles = d.getElementsByTagName('*');
			for(var i=0;i<eles.length;i++){
				if(eles[i].className==sclass)
					results.push(eles[i]);
			}
			return results;
	}
	function unlock(span){
		var a = d.createElement("a");
		var style = span.getAttribute('style');
		var id = style.substring(86,94);
		a.href='/member_illust.php?mode=medium&amp;illust_id='+id;
		a.setAttribute('target','_blank');
		a.setAttribute('data-id',id);
		a.className='_history-item show-detail list-item';
		a.setAttribute('style',style);
		return a;
	}
	var h = getByClass('_history-items')[0];
	var spans = getByClass('_history-item trial');
	for(var i=0;i<spans.length;i++){
		h.replaceChild(unlock(spans[i]),spans[i]);
	}
	
}()