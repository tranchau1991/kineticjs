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



//layer.add(circle);
//layer.draw();

layer.add(circle);
layer.draw();

stage.add(layer);
stage.add(layer_text);
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
        circle.fillPatternImage(imageObj, x, y, width, height);
    };
    imageObj.src = '../pics/a1_fil.jpg';
    //console.log(imageObj.src);


    circle.fillPatternOffset({
        x: 220,
        y: 180,
    });
    
    //circle.fillPatternOffsetX(20);
    circle.fillPatternX(0);


    layer.draw();

    var fillPatternImage = circle.fillPatternImage();
    // alert(fillPatternImage);
    console.log(fillPatternImage);

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
