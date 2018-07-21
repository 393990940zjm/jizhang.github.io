var html=""
for(var i=0;i<31;i++){
	html +='<div class="day"><p>'+(i+1)+'</p><p>支出</p><p>1578.75</p><p>收入</p><p>0</p></div>';
}
$(".date").html(html);
