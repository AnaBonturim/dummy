class Cenario {

    x1 = 0;
    x2 = mWidth;

    constructor(imagem, velocidade) {
        this.imagem = imagem;
        this.velocidade = velocidade;
    }

    exibe() {
        image(this.imagem, this.x1, 0);
        image(this.imagem, this.x2, 0);
    }

    move() {
        this.x1 -= this.velocidade;
        this.x2 -= this.velocidade;

        if (this.x1 <= -mWidth) {
            this.x1 = 0
        }
        if (this.x2 <= 0) {
            this.x2 = mWidth
        }
    }
}