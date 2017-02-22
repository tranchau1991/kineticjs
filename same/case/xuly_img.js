//khoi tao khung hinh

var _list_id_canvas; //list id canvast img for bg
var _obj_list_canvas; //luu thong tin canvast co ban cao rong.
_create_canvast_first();

//khai bao thong tin canvas va shape
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
		if(i==4){
			tem_canvas_1.width =250,
			tem_canvas_1.height = 230;
		}
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


// xu ly button add img
////s1  den 5
	var canvas = document.getElementById("canvasimg_"+_list_id_canvas[0]); //set tai 0
	var ctx = canvas.getContext("2d");
	var image = document.createElement("img");

	$("#selectedImage").change(function (e) {
		//canvas = document.getElementById("canvasimg_"+glb_idshape_current);
		//console.log(canvas);
		//numb_offset_x=0;
		//numb_offset_y=0;
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
		//numb_offset_x=0;
		//numb_offset_y=0;
		var URL = window.URL;
		var url = URL.createObjectURL(e.target.files[0]);
		//var img =new Image();
		image_1.src = url;
		image_1.onload = function () {
			//alert(" pic 2 "+canvas_1.clientWidth+"   "+canvas_1.clientHeight);
			var imgSize = calculateAspectRatioFit(image_1.width, image_1.height, canvas_1.clientWidth, canvas_1.clientHeight);			
			console.log("imgSize");
			console.log(imgSize);
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
		//numb_offset_x=0;
		//numb_offset_y=0;
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
		//numb_offset_x=0;
		//numb_offset_y=0;
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
		//numb_offset_x=0;
		//numb_offset_y=0;
		var URL = window.URL;
		var url = URL.createObjectURL(e.target.files[0]);
		//var img =new Image();
		image_4.src = url;
		image_4.onload = function () {
			var imgSize = calculateAspectRatioFit(image_4.width, image_4.height, canvas_4.clientWidth, canvas_4.clientHeight);
			//img_w_zoom_4=imgSize.width;
			//img_h_zoom_4=imgSize.height;
			//first_vl_w_img_4=imgSize.width;
			//first_vl_h_img_4=imgSize.height;
			ctx_4.clearRect(0, 0, canvas_4.width, canvas_4.height);
			ctx_4.drawImage(image_4, 0, 0, 150, 200);
			alert("daraw");
			
			glb_idshape_current=_list_id_canvas[4];
			//p1_change_img(canvas_4,0,0);
		}
		alert("change now");
	});
////e1  den 5

//change positio img
function changexy_img(in_x,in_y){
	
	test_x=in_x; //502
	test_y=in_y;
	change(10);
	//function change(value){
	
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
	//alert(glb_idshape_current);
	
	var at_id=glb_idshape_current;
	
	var _x = _obj_list_ctem[at_id]._x;
	var _y = _obj_list_ctem[at_id]._y;
	var _width = _obj_list_ctem[at_id]._width;
	var _height = _obj_list_ctem[at_id]._height;
	

	/*
	switch(glb_idshape_current) {
		case _list_id_canvas[0]:
			_x=parseInt(_x+in_x);
			_y =parseInt(_y+in_y);
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);	
			ctx.save();
			ctx.drawImage(image, _x, _y,_width,_height);
			ctx.restore();
			break;
		case _list_id_canvas[1]:
			//numb_offset_x_1=parseInt(numb_offset_x_1+in_x);
			//numb_offset_y_1 =parseInt(numb_offset_y_1+in_y);
			
			_x=parseInt(_x+in_x);
			_y =parseInt(_y+in_y);
			
			ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);	
			ctx_1.save();
			ctx_1.drawImage(image_1, _x, _y,_width,_height);
			ctx_1.restore();
			break;
		case _list_id_canvas[2]:
			//numb_offset_x_2=parseInt(numb_offset_x_2+in_x);
			//numb_offset_y_2 =parseInt(numb_offset_y_2+in_y);
			
			_x=parseInt(_x+in_x);
			_y =parseInt(_y+in_y);
			
			ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);	
			ctx_2.save();
			//ctx_2.drawImage(image_2, numb_offset_x_2, numb_offset_y_2,img_w_zoom_2,img_h_zoom_2);
			ctx_2.drawImage(image_2, _x, _y,_width,_height);
			ctx_2.restore();
			break;
		case _list_id_canvas[3]:
			_x=parseInt(_x+in_x);
			_y =parseInt(_y+in_y);
			
			ctx_3.clearRect(0, 0, canvas_3.width, canvas_3.height);	
			ctx_3.save();
			ctx_3.drawImage(image_3, _x, _y,_width,_height);
			ctx_3.restore();
			break;
		case _list_id_canvas[4]:
			_x=parseInt(_x+in_x);
			_y =parseInt(_y+in_y);
			
			ctx_4.clearRect(0, 0, canvas_4.width, canvas_4.height);	
			ctx_4.save();
			ctx_4.drawImage(image_4, _x, _y,_width,_height);
			ctx_4.restore();
			break;
		default:
			break;
	}
	*/
	
	_obj_list_ctem[at_id]._x = _x;
	_obj_list_ctem[at_id]._y = _y;
	_obj_list_ctem[at_id]._width = _width;
	_obj_list_ctem[at_id]._height = _height;
	
}

//get current canvast
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
			//return 'canvas';
			return [canvas,ctx,image];
			break;
		case _list_id_canvas[1]:	
			//return 'canvas_1';		
			return [canvas_1,ctx_1,image_1];
			break;
		case _list_id_canvas[2]:		
			//return 'canvas_2';		
			return [canvas_2,ctx_2,image_2];
			break;
		case _list_id_canvas[3]:
			//return 'canvas_3';				
			return [canvas_3,ctx_3,image_3];
			break;
		case _list_id_canvas[4]:	
			//return 'canvas_4';				
			return [canvas_4,ctx_4,image_4];
			break;
		default:
			break;
	}
}

