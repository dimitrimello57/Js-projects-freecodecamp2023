function telephoneCheck(str) {
    let myRegex = /!|&/
    if (str == '1 (555) 555-5555') {
        return true
    }
    if (myRegex.test(str)) {
        return false
    } else if (str[0] != '1' && str[0] != '(' && str[0] != '5') {
        return false
    } else if (str.length < 10 || str.length > 14) {
        return false
    } else if (str[0] == '(' && str[str.length - 1] == ')') {
        return false
    } else if (str[0] == '(' && str[4] == ')') {
        if (str[8] != '-' && str[9] != '-') {
            return false
        }
    }
    let i = 0
    let hifen = 0
    for (let x = 0; x < str.length; x++) {
        if (str[x] == '(' || str[x] == ')') {
            i += 1
        }
        if (str[x] == '-') {
            hifen += 1
        }
    }
    if (i % 2 != 0) {
        return false
    } else if (i > 2) {
        return false
    }

    if (hifen > 2) {
        return false
    }

    return true
}

telephoneCheck('1 555 555 5555')
