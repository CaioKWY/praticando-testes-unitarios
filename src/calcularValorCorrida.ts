

interface Input { km: number, taxa: number }
export function calcularValorCorrida(input: Input) {
    let valorCorrida = input.km * input.taxa;
    return valorCorrida;
}