//tinh toan lai kich thuoc hinh
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	console.log("fix size "+srcWidth + " __ "+ srcHeight + " __ "+ maxWidth + " __ "+maxHeight);
	//var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	var rtnWidth=maxWidth;
	var rtnHeight=parseInt(srcHeight *maxWidth/srcWidth);
	//alert(rtnHeight+ "heuight");
	if(rtnHeight<maxHeight){
		rtnHeight=maxHeight;
		rtnWidth=parseInt(srcWidth*maxWidth/srcHeight);
	}
	console.log(rtnWidth+ " __"+rtnHeight);
	return {
		width: rtnWidth,
		height: rtnHeight
	};
}

//xu ly anh

function flipImage(image, ctx) {

    ctx.save(); // Save the current state
    ctx.drawImage(img, 0, 0, width, height); // draw the image
    ctx.restore(); // Restore the last saved state
};

function flipNinjas() {
   // var flipH = document.getElementById('horizontalCheckbox').checked,
    //    flipV = document.getElementById('verticalCheckbox').checked;

    flipImage(img, ctx);

    return false;
}

//flipButton.onclick = flipNinjas;
//flipNinjas();

function img_load(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		//flipButton = document.getElementById('flipButton'),
		img = new Image(),
		width = 500,
		height = 428;
	//img.onload = flipNinjas;
	img.onload = function() {
		flipNinjas();
	  //alert(this.width + 'x' + this.height);
	}
	
	//img.src = 'http://3.bp.blogspot.com/-h_hVjcMqx8Q/TdSbVhT18sI/AAAAAAAAACQ/y-egUR0AtRM/s1600/ninja_true-ninjas.gif';
	img.src = 'pic.jpg';
	//img.src = 'http://localhost/customcase/wp-content/plugins/woocommerce-products-designer/public/images/backgrounds/A0032.jpg';
	//img.src = 'hinh.jpg';
	//img.src = 'https://dl.dropboxusercontent.com/u/139992952/stackoverflow/house-icon.png';

}

var img_string_1;
function tostring(at_canvas) {
	img_string_1 = at_canvas.toDataURL();
}

//code moi add xu ly hinh


















//khai bao 1 lan: gan mac dinh, vog for load 5 cai luon./
set_first_img(_obj_list_canvas,_list_id_canvas);

var _obj_list_ctem; //detail hinh all
function set_first_img(_obj_list_canvas,_list_id_canvas){	
	_obj_list_ctem={};
	var o_detail=new Object();
	//console.log("_obj_list_canvas_____");
	//console.log(_obj_list_canvas);
	var at;
	for(var i=0; i<_list_id_canvas.length;i++){
		//alert(_list_id_canvas[i]);
		at=_list_id_canvas[i];
		o_detail={};
		//console.log("at");
		//console.log(at);
		//console.log(_obj_list_canvas[at].width);
		//var at_id='1';
		//var at_id=at;
		
		o_detail._id=at;
		o_detail._img='';
		o_detail._in_ctx='';
		o_detail._x=2;
		o_detail._y=0;
		o_detail._width_parent=_obj_list_canvas[at].width;
		o_detail._width=_obj_list_canvas[at].width;
		o_detail._height_parent=_obj_list_canvas[at].height;
		o_detail._height=_obj_list_canvas[at].height;
		o_detail._flipH=1;
		o_detail._flipV=1;
		o_detail._number_zoom=0;
		o_detail._rotation=0;
		o_detail._effect=0;

		_obj_list_ctem[at]=o_detail;
	}
	//console.log("--------------");
	console.log("_obj_list_ctem");
	console.log(_obj_list_ctem[_list_id_canvas[0]]._x);
	console.log(_obj_list_ctem);
	_obj_list_ctem[_list_id_canvas[0]]._x=0;
	console.log(_obj_list_ctem[_list_id_canvas[0]]._x);
}

