let unit = 6;
let mWidth = (innerWidth  - (innerWidth % unit));
let mHeight = (innerHeight - (innerHeight % unit));
let density;
let cenario;
let heroi;

function setup() {
    noStroke();
    createCanvas(mWidth, mHeight);

    density = displayDensity();

    let cenarioGenerator = new CenarioGenerator(20);
    cenario = new Cenario(cenarioGenerator.gerarCenario(), 1);

    let heroiGenerator = new HeroiGenerator();

    heroi = new Heroi(heroiGenerator.gerarImagens(), 10, 5 * unit, cenarioGenerator.nivelMinChao - 10 * unit);
}

function draw() {
    background(0);

    cenario.exibe();
    cenario.move();

    if (keyIsDown(68) || keyIsDown(39)) {
        heroi.moveDireita();
    }
    else if (keyIsDown(65) || keyIsDown(37)) {
        heroi.moveEsquerda();
    }

    if (keyIsDown(32)) {
        heroi.pula();
    }
    else {
        heroi.anda();
    }
}