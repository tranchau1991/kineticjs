//jQuery( document ).ready(function(){

var _list_id_canvas; //list id canvast img for bg
var _obj_list_canvas;
_create_canvast_first();

function _create_canvast_first(){
	var list_shap=[];
	_obj_list_canvas={};
	//more _sub: x,y, rong, cao
	var _sub=[];
	//50, 39, 203, 197
	//context.rect(67, 159, 63, 68);
	_sub.push(67);
	_sub.push(159);
	_sub.push(63);
	_sub.push(68);
	list_shap.push(_sub);
	_sub=[];
	//50, 265, 205, 201
	//context.rect(149, 159, 83, 68);
	_sub.push(149);
	_sub.push(159);
	_sub.push(83);
	_sub.push(68);
	list_shap.push(_sub);
	//console.log(list_shap[1][1]);
	//cai thu 3 context.rect(69, 244, 83, 68);
	//cai thu 4 context.rect(169, 244, 63, 68);
	//cai thu 5 context.rect(67, 330, 165, 90);
	
	//3
	_sub=[];
	_sub.push(69);
	_sub.push(244);
	_sub.push(83);
	_sub.push(68);
	list_shap.push(_sub);
	
	//4
	_sub=[];
	_sub.push(169);
	_sub.push(244);
	_sub.push(63);
	_sub.push(68);
	list_shap.push(_sub);
	
	//5
	_sub=[];
	_sub.push(67);
	_sub.push(330);
	_sub.push(165);
	_sub.push(90);
	list_shap.push(_sub);
	
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
	//console.log(_list_id_canvas);
	
	console.log("_obj_list_canvas");
	console.log(_obj_list_canvas);
	console.log("hehe_x_"+_obj_list_canvas[_list_id_canvas[0]].x);
	//console.log("hehe_y_"+_obj_list_canvas[_list_id_canvas[0]].y);
	//console.log("hehe_width_"+_obj_list_canvas[_list_id_canvas[0]].width);
	//console.log("hehe_height_"+_obj_list_canvas[_list_id_canvas[0]].height);
	
}
create_shape();


var first_vl_w_img=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img=0;
var first_vl_w_img_1=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img_1=0;

var first_vl_w_img_2=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img_2=0;

var first_vl_w_img_3=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img_3=0;

var first_vl_w_img_4=0; //chieu rong,cao cua 1 buc hinh input sau khi da xu ly
var first_vl_h_img_4=0;