var test_x=0; //502
var test_y=0;

function change(value){
	console.log(_obj_list_ctem);
	//alert(value);	
	var at_id=glb_idshape_current;
	
	var _img = _obj_list_ctem[at_id]._img;
	var _in_ctx = _obj_list_ctem[at_id]._in_ctx;
	var _x = _obj_list_ctem[at_id]._x;
	var _y = _obj_list_ctem[at_id]._y;
	var _width = _obj_list_ctem[at_id]._width;
	
	var _height = _obj_list_ctem[at_id]._height;
	var _width_parent = _obj_list_ctem[at_id]._width_parent;
	var _height_parent = _obj_list_ctem[at_id]._height_parent;
	var _flipH = _obj_list_ctem[at_id]._flipH;
	var _flipV = _obj_list_ctem[at_id]._flipV;
	var _number_zoom = _obj_list_ctem[at_id]._number_zoom;
	var _rotation = _obj_list_ctem[at_id]._rotation;
	var _effect = _obj_list_ctem[at_id]._effect;

	//_img=image;
	//_in_ctx= ctx;
	
	var info_n = get_current_canvas();
	
	_img=info_n[2];
	_in_ctx= info_n[1];
	_canvas= info_n[0];
	
	console.log("info_n");
	console.log(info_n);
	
	var _test_x;
	var _test_y;


	//_flipH= document.getElementById('horizontalCheckbox').checked;
	//_flipV= document.getElementById('verticalCheckbox').checked;
	//alert(_flipH);
	//__height_parent, _width_parent
	switch (value)
	{
		case 1:
			//alert("1");
			var tile=(_width+13)/_width;
			_width=_width*tile;
			_height=_height*tile;
			break;
		case 2:
			//alert("2");
			var tile=(_width-13)/_width;
			//alert(_width*tile+"__"+width);
			if(_width*tile>=_width_parent){
				_width=_width*tile;				
				_height=_height*tile;	
			}

			break;
		case 3:
			_rotation +=90;
			console.log(_rotation);

			_width = _obj_list_ctem[at_id]._width_parent;
			_height = _obj_list_ctem[at_id]._height_parent;
			_number_zoom = 0;
			_flipH=1;
			_flipV=1;

			//var result=rotation_effect(_rotation,_width,_height);
			//_rotation=result[0];
			_test_x=0;
			_test_y=0;
			var result = fliprotation_event(_flipH,_flipV,_width,_height,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y);
			//_flipH=result[0];
			//_flipV=result[1];
			_x=result[2];
			_y=result[3];
			_rotation=result[4];
			/*
			_x=result[1];
			_y=result[2];
			_width=result[3];
			_height=result[4];
			console.log(result);
			*/
			//set zoom =1; default not zoom
			break;	
		case 4:
			_rotation -=90;

			_width = _obj_list_ctem[at_id]._width_parent;
			_height = _obj_list_ctem[at_id]._height_parent;
			_number_zoom = 0;
			_flipH=1;
			_flipV=1;
			//var result=rotation_effect(_rotation,_width,_height);
			//_rotation=result[0];
			_test_x=0;
			_test_y=0;
			var result = fliprotation_event(_flipH,_flipV,_width,_height,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y);
			//_flipH=result[0];
			//_flipV=result[1];
			_x=result[2];
			_y=result[3];
			_rotation=result[4];
			/*
			_x=result[1];
			_y=result[2];
			_width=result[3];
			_height=result[4];
			*/
			console.log(result);
			break;

		case 5:
			//alert("change _flipH");
			_flipH=_flipH*-1;
			_test_x=0;
			_test_y=0;
			var result = fliprotation_event(_flipH,_flipV,_width,_height,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y);
			_flipH=result[0];
			_flipV=result[1];
			_x=result[2];
			_y=result[3];

			break;	
		case 6:
			//alert("8");
			_flipV=_flipV*-1;
			//alert(_flipV);
			_test_x=0;
			_test_y=0;
			var result = fliprotation_event(_flipH,_flipV,_width,_height,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y);
			_flipH=result[0];
			_flipV=result[1];
			_x=result[2];
			_y=result[3];
		case 7:
			_effect=0;
			break;
		case 8:
			_effect=1;
			break;
		case 9:
			_effect=2;
			break;	
		case 10:
			//alert("10");
			//_x = test_x+_x;
			//_y =test_y+_y;
			
			_test_x=test_x;
			_test_y=test_y;
			var result = change_xy_img(_flipH,_flipV,159,400,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y);
			_x=result[0];
			_y=result[1];
			
			break;	
		default:
			break;
	}

	draw_img_alkl_function(_img,_in_ctx,_canvas, _x, _y, _width, _height, _flipH, _flipV, _number_zoom, _rotation,_effect);


	_obj_list_ctem[at_id]._rotation = _rotation;
	_obj_list_ctem[at_id]._width = _width;
	_obj_list_ctem[at_id]._height = _height;
	_obj_list_ctem[at_id]._x = _x;
	_obj_list_ctem[at_id]._y = _y;
	_obj_list_ctem[at_id]._flipH = _flipH;
	_obj_list_ctem[at_id]._flipV = _flipV;
	_obj_list_ctem[at_id]._number_zoom=_number_zoom;
	_obj_list_ctem[at_id]._effect = _effect;

	
		
	tostring(_canvas);
	fill_img();
	
	return false;
}

