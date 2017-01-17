var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var image = document.createElement("img");


$("#selectedImage").change(function (e) {

	var URL = window.URL;
	var url = URL.createObjectURL(e.target.files[0]);
	//var img =new Image();
	image.src = url;
	image.onload = function () {
		var imgSize = calculateAspectRatioFit(image.width, image.height, canvas.clientWidth, canvas.clientHeight);			
		img_w_zoom=image.width;
		img_h_zoom=image.height;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0, imgSize.width, imgSize.height);
	}
});


function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	var rtnWidth = srcWidth * ratio;
	var rtnHeight = srcHeight * ratio;
	return {
		width: rtnWidth,
		height: rtnHeight
	};
}

var img_string_1;
function tostring() {	
	var dataURL = canvas.toDataURL();
	//console.log(dataURL);
	//alert("log string");
	//$('#show-string').html(dataURL);
	img_string_1=dataURL;
}
var angleInDegrees = 0;
$("#clockwise").click(function () {
	angleInDegrees += 90;
	drawRotated(angleInDegrees);
});

$("#counterclockwise").click(function () {
	angleInDegrees -= 90;
	drawRotated(angleInDegrees);
});

function drawRotated(degrees) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.rotate(degrees * Math.PI / 180);
	ctx.drawImage(image, -image.width / 2, -image.width / 2);
	ctx.restore();
	resert();
}
var n_zumm = 0;
$("#zoomplus").click(function () {
	n_zumm++;
	zoom(n_zumm);
});
$("#zoompsub").click(function () {
	n_zumm--;
	zoom(n_zumm);
});
function resert() {
	n_zumm = 0;
}
var img_w_zoom=100;
var img_h_zoom=100;
var n_changezoom = 50;
function zoom(n_zumm) {
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.rotate(angleInDegrees * Math.PI / 180);
	img_w_zoom = image.width + n_zumm * n_changezoom;
	img_h_zoom = image.height * img_w_zoom / image.width;
	numb_offset_x=-image.width / 2;
	numb_offset_y=-image.width / 2;
	ctx.drawImage(image,numb_offset_x, numb_offset_y, img_w_zoom, img_h_zoom);
	ctx.restore();
}

var numb_x=0;
var numb_y=0;
var numb_offset_x=0;
var numb_offset_y=0;
var numb_change_img=4;
function change_img(action) {
	switch (action) {
		case 'left':
			numb_x=parseInt(numb_x-numb_change_img);
			break;
		case 'right':
			numb_x =parseInt(numb_x+numb_change_img);
			break;
		case 'up':
			numb_y =parseInt(numb_y-numb_change_img);
			break;
		case 'down':
			numb_y=parseInt(numb_y+numb_change_img);
			break;
		default:
			break;
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.save();
   // ctx.translate(canvas.width / 2, canvas.height / 2);
   // ctx.rotate(angleInDegrees * Math.PI / 180);
	//var new_w = image.width + n_zumm * n_changezoom;
	//var new_h = image.height * new_w / image.width;
	numb_offset_x=numb_x;
	numb_offset_y=numb_y;
	//console.log("a: "+numb_offset_x+" b: "+numb_offset_y+" c: "+img_w_zoom+" d: "+img_h_zoom);
	ctx.drawImage(image, numb_offset_x, numb_offset_y,img_w_zoom,img_h_zoom);
	ctx.restore();


}