class Util {

    static randomColor(de, ate, transparencia) {

        if (!transparencia)
            transparencia = 255;

        return new Color(random(de, ate), random(de, ate), random(de, ate), transparencia);
    }

    static createPixel(_img, x, y, c) {
        let _x = x, _y;
        do {
            _y = y;
            do {
                _img.set(_x, _y, c.cor);
                _y++;
            } while (_y < (y + unit));
            _x++;
        } while (_x < (x + unit));
    }

    static randomico(de = 0, ate = 6) {
        return Number.parseInt(random(de, ate));
    }
}