class Heroi {

    imagens = [];
    imagem;
    motion = 0;

    index = 0;

    constructor(imagemMap, velocidade, x, y) {
        this.imagemMap = imagemMap;
        this.velocidade = velocidade;
        this.x = x;
        this.y = y;
    }

    moveEsquerda() {
        let _x = this.x - this.velocidade;

        if (_x >= -this.imagem.width)
            this.x = _x;
        else
            this.x = mWidth;
    }

    moveDireita() {
        let _x = this.x + this.velocidade;

        if (_x <= mWidth)
            this.x = _x;
        else
            this.x = -this.imagem.width;
    }

    anda() {
        this.mudaAcao("andar");
        this.criaImagem();
    }

    pula() {
        this.mudaAcao("pular");
        this.criaImagem();
    }

    mudaAcao(acao) {
        if (this.acao !== acao) {
            this.acao = acao;
            this.imagens = this.imagemMap[acao];
            this.index = 0;
        }
    }

    criaImagem() {
        this.imagem = this.imagens[this.index];

        if (++this.motion === this.velocidade) {
            this.motion = 0;

            if (++this.index >= this.imagens.length)
                this.index = 0;
        }

        image(this.imagem, this.x, this.y);
    }
}