////s1  den 5
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
			
			glb_idshape_current=_list_id_canvas[0];
			p1_change_img(canvas,0,0);
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
			
			glb_idshape_current=_list_id_canvas[1];
			p1_change_img(canvas_1,0,0);
		}
	});

	//cai thu 3
	var canvas_2 = document.getElementById("canvasimg_"+_list_id_canvas[2]); //set tai 0
	var ctx_2 = canvas_2.getContext("2d");
	var image_2 = document.createElement("img");

	$("#selectedImage_2").change(function (e) {
		//canvas_2 = document.getElementById("canvasimg_"+glb_idshape_current);
		numb_offset_x=0;
		numb_offset_y=0;
		var URL = window.URL;
		var url = URL.createObjectURL(e.target.files[0]);
		//var img =new Image();
		image_2.src = url;
		image_2.onload = function () {
			var imgSize = calculateAspectRatioFit(image_2.width, image_2.height, canvas_2.clientWidth, canvas_2.clientHeight);	
			img_w_zoom_2=imgSize.width;
			img_h_zoom_2=imgSize.height;
			first_vl_w_img_2=imgSize.width;
			first_vl_h_img_2=imgSize.height;
			ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
			ctx_2.drawImage(image_2, 0, 0, imgSize.width, imgSize.height);
			
			glb_idshape_current=_list_id_canvas[2];
			p1_change_img(canvas_2,0,0);
		}
	});

	//cai thu 4
	var canvas_3 = document.getElementById("canvasimg_"+_list_id_canvas[3]); //set tai 0
	var ctx_3 = canvas_3.getContext("2d");
	var image_3 = document.createElement("img");

	$("#selectedImage_3").change(function (e) {
		//canvas_3 = document.getElementById("canvasimg_"+glb_idshape_current);
		numb_offset_x=0;
		numb_offset_y=0;
		var URL = window.URL;
		var url = URL.createObjectURL(e.target.files[0]);
		//var img =new Image();
		image_3.src = url;
		image_3.onload = function () {
			var imgSize = calculateAspectRatioFit(image_3.width, image_3.height, canvas_3.clientWidth, canvas_3.clientHeight);			
			img_w_zoom_3=imgSize.width;
			img_h_zoom_3=imgSize.height;
			first_vl_w_img_3=imgSize.width;
			first_vl_h_img_3=imgSize.height;
			ctx_3.clearRect(0, 0, canvas_3.width, canvas_3.height);
			ctx_3.drawImage(image_3, 0, 0, imgSize.width, imgSize.height);
			
			glb_idshape_current=_list_id_canvas[3];
			p1_change_img(canvas_3,0,0);
		}
	});
	//cai thu 5
	var canvas_4 = document.getElementById("canvasimg_"+_list_id_canvas[4]); //set tai 0
	var ctx_4 = canvas_4.getContext("2d");
	var image_4 = document.createElement("img");

	$("#selectedImage_4").change(function (e) {
		//canvas_4 = document.getElementById("canvasimg_"+glb_idshape_current);
		numb_offset_x=0;
		numb_offset_y=0;
		var URL = window.URL;
		var url = URL.createObjectURL(e.target.files[0]);
		//var img =new Image();
		image_4.src = url;
		image_4.onload = function () {
			var imgSize = calculateAspectRatioFit(image_4.width, image_4.height, canvas_4.clientWidth, canvas_4.clientHeight);
			img_w_zoom_4=imgSize.width;
			img_h_zoom_4=imgSize.height;
			first_vl_w_img_4=imgSize.width;
			first_vl_h_img_4=imgSize.height;
			ctx_4.clearRect(0, 0, canvas_4.width, canvas_4.height);
			ctx_4.drawImage(image_4, 0, 0, imgSize.width, imgSize.height);
			
			glb_idshape_current=_list_id_canvas[4];
			p1_change_img(canvas_4,0,0);
		}
	});
////e1  den 5


function draw_img_alkl_function(canvas, x, y, width, height, flipH, flipV, number_zoom, rotation){
	
}





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
	switch (degrees) 
	{
		case -360:
			degrees=0;
			break;		
		case -270:
			degrees=90;
			break;
		case -180:
			degrees=180;
			break;		
		case -90:
			degrees=270;
			break;		
		case 0:
			break;		
		case 90:
			break;	
		case 180:
			break;	
		case 270:
			break;	
		case 360:
			degrees=0;
			break;
		default:
			break;
	}
	angleInDegrees=degrees;
	
	//degrees=10;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	//ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.rotate(degrees * Math.PI / 180);
	var rotanow=degrees * Math.PI / 180;
	//alert(degrees);
	//ctx.rotate(degrees);
	var setx=-canvas.width/2;
	var sety=-canvas.width/2;
	if(degrees==0){
		sety=0;
		setx=0;
	}
	if(degrees==90){
		sety=0-canvas.width;
		setx=0;
	}
	if(degrees==180){
		sety=0-canvas.height;
		setx=0-canvas.width;
	}
	if(degrees==270){
		sety=0;
		setx=0-canvas.height;
	}
	
	numb_offset_x=sety;
	numb_offset_y=setx;
	
	alert(degrees+" setx="+setx+" sety="+sety);
	ctx.drawImage(image, setx , sety,canvas.width,canvas.height);
	//ctx.drawImage(image,canvas.width,canvas.height);
	ctx.restore();
	resert();
}

//tu dong dieu chinh x,y dua vao w,h sau khi rotation goc
function rotation_auto_wh(rotation,w,h){
	switch (rotation()) 
	{
		case 0:
			break;
		case 90:
			break;
		case 180:
			break;
		case 270:
			break;
		default:
			break;
	}
	return;
}

