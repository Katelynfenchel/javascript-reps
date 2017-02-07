
//round 1



	var words = ["hello", "what", "is", "up", "dude"]
	var wordLength = []
function lengths(words) {

	for(i=0; i < words.length; i ++){
 	wordLength.push(words[i].length)
 }
return wordLength
}


lengths(words)

//round 2

function transmogrifier(a,b,c){

var x= (a * b);

return(Math.pow(x, c)) 	
}

//round 3

function toonify (accent, sentence){
	
	var daffy = /s/gi;
	var elmer = /r/gi;

	if(accent === "daffy"){
		return sentence.replace(daffy, "th");
	}
	else{
		return sentence.replace(elmer, "w")
	}
	
}