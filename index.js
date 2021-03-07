function passThevariable(str){
	for(var i=0;i<str.length;i++){
		if(str[i]=="x") str = replaceAt(i,str,"*");
		if(str[i]=="÷") str = replaceAt(i,str,"/");
	}
	return str;
}
function replaceAt(index,str,ch){
	var split = str.split("");
	split[index] = ch;
	return split.join("");
}