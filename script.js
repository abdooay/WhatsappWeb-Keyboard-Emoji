(function(){
	var emojisDictionary={
		':)':'😊',
		':D':'😁',
		':))':'😂'
	}

	function findAndReplace(inputText, dictionary){
		var result =inputText;
		//foreach key in dictionary
			// find key in inputText and replace with value

			for(var key in dictionary){
				result = result.replace(key,dictionary[key]);

			}

			return result;
	}
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

	
	document.addEventListener('keyup',function(evt){
		
		var inputTextBox = document.querySelector('.input-emoji div:nth-child(2)');
		var inputText = inputTextBox.innerHTML;
 		var newText = findAndReplace(inputText, emojisDictionary);
 		console.log(inputText);
 		console.log(newText);
 		if(inputTextBox.innerHTML != newText){
 			inputTextBox.innerHTML = newText; 
 			placeCaretAtEnd(inputTextBox);


 		}
});
}())