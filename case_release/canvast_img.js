//jQuery( document ).ready(function(){

_create_canvast_first();
var _list_id_canvas; //list id canvast img for bg
var _obj_list_canvas;

function _create_canvast_first(){
	var list_shap=[];
	_obj_list_canvas={};
	//more _sub: x,y, rong, cao
	var _sub=[];
	//50, 39, 203, 197
	_sub.push(50);
	_sub.push(39);
	_sub.push(203);
	_sub.push(197);
	list_shap.push(_sub);
	_sub=[];
	//50, 265, 205, 201
	_sub.push(50);
	_sub.push(265);
	_sub.push(205);
	_sub.push(201);
	list_shap.push(_sub);
	//console.log(list_shap[1][1]);

	var body = document.getElementsByClassName("c-right")[0];
	_list_id_canvas=[];
	for(var i=0;i<list_shap.length;i++){
		var id = makeid();
		_list_id_canvas.push(id);
		//_list_id_canvas.push(id);
		var tem_canvas_1 = document.createElement('canvas');
		tem_canvas_1.id = "canvasimg_"+id;
		tem_canvas_1.width = list_shap[i][2],
		tem_canvas_1.height = list_shap[i][3];
		tem_canvas_1.style.zIndex = 4;
		//canvas_1.style.position = "absolute";
		tem_canvas_1.style.border = "1px solid";
		tem_canvas_1.style.margin = "0 0 0 10px";   

		body.appendChild(tem_canvas_1);
		
		var o_detail=new Object();
		o_detail.id=id;
		o_detail.id_canvas="canvasimg_"+id;
		o_detail.x=list_shap[i][0];
		o_detail.y=list_shap[i][1];
		o_detail.width=list_shap[i][2];
		o_detail.height=list_shap[i][3];
		_obj_list_canvas[id]=o_detail;
	}
	glb_idshape_current=_list_id_canvas[0]; //gan mac dinh tai 0 id canvas
	console.log(_list_id_canvas);
	
	console.log("_obj_list_canvas");
	console.log(_obj_list_canvas);
}
create_shape();


var first_vl_w_img=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img=0;
var first_vl_w_img_1=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img_1=0;

var canvas = document.getElementById("canvasimg_"+_list_id_canvas[0]); //set tai 0
var ctx = canvas.getContext("2d");
var image = document.createElement("img");

$("#selectedImage").change(function (e) {
	
	//canvas = document.getElementById("canvasimg_"+glb_idshape_current);
	//console.log(canvas);
	numb_offset_x=0;
	numb_offset_y=0;
	var URL = window.URL;
	var url = URL.createObjectURL(e.target.files[0]);
	//var img =new Image();
	image.src = url;
	image.onload = function () {
		var imgSize = calculateAspectRatioFit(image.width, image.height, canvas.clientWidth, canvas.clientHeight);			
		img_w_zoom=imgSize.width;
		img_h_zoom=imgSize.height;
		first_vl_w_img=imgSize.width;
		first_vl_h_img=imgSize.height;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0, imgSize.width, imgSize.height);
	}
});

var canvas_1 = document.getElementById("canvasimg_"+_list_id_canvas[1]); //set tai 0
var ctx_1 = canvas_1.getContext("2d");
var image_1 = document.createElement("img");

$("#selectedImage_1").change(function (e) {
	
	//canvas_1 = document.getElementById("canvasimg_"+glb_idshape_current);
	//console.log(canvas);
	numb_offset_x=0;
	numb_offset_y=0;
	var URL = window.URL;
	var url = URL.createObjectURL(e.target.files[0]);
	//var img =new Image();
	image_1.src = url;
	image_1.onload = function () {
		var imgSize = calculateAspectRatioFit(image_1.width, image_1.height, canvas_1.clientWidth, canvas_1.clientHeight);			
		img_w_zoom_1=imgSize.width;
		img_h_zoom_1=imgSize.height;
		first_vl_w_img_1=imgSize.width;
		first_vl_h_img_1=imgSize.height;
		ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
		ctx_1.drawImage(image_1, 0, 0, imgSize.width, imgSize.height);
	}
});


function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	//var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	var rtnWidth=maxWidth;
	var rtnHeight=srcHeight *rtnWidth/srcWidth;
	if(rtnHeight<maxHeight){
		rtnHeight=maxHeight;
		rtnWidth=srcWidth*rtnHeight/srcHeight;		
	}
	return {
		width: rtnWidth,
		height: rtnHeight
	};
}

