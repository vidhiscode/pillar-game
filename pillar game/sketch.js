var bkg1;
var pillar, pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillarImg;
var gem, gemImg;


function preload() {
bkg1 = loadImage("cave.jpg");
pillarImg = loadImage("pillar.png");
gemImg = loadImage("gem1.png");
}

function setup() {
    createCanvas(1200,600);
    background(bkg1);

   pillar1 = createSprite(200,600,50,50);
   pillar1.addImage(pillarImg);
   pillar1.scale = 0.5;

   pillar2 = createSprite(400,500,50,50);
   pillar2.addImage(pillarImg);
   pillar2.scale = 0.5;

   pillar3 = createSprite(600,700,50,50);
   pillar3.addImage(pillarImg);
   pillar3.scale = 0.5;

   pillar4 = createSprite(800,600,50,50);
   pillar4.addImage(pillarImg);
   pillar4.scale = 0.5;

   pillar5 = createSprite(1000,700,50,50);
   pillar5.addImage(pillarImg);
   pillar5.scale = 0.5;

   gem = createSprite(200,600,50,50);
   gem.addImage(gem);
   gem.scale = 0.5;
}

  
function draw() {
drawSprites();
}