/* 
    regra de data:
    dias uteis 2x // se for entra 7 e 9h 4x // das 17 as 20h 4x // das 00:00 até 5h 5x
    finais de semana 3x // se for entra 7 e 9h 4.5x // das 17 as 20h 4.5x // das 00:00 até 5h 5.5x
    if(showNxZero === true){
        10x
    }
*/

export function calcularValorDinamico(input: Date){
    
    let hora = input.getUTCHours();
    
    if((hora >= 7 && hora <= 9) || (hora >= 17 && hora <=20)){
        if(isWeekend(input)){
        
            return 4.5;
        }
        return 4;
    };
    if(hora >= 0 && hora <= 5){
        if(isWeekend(input)){
        
            return 5.5;
        };
        return 5;
    };
    if(isWeekend(input)){

        return 3;
    };

    return 2;
};

function isWeekend(input: Date){
   return input.getUTCDay() === 0 || input.getUTCDay() === 6;
   
};