var img_string_1;
function tostring(at_canvas) {
	var dataURL = at_canvas.toDataURL();
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
var n_zumm_1 = 0;
$("#zoomplus").click(function () {
	if(get_current_canvas()=='canvas'){
		n_zumm++;
		if(n_zumm<=0){
			n_zumm=0;
		}
		var n_sub_is=n_zumm*const_changezoom;
		//alert(n_zumm);
		
		//console.log("change n="+n_zumm);
		//console.log("first x= "+img_w_zoom+" y= "+img_h_zoom);
		var img_w_zoom_n = parseInt(first_vl_w_img + n_sub_is);
		var img_h_zoom_n = parseInt(first_vl_h_img * img_w_zoom_n / first_vl_w_img);
		//numb_offset_x=-image.width / 2;
		//numb_offset_y=-image.width / 2;
		//img_w_zoom=img_w_zoom_n;
		//img_h_zoom=img_h_zoom;
		//console.log("last x= "+img_w_zoom+" y= "+img_h_zoom);
		
		action_zoom(img_w_zoom_n,img_h_zoom_n);
	}else{
		n_zumm_1++;
		if(n_zumm_1<=0){
			n_zumm_1=0;
		}
		var n_sub_is=n_zumm_1*const_changezoom;

		var img_w_zoom_n = parseInt(first_vl_w_img_1 + n_sub_is);
		var img_h_zoom_n = parseInt(first_vl_h_img_1 * img_w_zoom_n / first_vl_w_img_1);
			
		action_zoom(img_w_zoom_n,img_h_zoom_n);		
	}
	//alert("cong");
	
});
$("#zoompsub").click(function () {
	//alert("tru");
	if(get_current_canvas()=='canvas'){
		n_zumm--;
		if(n_zumm<=0){
			n_zumm=0;
		}
		var n_sub_is=n_zumm*const_changezoom;
		//alert(n_zumm);
		
		//console.log("change n="+n_zumm);
		//console.log("first x= "+img_w_zoom+" y= "+img_h_zoom);
		var img_w_zoom_n = parseInt(first_vl_w_img + n_sub_is);
		var img_h_zoom_n = parseInt(first_vl_h_img * img_w_zoom_n / first_vl_w_img);
		//numb_offset_x=-image.width / 2;
		//numb_offset_y=-image.width / 2;
		//img_w_zoom=img_w_zoom_n;
		//img_h_zoom=img_h_zoom;
		//console.log("last x= "+img_w_zoom+" y= "+img_h_zoom);
		
		action_zoom(img_w_zoom_n,img_h_zoom_n);
	}else{
		n_zumm_1--;
		if(n_zumm_1<=0){
			n_zumm_1=0;
		}
		var n_sub_is=n_zumm_1*const_changezoom;
		//alert(n_zumm);
		
		//console.log("change n="+n_zumm);
		//console.log("first x= "+img_w_zoom+" y= "+img_h_zoom);
		var img_w_zoom_n = parseInt(first_vl_w_img_1 + n_sub_is);
		var img_h_zoom_n = parseInt(first_vl_h_img_1 * img_w_zoom_n / first_vl_w_img_1);
		//numb_offset_x=-image.width / 2;
		//numb_offset_y=-image.width / 2;
		//img_w_zoom=img_w_zoom_n;
		//img_h_zoom=img_h_zoom;
		//console.log("last x= "+img_w_zoom+" y= "+img_h_zoom);
		
		action_zoom(img_w_zoom_n,img_h_zoom_n);
	}
	
	//zoom(n_zumm);
});
function resert() {
	n_zumm = 0;
}
var img_w_zoom=100;
var img_h_zoom=100;
var img_w_zoom_1=100;
var img_h_zoom_1=100;
var const_changezoom = 20;

/* w,h new for img
*/
function action_zoom(w,h) {
	if(get_current_canvas()=='canvas'){
		img_w_zoom=w;
		img_h_zoom=h;
		
		//alert("x= "+img_w_zoom+" y= "+img_h_zoom);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		//ctx.translate(canvas.width / 2, canvas.height / 2);
		//ctx.rotate(angleInDegrees * Math.PI / 180);	
		ctx.drawImage(image,numb_offset_x, numb_offset_y, w, h);
		ctx.restore();
	}else{
		img_w_zoom_1=w;
		img_h_zoom_1=h;
		
		ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
		ctx_1.save();
		ctx_1.drawImage(image_1,numb_offset_x_1, numb_offset_y_1, w, h);
		ctx_1.restore();
	}
	
}


//var numb_x=0;
//var numb_y=0;
var numb_offset_x=0;
var numb_offset_y=0;
var numb_offset_x_1=0;
var numb_offset_y_1=0;
var numb_change_img=4;
function change_img(action) {
	switch (action) {
		case 'left':
			numb_offset_x=parseInt(numb_offset_x-numb_change_img);
			break;
		case 'right':
			numb_offset_x =parseInt(numb_offset_x+numb_change_img);
			break;
		case 'up':
			numb_offset_y =parseInt(numb_offset_y-numb_change_img);
			break;
		case 'down':
			numb_offset_y=parseInt(numb_offset_y+numb_change_img);
			break;
		default:
			break;
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.save();
   // ctx.translate(canvas.width / 2, canvas.height / 2);
   // ctx.rotate(angleInDegrees * Math.PI / 180);
	//var new_w = image.width + n_zumm * const_changezoom;
	//var new_h = image.height * new_w / image.width;
	//numb_offset_x=numb_x;
	//numb_offset_y=numb_y;
	//console.log("a: "+numb_offset_x+" b: "+numb_offset_y+" c: "+img_w_zoom+" d: "+img_h_zoom);
	ctx.drawImage(image, numb_offset_x, numb_offset_y,img_w_zoom,img_h_zoom);
	ctx.restore();
}

/*
	in_x percent.
*/
function changexy_img(in_x,in_y){
	if(glb_idshape_current==_list_id_canvas[0]){
		numb_offset_x=parseInt(numb_offset_x+in_x);
		numb_offset_y =parseInt(numb_offset_y+in_y);
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);	
		ctx.save();
		ctx.drawImage(image, numb_offset_x, numb_offset_y,img_w_zoom,img_h_zoom);
		ctx.restore();
	}else{
		numb_offset_x_1=parseInt(numb_offset_x_1+in_x);
		numb_offset_y_1 =parseInt(numb_offset_y_1+in_y);
		
		ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);	
		ctx_1.save();
		ctx_1.drawImage(image_1, numb_offset_x_1, numb_offset_y_1,img_w_zoom_1,img_h_zoom_1);
		ctx_1.restore();
	}	
}

function get_current_canvas(){
	if(glb_idshape_current==_list_id_canvas[0]){
		return 'canvas';
	}else{
		return 'canvas_1';
	}
}

//});