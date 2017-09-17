

//Create the renderer
var renderer = PIXI.autoDetectRenderer(500, 500);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

PIXI.loader
  .add("images/map.png")
  .add('images/boat.png')
  .load(setup);

function setup() {
  var map = new PIXI.Sprite(
    PIXI.loader.resources["images/map.png"].texture
  );
  var boat = new PIXI.Sprite(
    PIXI.loader.resources["images/boat.png"].texture
  );

  //Add the cat to the stage
  stage.addChild(map);
  stage.addChild(boat);

  //Tell the `renderer` to `render` the `stage`
  renderer.render(stage);

  firebase.database().ref('boats/firstBoat').on('value', function (snapshot) {
    let coords = snapshot.val();
    document.getElementById('x').innerText = coords.x;
    document.getElementById('y').innerText = coords.y;

    boat.x = coords.x;
    boat.y = coords.y;
    renderer.render(stage);
  });
}