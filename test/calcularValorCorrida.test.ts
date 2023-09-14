import { calcularValorCorrida } from "../src/calcularValorCorrida";
import { calcularValorDinamico } from "../src/calcularValorDinamico";


describe("calcular valor corrida", () => {
    
    it("espero 24 reais para corrida de 8km", () => { 
        const taxa = calcularValorDinamico(new Date("2023-09-09T16:59:00.817Z"))
        const input = {km: 8, taxa: taxa};

        const resultado = calcularValorCorrida(input);
        expect(resultado).toEqual(24);
    });

    it("espero 44 reais para corrida de 8km", () => { 
        const taxa = calcularValorDinamico(new Date("2023-09-09T00:59:00.817Z"))
        const input = {km: 8, taxa: taxa};

        const resultado = calcularValorCorrida(input);
        expect(resultado).toEqual(44);
    });

    it("espero 20 reais para corrida de 8km", () => { 
        const input = {km: 10, taxa: 2}
        const resultado = calcularValorCorrida(input);
        expect(resultado).toEqual(20);
    });

    it("espero 100 reais para corrida de 8km", () => { 
        const input = {km: 50, taxa: 2}
        const resultado = calcularValorCorrida(input);
        expect(resultado).toEqual(100);
    });

    it("espero 64 reais para corrida de 8km dinamico aplicado", () => { 
        const input = {km: 8, taxa: 8}
        const resultado = calcularValorCorrida(input);
        expect(resultado).toEqual(64);
    });

})