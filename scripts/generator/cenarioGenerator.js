class CenarioGenerator {

    constructor(tamanhoChao) {
        this.tamanhoChao = tamanhoChao * unit;
        this.nivelMinChao = mHeight - this.tamanhoChao;
    }

    gerarCores() {
        this.primaryColor = Util.randomColor(0, 110);
        this.secondaryColor = Util.randomColor(140, 255);
    }

    gerarCenario() {
        this.gerarCores();
        this.criarImagem();

        return this.imagem;
    }

    criarImagem() {
        this.imagem = createImage(mWidth, mHeight);
        this.imagem.loadPixels();

        this.gerarFundo();
        this.gerarChao();

        this.imagem.updatePixels();
    }

    gerarFundo() {
        for (let x = this.imagem.width; x >= 0; x-=unit) {
            for (let y = this.imagem.height; y >= 0; y-=unit) {

                if (Util.randomico())
                    Util.createPixel(this.imagem, x, y, this.secondaryColor.corLighter());
                else
                    Util.createPixel(this.imagem, x, y, this.secondaryColor);
            }
        }
    }

    gerarChao() {
        let y, p = this.imagem.width;
        let r;

        for (let x = this.imagem.width; x >= 0; x-=unit) {
            y = this.nivelMinChao;

            if (x % (3 * unit) === 0)
                this.criaChao(x, y);
            else if (Util.randomico() === 1)
                this.criaChao(x, y + unit);
            else if (Util.randomico() === 1) {
                this.criaChao(x, y - unit);
            }

            if (p > 2 && p > x && (Util.randomico() === 0)) {
                r = Util.randomico(4, 15);
                GeneratorHelper.printOnImage(this.imagem, CenarioGenerator.planta, this.primaryColor, x, y + r * unit);
                p = x - 3 * unit;
            }
        }
    }

    criaChao(x, y) {
        Util.createPixel(this.imagem, x, y, this.primaryColor);
    }
}

CenarioGenerator.planta = [0,1,1,0,1,2,2,1];