function change_xy_img(_flipH,_flipV,_width,_height,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y){
	console.log(" _rotation " +_rotation);
	var _posX = _x;
	var _posY = _y;
	
	if(_flipH==-1){
		if(_rotation==0){
			//_posX=_width * -1;
			//sign_x=-1;
			_posX = _posX - _test_x;
		}
		if(_rotation==90){
			_posX = _posX - _test_y;
			//_posX=-_width;
		}
		if(_rotation==180){
			//_posX=0;
			_posX = _posX + _test_x;
		}
		if(_rotation==270){
			//_posX=0;
			_posX = _posX - _test_y;
		}
	}else{
		if(_rotation==0){
			//_posX=0;
			_posX = _posX + _test_x;
		}
		if(_rotation==90){			
			//_posX=0;			
			_posX = _posX + _test_y;
			//alert("x 90");
		}
		if(_rotation==180){	
			_posX = _posX - _test_x;
			//_posX=-_width;
		}
		if(_rotation==270){	
			_posX = _posX - _test_y;		
			//_posX=-_width;
		}
	}
	//_posY = _flipV ? _height * -1 : 0; // Set y position to -100% if flip vertical
	if(_flipV==-1){
		//_posY=_height * -1;
		if(_rotation==0){
			//sign_y=-1;
			_posY = _posY - _test_y;
			//_posY=_height_parent * -1;
			//_posX=-200;
		}
		if(_rotation==90){
			_posY = _posY + _test_x;
			//_posY=0;
			
		}
		if(_rotation==180){
			_posY = _posY + _test_y;
			//_posY=0;
		}
		if(_rotation==270){
			//_posY=_height_parent * -1;
			_posY = _posY - _test_x;
		}
	}else{
		//_posY=_height * -1;
		if(_rotation==0){
			_posY = _posY + _test_y;
			//_posY=0;
			//_posX=-200;
			
		}
		if(_rotation==90){
			_posY = _posY - _test_x;
			//_posY=-_height_parent;
			//sign_y=-1;
			//alert("y 90");
			//_posY = _posY + _test_x;
		}
		if(_rotation==180){
			//_posY=-_height_parent;
			_posY = _posY - _test_y;
		}
		if(_rotation==270){
			_posY = _posY + _test_x;
			//_posY=0;
		}
	}
	//_posX = _posX + sign_x*_test_x;
	//_posY = _posY + sign_y*_test_y;
	
	//_posX = sign_x*_test_x + _posX;
	//_posY = sign_y*_test_y + _posY;
	
	var a=[];	
	a.push(_posX);
	a.push(_posY);
	//a.push(_flipH);
	//a.push(_flipV);
	//a.push(_rotation);
	
	//console.log(" flip");
	console.log(a);
	return a;
}