var n_zumm = 0;
var n_zumm_1 = 0;
var n_zumm_2 = 0;
var n_zumm_3 = 0;
var n_zumm_4 = 0;
$("#zoomplus").click(function () {	
	var tem_n_sub_is;
	var tem_img_w_zoom_n;
	var tem_img_h_zoom_n;
	
	switch (get_current_canvas())
	{
		case 'canvas':
			n_zumm++;
			if(n_zumm<=0){
				n_zumm=0;
			}
			tem_n_sub_is=n_zumm*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img * tem_img_w_zoom_n / first_vl_w_img);
			break;
		case 'canvas_1':
			n_zumm_1++;
			if(n_zumm_1<=0){
				n_zumm_1=0;
			}
			tem_n_sub_is=n_zumm_1*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_1 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_1 * tem_img_w_zoom_n / first_vl_w_img_1);
			break;
		case 'canvas_2':
			n_zumm_2++;
			if(n_zumm_2<=0){
				n_zumm_2=0;
			}
			tem_n_sub_is=n_zumm_2*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_2 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_2 * tem_img_w_zoom_n / first_vl_w_img_2);
			break;
		case 'canvas_3':				
			n_zumm_3++;
			if(n_zumm_3<=0){
				n_zumm_3=0;
			}
			tem_n_sub_is=n_zumm_3*const_changezoom;
			//alert(tem_n_sub_is+"___"+n_zumm_3+"__"+const_changezoom);
			tem_img_w_zoom_n = parseInt(first_vl_w_img_3 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_3 * tem_img_w_zoom_n / first_vl_w_img_3);
			console.log(tem_n_sub_is+"__"+first_vl_h_img_3+"__"+tem_img_w_zoom_n+"__"+first_vl_w_img_3);
			console.log(tem_img_w_zoom_n+"_____"+tem_img_h_zoom_n);
			break;	
		case 'canvas_4':
			n_zumm_4++;
			if(n_zumm_4<=0){
				n_zumm_4=0;
			}
			tem_n_sub_is=n_zumm_4*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_4 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_4 * tem_img_w_zoom_n / first_vl_w_img_4);
			break;	
		default:
			break;
	}	
	
	action_zoom(tem_img_w_zoom_n,tem_img_h_zoom_n);
		
	//alert("cong");
});
$("#zoompsub").click(function () {
	//alert("tru");
	/*
	if(get_current_canvas()=='canvas'){
		n_zumm--;
		if(n_zumm<=0){
			n_zumm=0;
		}
		var tem_n_sub_is=n_zumm*const_changezoom;
		//alert(n_zumm);
		
		//console.log("change n="+n_zumm);
		//console.log("first x= "+img_w_zoom+" y= "+img_h_zoom);
		var tem_img_w_zoom_n = parseInt(first_vl_w_img + tem_n_sub_is);
		var tem_img_h_zoom_n = parseInt(first_vl_h_img * tem_img_w_zoom_n / first_vl_w_img);
		//numb_offset_x=-image.width / 2;
		//numb_offset_y=-image.width / 2;
		//img_w_zoom=tem_img_w_zoom_n;
		//img_h_zoom=img_h_zoom;
		//console.log("last x= "+img_w_zoom+" y= "+img_h_zoom);
		
		action_zoom(tem_img_w_zoom_n,tem_img_h_zoom_n);
	}else{
		n_zumm_1--;
		if(n_zumm_1<=0){
			n_zumm_1=0;
		}
		var tem_n_sub_is=n_zumm_1*const_changezoom;
		//alert(n_zumm);
		
		//console.log("change n="+n_zumm);
		//console.log("first x= "+img_w_zoom+" y= "+img_h_zoom);
		var tem_img_w_zoom_n = parseInt(first_vl_w_img_1 + tem_n_sub_is);
		var tem_img_h_zoom_n = parseInt(first_vl_h_img_1 * tem_img_w_zoom_n / first_vl_w_img_1);
		//numb_offset_x=-image.width / 2;
		//numb_offset_y=-image.width / 2;
		//img_w_zoom=tem_img_w_zoom_n;
		//img_h_zoom=img_h_zoom;
		//console.log("last x= "+img_w_zoom+" y= "+img_h_zoom);
		
		action_zoom(tem_img_w_zoom_n,tem_img_h_zoom_n);
	}
	*/
	
	var tem_n_sub_is;
	var tem_img_w_zoom_n;
	var tem_img_h_zoom_n;
	
	switch (get_current_canvas()) 
	{
		case 'canvas':
			n_zumm--;
			if(n_zumm<=0){
				n_zumm=0;
			}
			tem_n_sub_is=n_zumm*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img * tem_img_w_zoom_n / first_vl_w_img);			
			break;		
		case 'canvas_1':	
			n_zumm_1--;
			if(n_zumm_1<=0){
				n_zumm_1=0;
			}
			tem_n_sub_is=n_zumm_1*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_1 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_1 * tem_img_w_zoom_n / first_vl_w_img_1);			
			break;	
		case 'canvas_2':	
			n_zumm_2--;
			if(n_zumm_2<=0){
				n_zumm_2=0;
			}
			tem_n_sub_is=n_zumm_2*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_2 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_2 * tem_img_w_zoom_n / first_vl_w_img_2);		
			break;	
		case 'canvas_3':		
			n_zumm_3--;
			if(n_zumm_3<=0){
				n_zumm_3=0;
			}
			tem_n_sub_is=n_zumm_3*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_3 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_3 * tem_img_w_zoom_n / first_vl_w_img_3);	
			break;	
		case 'canvas_4':		
			n_zumm_4--;
			if(n_zumm_4<=0){
				n_zumm_4=0;
			}
			tem_n_sub_is=n_zumm_4*const_changezoom;
			tem_img_w_zoom_n = parseInt(first_vl_w_img_4 + tem_n_sub_is);
			tem_img_h_zoom_n = parseInt(first_vl_h_img_4 * tem_img_w_zoom_n / first_vl_w_img_4);	
			break;	
		default:
			break;
	}
	action_zoom(tem_img_w_zoom_n,tem_img_h_zoom_n);
	
	
	//zoom(n_zumm);
});
function resert() {
	n_zumm = 0;
}
var img_w_zoom=100;
var img_h_zoom=100;
var img_w_zoom_1=100;
var img_h_zoom_1=100;

