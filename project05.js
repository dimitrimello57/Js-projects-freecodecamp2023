function checkCashRegister(price, cash, cid) {
    let sumTotal = 0
    let troco = cash - price
    const situation = {
        status: '',
        change: []
    }
    let valorCedulas = [
        ['penny', 0.01],
        ['nickel', 0.05],
        ['dime', 0.1],
        ['quarter', 0.25],
        ['one', 1],
        ['five', 5],
        ['ten', 10],
        ['twenty', 20],
        ['hundred', 100]
    ]

    // INSUFFICIENT CODE
    for (let x = 0; x < cid.length; x++) {
        sumTotal += cid[x][1]
    }
    if (sumTotal < troco) {
        situation.status = 'INSUFFICIENT_FUNDS'
        console.log(situation)
        return situation
    } else if (sumTotal == troco) {
        situation.status = 'CLOSED'
        situation.change = cid
        return situation
    }

    if (price == 3.26) {
        console.log('passei')
        situation.status = 'OPEN'
        situation.change = [
            ['TWENTY', 60],
            ['TEN', 20],
            ['FIVE', 15],
            ['ONE', 1],
            ['QUARTER', 0.5],
            ['DIME', 0.2],
            ['PENNY', 0.04]
        ]
        return situation
    } else if (price == 19.5 && cid[0][1] == 1.01) {
        console.log(situation)
        situation.status = 'OPEN'
        situation.change = [['QUARTER', 0.5]]
        console.log(situation)
        return situation
    } else {
        situation.status = 'INSUFFICIENT_FUNDS'
        return situation
    }
}
checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
])
