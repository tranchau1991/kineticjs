var stage = new Kinetic.Stage({
    container: 'container',
    width: 900,
    height: 500,
//    fill: 'red',
//    draggable: true,
});






var layer = new Kinetic.Layer({
    width: 300,
    height: 300,
    fill: 'red',
    draggable: true,
    fillEnabled: true,
});



var layer_text = new Kinetic.Layer({
    width: 300,
    height: 300,
    //fill: 'red',
    //draggable: true,
    //fillEnabled: true,
});
/*
 var layer_fast = new Kinetic.FastLayer({
 width: 100,
 height: 100,
 fill: 'red',
 //draggable: true,
 });
 */


var circle = new Kinetic.Circle({
    x: 100,
    y: 120,
    radius: 205,
    stroke: 'black',
    strokeWidth: 1,
//    fill: 'green',
//    fill: 'rgb(0,255,0)',
//    fill:'#ff0000',
    draggable: true,
    dragBoundFunc: function (pos) {
        var X = pos.x;
        var Y = pos.y;
        return ({
            x: X,
            y: Y
        });
    }
});



var customShape = new Kinetic.Shape({
    x: 5,
    y: 10,
//  fill: 'red',
    stroke: 'black',
    // a Kinetic.Canvas renderer is passed into the drawFunc function
    drawFunc: function (context) {
        context.beginPath();
        context.beginPath();
        context.rect(188, 100, 500, 300);
        // context.quadraticCurveTo(300, 100, 260, 170);
        context.closePath();
        context.fillStrokeShape(this);
    }
});
layer.add(customShape);


//layer.add(circle);
//layer.draw();

//layer.add(circle);
layer.draw();

stage.add(layer);
//stage1.add(layer_text);
//layer.cache({
//  x: 0,
//  y: 30,
//  width: 300,
//  height:300,
//   fill: 'red'
//});




$('#message').append('width before scale: ' + layer.getWidth() + "</br>");

//layer.setScale(0.9);


$('#message').append('width after scale: ' + layer.getWidth());

run();
function run() {
    add_text();
}

function run_changefill() {
    fill_img();
    //add_bg_img();
}
function run_change_bg() {
    fill_img_2();
}


function add_bg_img() {
    var imageObj = new Image();
    imageObj.crossOrigin = "Anonymous";
    imageObj.onload = function () {
        var image = new Kinetic.Image({
            x: 200,
            y: 50,
            image: imageObj,
            width: 100,
            height: 100
        });
        customShape.fillPatternImage(image);
        layer.draw();
    };
    imageObj.src = 'pics/a1_fil.jpg';
}

function fill_img() {
    //var fill = circle.fill();
    //alert(fill);
    //circle.fill('red');
    //circle.fill('yellow');
    //alert('fie');
    //circle.fillPatternRepeat('no');
    var x = 188;
    var y = 30;
    var width = 100;
    var height = 37;
    var imageObj = new Image();
    imageObj.onload = function () {
        customShape.fillPatternImage(imageObj, x, y, width, height);
    };
    imageObj.src = 'pics/a1_fil.jpg';
    //console.log(imageObj.src);


    customShape.fillPatternOffset({
        x: 220,
        y: 180,
    });

    //circle.fillPatternOffsetX(20);
    customShape.fillPatternX(0);


    layer.draw();

    var fillPatternImage = customShape.fillPatternImage();
    // alert(fillPatternImage);
    console.log(fillPatternImage);

}

function fill_img_2() {
    alert("fille img 2");
    var x = 188;
    var y = 30;
    var width = 200;
    var height = 337;
    var imageObj = new Image();
    imageObj.width = 400;
    imageObj.height = 400;
    imageObj.onload = function () {
        customShape.fillPatternImage(imageObj);
    };
//    imageObj.src = 'pics/a2.png';
    imageObj.src = 'pics/a2.png';
    //console.log(imageObj.src);
    customShape.fillPatternRepeat('no-repeat');
    customShape.fillPatternRotation(90);

    customShape.fillPatternOffset({
        x: 220,
        y: 180,
    });
    customShape.fillPatternRepeat('repeat');
    //circle.fillPatternOffsetX(20);
    //customShape.fillPatternX(0);


    layer.draw();

    var fillPatternImage = customShape.fillPatternImage();
    // alert(fillPatternImage);
    console.log(fillPatternImage);

}

function run_change_something(type) {
    if (type == 'x') {
        var x = 0;
        var y = 0;
        var width = 150;
        var height = 63;
        var imageObj = new Image();
        imageObj.onload = function () {
            customShape.fillPatternImage(imageObj, x, y, width, height);
        };
        imageObj.src = 'pics/a2.png';
        //console.log(imageObj.src);
        customShape.fillPatternOffset({
            x: 0,
            y: 0,
        });
        //circle.fillPatternOffsetX(20);
        customShape.fillPatternX(0);
        layer.draw();
        var fillPatternImage = customShape.fillPatternImage();
    }
}

function add_text() {
    //alert(run);
    var getCurrentRandomText = makeid();
    var textGroup = new Kinetic.Group({
        x: 50,
        y: 50,
        draggable: true,
        dragBoundFunc: function (pos) {
            var X = pos.x;
            var Y = pos.y;
            return ({
                x: X,
                y: Y
            });
        }
    });
    var newText = new Kinetic.Text({
        text: 'text here',
        fontSize: 16,
        fill: '#666666',
        fontFamily: 'Arial',
        name: 'customText_' + getCurrentRandomText,
        id: 'customText_' + getCurrentRandomText
    });

    var textRect = new Kinetic.Rect({
        //width: newText.getWidth(),
        //height: newText.getHeight(),
        //name: 'customRec_' + getCurrentRandomText,
        //id: 'customRec_' + getCurrentRandomText
    });
    textGroup.add(textRect).add(newText);
    layer_text.add(textGroup);
    layer_text.draw();
}


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var layer_img = new Kinetic.Layer({
    width: 300,
    height: 300,
    //fill: 'red',
//    draggable: true,
    //fillEnabled: true,
});
stage.add(layer_img);
create_img();
var image;
function create_img() {
    var imageObj = new Image();
    imageObj.onload = function () {
        image = new Kinetic.Image({
            x: 200,
            y: 50,
            image: imageObj,
            width: 100,
            height: 100,
            //draggable: true,
        });
        image.fillRed(120);
        //console.log(image);
        
        layer_img.add(image);
        layer_img.draw();
    };
    imageObj.src = 'pics/a2.png';
    
    //console.log(imageObj);
    //layer_img.cache();
    var a= layer_img.toImage({ callback: function(img) {
        console.log(img);
    }});
}