var img_w_zoom_2=_obj_list_canvas[_list_id_canvas[2]].width;
var img_h_zoom_2=_obj_list_canvas[_list_id_canvas[2]].height;
//_obj_list_canvas[_list_id_canvas[1]].width, _obj_list_canvas[_list_id_canvas[1]].height

var img_w_zoom_3=_obj_list_canvas[_list_id_canvas[3]].width;
var img_h_zoom_3=_obj_list_canvas[_list_id_canvas[3]].height;
//_obj_list_canvas[_list_id_canvas[1]].width, _obj_list_canvas[_list_id_canvas[1]].height

//var img_w_zoom_4=100;
var img_w_zoom_4=_obj_list_canvas[_list_id_canvas[4]].width;
//var img_h_zoom_4=100;
var img_h_zoom_4=_obj_list_canvas[_list_id_canvas[4]].height;
//_obj_list_canvas[_list_id_canvas[4]].width, _obj_list_canvas[_list_id_canvas[4]].height

var const_changezoom = 20;

/* w,h new for img
*/
function action_zoom(w,h) {
	/*
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
	*/
	switch (get_current_canvas()) 
	{
		case 'canvas':		
			img_w_zoom=w;
			img_h_zoom=h;
			//alert("x= "+img_w_zoom+" y= "+img_h_zoom);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			//ctx.translate(canvas.width / 2, canvas.height / 2);
			//ctx.rotate(angleInDegrees * Math.PI / 180);	
			ctx.rotate(angleInDegrees * Math.PI / 180);
			ctx.drawImage(image,numb_offset_x, numb_offset_y, w, h);
			ctx.restore();
			break;		
		case 'canvas_1':	
			img_w_zoom_1=w;
			img_h_zoom_1=h;
			
			ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
			ctx_1.save();
			ctx_1.drawImage(image_1,numb_offset_x_1, numb_offset_y_1, w, h);
			ctx_1.restore();
			break;	
		case 'canvas_2':		
			img_w_zoom_2=w;
			img_h_zoom_2=h;
			
			ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
			ctx_2.save();
			ctx_2.drawImage(image_2,numb_offset_x_2, numb_offset_y_2, w, h);
			ctx_2.restore();
			break;	
		case 'canvas_3':		
			img_w_zoom_3=w;
			img_h_zoom_3=h;
			
			ctx_3.clearRect(0, 0, canvas_3.width, canvas_3.height);
			ctx_3.save();
			ctx_3.drawImage(image_3,numb_offset_x_3, numb_offset_y_3, w, h);
			ctx_3.restore();
			break;	
		case 'canvas_4':	
			img_w_zoom_4=w;
			img_h_zoom_4=h;
			
			ctx_4.clearRect(0, 0, canvas_4.width, canvas_4.height);
			ctx_4.save();
			ctx_4.drawImage(image_4,numb_offset_x_4, numb_offset_y_4, w, h);
			
			ctx_4.restore();
			break;	
		default:
			break;
	}
}


