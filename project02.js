function convertToRoman(num) {
    let a = num.toString()
    let result
    const numberMap = {
        //Unidades
        0: [
            '', //0
            'I', //1
            'II', //2
            'III', //3
            'IV', //4
            'V', //5
            'VI', //6
            'VII', //7
            'VIII', //8
            'IX' //9
        ],
        //Dezenas
        1: [
            '', //10
            'X', //10
            'XX', //20
            'XXX', //30
            'XL', //40
            'L', //50
            'LX', //60
            'LXX', //70
            'LXXX', //80
            'XC' //90
        ],
        //Centenas
        2: [
            '',
            'C', //100
            'CC', //200
            'CCC', //300
            'CD', //400
            'D', //500
            'DC', //600
            'DCC', //700
            'DCCC', //800
            'CM' //900
        ],
        //Milhares
        3: [
            '',
            'M', //1000
            'MM', //2000
            'MMM' //3000
        ]
    }

    if (a.length < 2) {
        console.log(numberMap[0][a])
        return numberMap[0][a]
    } else if (a.length < 3) {
        let dezena = numberMap[1][a[0]]
        let unidade = numberMap[0][a[1]]
        return dezena + unidade
    } else if (a.length < 4) {
        let centena = numberMap[2][a[0]]
        let dezena = numberMap[1][a[1]]
        let unidade = numberMap[0][a[2]]
        return centena + dezena + unidade
    } else if (a.length < 5) {
        let milhar = numberMap[3][a[0]]
        let centena = numberMap[2][a[1]]
        let dezena = numberMap[1][a[2]]
        let unidade = numberMap[0][a[3]]
        return milhar + centena + dezena + unidade
    }
}

convertToRoman(292)