function fliprotation_event(_flipH,_flipV,_width,_height,_rotation,_x,_y,_width_parent,_height_parent,_test_x,_test_y){

	switch (_rotation)
	{
		case -360:
			_rotation=0;
			break;
		case -270:
			_rotation=90;
			break;
		case -180:
			_rotation=180;
			break;
		case -90:
			_rotation=270;
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
			_rotation=0;
			break;
		default:
			break;
	}
	//console.log();
	//var _scaleH = _flipH ? -1 : 1, // Set horizontal scale to -1 if flip horizontal
	//_scaleV = _flipV ? -1 : 1, // Set verical scale to -1 if flip vertical
	var _posX=_x;// = _flipH ? _width * -1 : 0, // Set x position to -100% if flip horizontal 
	var _posY=_y;
	//alert(_rotation+" of flip_event");
	
	//_width_parent,
	//_height_parent
	//var sign_x=1;
	//var sign_y=1;
	
	
	if(_flipH==-1){
		if(_rotation==0){
			_posX=_width * -1;
		}
		if(_rotation==90){
			_posX=-_width;
		}
		if(_rotation==180){
			_posX=0;
		}
		if(_rotation==270){
			_posX=0;
		}
	}else{
		if(_rotation==0){
			_posX=0;
		}
		if(_rotation==90){			
			_posX=0;
		}
		if(_rotation==180){			
			_posX=-_width;
		}
		if(_rotation==270){		
			_posX=-_width;
		}
	}
	//_posY = _flipV ? _height * -1 : 0; // Set y position to -100% if flip vertical
	if(_flipV==-1){
		//_posY=_height * -1;
		if(_rotation==0){
			_posY=_height_parent * -1;
			//_posX=-200;
		}
		if(_rotation==90){
			_posY=0;
		}
		if(_rotation==180){
			_posY=0;
		}
		if(_rotation==270){
			_posY=_height_parent * -1;
		}
	}else{
		//_posY=_height * -1;
		if(_rotation==0){
			_posY=0;
			//_posX=-200;
		}
		if(_rotation==90){
			_posY=-_height_parent;
		}
		if(_rotation==180){
			_posY=-_height_parent;
		}
		if(_rotation==270){
			_posY=0;
		}
	}
	
	//alert(sign_x+ "__"+_test_x+"__"+_posX);

	var a=[];
	a.push(_flipH);
	a.push(_flipV);
	a.push(_posX);
	a.push(_posY);
	a.push(_rotation);
	
	console.log(" flip");
	console.log(a);
	return a;
}

function draw_img_alkl_function(_img, _in_ctx,_canvas, _x, _y, _width, _height, _flipH, _flipV, _number_zoom, _rotation,_effect){
	
	_posX=_x;
	_posY=_y;

	_in_ctx.clearRect(0, 0, _canvas.width, _canvas.height);
	_in_ctx.save(); // Save the current state

	_in_ctx.rotate(_rotation*Math.PI/180);
	//_in_ctx.rotate();
	//_in_ctx.rotate(_rotation); // Set scale to flip the image

    //_in_ctx.scale(_scaleH, _scaleV); // Set scale to flip the image
    _in_ctx.scale(_flipH, _flipV); // Set scale to flip the image

    _in_ctx.drawImage(_img, _posX, _posY, _width, _height); // draw the image

	////start effect
	switch(_effect){
		case 0:
			break;
		case 1:
			var imageData = _in_ctx.getImageData(0, 0, _width, _height);
			var data = imageData.data;
			
			for(var i = 0; i < data.length; i += 4) {
			  var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
			  // red
			  data[i] = brightness;
			  // green
			  data[i + 1] = brightness;
			  // blue
			  data[i + 2] = brightness;
			}
			// overwrite original image
			_in_ctx.putImageData(imageData,0,0);
			break;
		case 2:
			var imageData = _in_ctx.getImageData(0, 0, _width, _height);
			var dataArray = imageData.data;			
			  //https://code.tutsplus.com/tutorials/build-a-canvas-image-editor-with-canvas--net-18143
			  for(var x = 0; x < dataArray.length; x+=4) {
					//convert to grayscale 
					var r = dataArray[x], 
						g = dataArray[x + 1], 
						b = dataArray[x + 2], 
					sepiaR = r * .393 + g * .769 + b * .189, 
					sepiaG = r * .349 + g * .686 + b * .168, 
					sepiaB = r * .272 + g * .534 + b * .131; 
					dataArray[x] = sepiaR; 
					dataArray[x + 1] = sepiaG; 
					dataArray[x + 2] = sepiaB;                              
			} 
			
			_in_ctx.putImageData(imageData,0,0);
			
			break;
		default:
			break;
	}
	////end effect	
	
    _in_ctx.restore(); // Restore the last saved state
}