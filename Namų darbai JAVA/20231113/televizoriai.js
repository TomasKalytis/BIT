class Televizorius {
    constructor(gamintojas, pradinisKanalas, pradinisGarsas) {
        this.gamintojas = gamintojas;
        this.kanalas = pradinisKanalas;
        this.garsas = pradinisGarsas;
    }

    switchOn() {
        return `Televizorius ${this.gamintojas} įjungtas, jo kanalas ${this.kanalas}, garsas ${this.garsas}`;
    }

    increaseVolume(didinti) {
        const naujasGarsas = Math.min(Number(this.garsas) + didinti, 100);
        this.garsas = Math.max(naujasGarsas, 0).toString();
        return `${this.gamintojas} garsas padidintas, naujas garsas: ${this.garsas}`;
    }

    decreaseVolume(mazinti) {
        const naujasGarsas = Math.max(Number(this.garsas) - mazinti, 0);
        this.garsas = Math.min(naujasGarsas, 100).toString();
        return `${this.gamintojas} Garsas sumažintas, naujas garsas: ${this.garsas}`;
    }

    changeChannel(naujasKanalas) {
        if (naujasKanalas > 50) {
            this.kanalas = '1';
        } else {
            this.kanalas = Math.max(Number(naujasKanalas), 1).toString();
        }
        return `${this.gamintojas} kanalas pakeistas, naujas kanlas: ${this.kanalas}`;
    }

    resetParameters() {
        this.kanalas = pradinisKanalas;
        this.garsas = pradinisGarsas;
        return `Atstatyti gamykliniai parametrai, jo kanalas ${this.kanalas}, garsas ${this.garsas}`;
    }

    getCurrentStatus() {
        return `Televizorius '${this.gamintojas}' šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}.`;
    }
}

const samsung = new Televizorius('Samsung', '1', '50');
console.log(samsung.getCurrentStatus());

const sony = new Televizorius('Sony', '8', '76');
console.log(sony.getCurrentStatus());

console.log(sony.switchOn());
// console.log (sony.swichOn());

console.log(samsung.changeChannel(10));
console.log(sony.changeChannel(9));

console.log (samsung.increaseVolume(101));
console.log (sony.decreaseVolume(-110));

console.log (samsung.resetParameters());
console.log (sony.resetParameters());