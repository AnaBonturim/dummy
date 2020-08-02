class GeneratorHelper {

    static printOnImage(img, lista, cor, x, y) {

        let listaIterator = lista.values();

        let i = listaIterator.next().value * unit;
        let j = listaIterator.next().value * unit;

        while(!isNaN(i)) {

            Util.createPixel(img, x + i, y + j, cor);

            i = listaIterator.next().value * unit;
            j = listaIterator.next().value * unit;
        }
    }

    static getMaxPositionY(pixels) {
        let ys = pixels.filter((item, index) => { return index % 2 !== 0});

        return Math.max(...ys);

    }

    static getMaxPositionX(pixels) {
        let xs = pixels.filter((item, index) => {return index % 2 === 0});

        return Math.max(...xs);
    }
}