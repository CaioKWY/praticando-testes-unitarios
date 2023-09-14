import { calcularValorDinamico } from "../src/calcularValorDinamico";


describe("calcular o valor taxa dinamica da corrida", () => {
    it("espera retorno 2x dia util", () => {
        const input = new Date("2023-09-08T16:34:21.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(2);
    });

    it("espera retorno 3x final de semana", () => {
        const input = new Date("2023-09-10T16:34:21.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(3);
    });

    it("espera retorno 4x dia util 7 as 9", () => {
        const input = new Date("2023-09-11T07:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(4);
    });

    it("espera não retorne 4x dia util 7 as 9", () => {
        const input = new Date("2023-09-11T06:59:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).not.toEqual(4);
    });

    it("espera não retorne 4x dia util 7 as 9", () => {
        const input = new Date("2023-09-11T06:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).not.toEqual(4);
    });


    it("espera retorno 4x dia util 17 as 20", () => {
        const input = new Date("2023-09-11T17:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(4);
    });


    it("espera retorno 5x dia util 00 as 05", () => {
        const input = new Date("2023-09-11T00:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(5);
    });

    it("espera retorno 5.5x final de semana 00 as 05", () => {
        const input = new Date("2023-09-10T00:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(5.5);
    });

    it("espera retorno 4.5x final de semana 7 as 09", () => {
        const input = new Date("2023-09-09T07:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(4.5);
    });

    it("espera retorno 4.5x final de semana 17 as 20", () => {
        const input = new Date("2023-09-09T18:00:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(4.5);
    });

    it("espera retorno 3x final de semana ", () => {
        const input = new Date("2023-09-09T16:59:00.817Z");
        const taxa = calcularValorDinamico(input);
        expect(taxa).toEqual(3);
    });



    
});