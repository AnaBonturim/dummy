class Color {

    constructor(vermelho, verde, azul, transparencia) {
        this.verde = verde;
        this.vermelho = vermelho;
        this.azul = azul;
        this.transparencia = transparencia;

        this.cor = this.generate();
    }

    corDarker() {
        let r = this.vermelho * Color.DARKER > 0 ? this.vermelho * Color.DARKER : 0;
        let g = this.verde * Color.DARKER > 0  ? this.verde * Color.DARKER : 0;
        let b = this.azul * Color.DARKER  > 0 ? this.azul * Color.DARKER : 0;

        return new Color(r, g, b, this.transparencia);
    }

    corLighter() {
        let r = this.vermelho * Color.LIGHTER <= 255 ? this.vermelho * Color.LIGHTER : 255;
        let g = this.verde * Color.LIGHTER <= 255  ? this.verde * Color.LIGHTER : 255;
        let b = this.azul * Color.LIGHTER  <= 255 ? this.azul * Color.LIGHTER : 255;

        return new Color(r, g, b, this.transparencia);
    }

    generate() {
        return color(this.vermelho, this.verde, this.azul, this.transparencia);
    }
}

Color.DARKER = 0.9;
Color.LIGHTER = 1.1;