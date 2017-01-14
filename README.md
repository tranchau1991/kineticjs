## Welcome to GitHub Pages

link https://tranchau1991.github.io/kineticjs/



<div id="container"></div>

<button onclick="run();">add group</button>
<button onclick="run_changefill();">change fill</button>
<button onclick="run_change_bg();">change background</button>

<button onclick="run_change_something('x');">change x</button>

<div id="message"></div>


<link rel="stylesheet" href="css.css" type="text/css" />
<script src="jquery.min.js"></script>
<script src="kinetic-v5.1.0.js"></script>
<!--script src="edit.js"></script-->
<!--script src="state2.js"></script-->
<script>
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
    //fill: 'red',
    //draggable: true,
    //fillEnabled: true,
});

stage.add(layer);

var textGroup = new Kinetic.Group({
        x: 50,
        y: 50,
		fill:"red",
        draggable: false,
        dragBoundFunc: function (pos) {
            var X = pos.x;
            var Y = pos.y;
            return ({
                x: X,
                y: Y
            });
        }
    });
layer.add(textGroup);
layer.draw();

var customShape = new Kinetic.Shape({
    x: 5,
    y: 10,
//  fill: 'red',
    stroke: 'black',
	draggable: true,
        dragBoundFunc: function (pos) {
            var X = pos.x;
            var Y = pos.y;
            return ({
                x: X,
                y: Y
            });
        },
    // a Kinetic.Canvas renderer is passed into the drawFunc function
    drawFunc: function (context) {
        context.beginPath();
        context.beginPath();
        context.rect(188, 100, 200, 100);
        // context.quadraticCurveTo(300, 100, 260, 170);
        context.closePath();
        context.fillStrokeShape(this);
    }
});

textGroup.add(customShape);
layer.draw();
</script>



