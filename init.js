$(document).ready(function() {
	initCells();
	randomNum();
	numFormat();
});

function initCells(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			$("#cell-" + i + "-" + j).css({
				"left":getPos(j)+"px",
				"top":getPos(i)+"px"
			});
			
		}
	}
}

function getPos(num){
	return 20 + 120 * num;
}

var data = [0, 0, 0, 0];
var checkBoard = [data, data, data ,data];

function numFormat(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			$("#container").append('<div class="number" id="number-'+i+'-'+j+'"></div>')
			
			if(0 == checkBoard[i][j]){
				$("#number-" + i + "-" + j).css({
					"width":"0px",
					"height":"0px",
					"left":getPos(j)+"px",
					"top":getPos(i)+"px",
					"position":"relative"
				})
			}else{
				$("#number-" + i + "-" + j).css({
					"width":"100px",
					"height": "100px",
					"left":getPos(j)+"px",
					"top":getPos(i)+"px",
					"backgroundColor":getBackgroundColor(checkBoard[i][j]),
					"color":getColor(checkBoard[i][j]),
					"position":"relative"
				})
				$("#number-" + i + "-" + j).text(checkBoard[i][j]);	
			}
		}
	}
}

function getBackgroundColor(number){
	switch(number){
		case 2:
			return "#eee4da";
			break;
		case 4:
			return "#ede0c8";
			break;
		case 8:
			return "#f2b179";
			break;
		case 16:
			return "#f59563";
			break;
		case 32:
			return "#f67c5f";
			break;
		case 64:
			return "#f65e3b";
			break;
		case 128:
			return "#edcf72";
			break;
		case 256:
			return "#edcc61";
			break;
		case 512:
			return "#9c0";
			break;
		case 1024:
			return "#33b5e5";
			break;
		case 2048:
			return "#09c";
			break;
		case 4096:
			return "#a6c";
			break;
		case 8192:
			return "#93c";
			break;
	}
}

function getColor(number){
	if (number <= 4) {
		return "#776e65";
	}
	return "white";
}

function randomNum(){
	var randomX = Math.floor(Math.random() * 4);
	var randomY = Math.floor(Math.random() * 4);

	var randomValue = Math.random() > 0.5 ? 2 : 4;

	while(true){
		if(0 == checkBoard[randomX][randomY]){
			break;
		}else{
			var randomX = Math.floor(Math.random() * 4);
			var randomY = Math.floor(Math.random() * 4);
		}
	}
	checkBoard[randomX][randomY] = randomValue;
	randomNumAnimate(randomX,randomY,randomValue);
}

function randomNumAnimate(randomX,randomY,randomValue){
	var randomnum = $('#number-'+ randomX +'-'+ randomY);
	randomnum.css({
		backgroundColor:getBackgroundColor(randomValue),
		color:getColor(randomValue),
	})
	.text(randomValue)
	.animate({
		width:'100px',
		height:'100px',
		top:getPos(randomX),
		left:getPos(randomY)
	},50);
}