//var numb_x=0;
//var numb_y=0;
var numb_offset_x=0;
var numb_offset_y=0;
var numb_offset_x_1=0;
var numb_offset_y_1=0;

var numb_offset_x_2=0;
var numb_offset_y_2=0;

var numb_offset_x_3=0;
var numb_offset_y_3=0;

var numb_offset_x_4=0;
var numb_offset_y_4=0;

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
	/*
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
	*/
	
	
	switch(glb_idshape_current) {
		case _list_id_canvas[0]:
			numb_offset_x=parseInt(numb_offset_x+in_x);
			numb_offset_y =parseInt(numb_offset_y+in_y);
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);	
			ctx.save();
			ctx.drawImage(image, numb_offset_x, numb_offset_y,img_w_zoom,img_h_zoom);
			ctx.restore();
			break;
		case _list_id_canvas[1]:
			numb_offset_x_1=parseInt(numb_offset_x_1+in_x);
			numb_offset_y_1 =parseInt(numb_offset_y_1+in_y);
			
			ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);	
			ctx_1.save();
			ctx_1.drawImage(image_1, numb_offset_x_1, numb_offset_y_1,img_w_zoom_1,img_h_zoom_1);
			ctx_1.restore();
			break;
		case _list_id_canvas[2]:
			numb_offset_x_2=parseInt(numb_offset_x_2+in_x);
			numb_offset_y_2 =parseInt(numb_offset_y_2+in_y);
			
			ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);	
			ctx_2.save();
			ctx_2.drawImage(image_2, numb_offset_x_2, numb_offset_y_2,img_w_zoom_2,img_h_zoom_2);
			ctx_2.restore();
			break;
		case _list_id_canvas[3]:
			numb_offset_x_3=parseInt(numb_offset_x_3+in_x);
			numb_offset_y_3 =parseInt(numb_offset_y_3+in_y);
			
			ctx_3.clearRect(0, 0, canvas_3.width, canvas_3.height);	
			ctx_3.save();
			ctx_3.drawImage(image_3, numb_offset_x_3, numb_offset_y_3,img_w_zoom_3,img_h_zoom_3);
			ctx_3.restore();
			break;
		case _list_id_canvas[4]:
			numb_offset_x_4=parseInt(numb_offset_x_4+in_x);
			numb_offset_y_4 =parseInt(numb_offset_y_4+in_y);
			
			ctx_4.clearRect(0, 0, canvas_4.width, canvas_4.height);	
			ctx_4.save();
			ctx_4.drawImage(image_4, numb_offset_x_4, numb_offset_y_4,img_w_zoom_4,img_h_zoom_4);
			ctx_4.restore();
			break;
		default:
			numb_offset_x_1=parseInt(numb_offset_x_1+in_x);
			numb_offset_y_1 =parseInt(numb_offset_y_1+in_y);
			
			ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);	
			ctx_1.save();
			ctx_1.drawImage(image_1, numb_offset_x_1, numb_offset_y_1,img_w_zoom_1,img_h_zoom_1);
			ctx_1.restore();
	}
	
}

function get_current_canvas(){
	/*
	if(glb_idshape_current==_list_id_canvas[0]){
		return 'canvas';
	}else{
		return 'canvas_1';
	}
	*/
	switch (glb_idshape_current) 
	{
		case _list_id_canvas[0]:		
			return 'canvas';
			break;
		case _list_id_canvas[1]:	
			return 'canvas_1';		
			break;
		case _list_id_canvas[2]:		
			return 'canvas_2';		
			break;
		case _list_id_canvas[3]:
			return 'canvas_3';				
			break;
		case _list_id_canvas[4]:	
			return 'canvas_4';				
			break;
		default:
			break;
	}
}

//});