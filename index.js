function isInteger(value){
	return Number.isInteger(value);
}
function getCount(value){
	var ct = 0 ;
	if(value>=1) ct++;
	while(value/10 >= 1){
		ct++;
		value = value / 10;
	}
	return ct;
}
function performCalculations(value){
	$("img").fadeTo(1000,1);
	getCount(value)==3 ? putImage(parseInt((value/100)%10),parseInt((value/10)%10),value%10) : (getCount(value)==2 ? putImage(0,parseInt((value/10)%10),value%10) : putImage(0,0,value%10));
}
function putImage(third,second,first){
	$(".first").attr("src",first.toString()+".jpg");
	$(".second").attr("src",second.toString()+".jpg");
	$(".three").attr("src",third.toString()+".jpg");
}
function checkVal(){
	if($("textarea").val() != ""){
		$(".result").removeClass("disabled");
		$(".clear").removeClass("disabled");
	}
	else {
		$(".result").addClass("disabled");
		$(".clear").addClass("disabled");
	}
}
function fadeToImg(){
	$("img").fadeTo(0,0.1);
	putImage(0,0,0);
}
