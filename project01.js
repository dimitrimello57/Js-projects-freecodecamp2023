function palindrome(str) {
    let oldStr = ''
    let newStr = ''
    for (let x = str.length - 1; x >= 0; x--) {
        if (
            str[x] != ' ' &&
            str[x] != '_' &&
            str[x] != '(' &&
            str[x] != ')' &&
            str[x] != '.' &&
            str[x] != '-' &&
            str[x] != ',' &&
            str[x] != ':' &&
            str[x] != '/'
        ) {
            newStr += str[x]
        }
    }
    for (let x = 0; x < str.length; x++) {
        if (
            str[x] != ' ' &&
            str[x] != '_' &&
            str[x] != '(' &&
            str[x] != ')' &&
            str[x] != '.' &&
            str[x] != '-' &&
            str[x] != ',' &&
            str[x] != ':' &&
            str[x] != '/'
        ) {
            oldStr += str[x]
        }
    }
    if (newStr.toLowerCase() == oldStr.toLowerCase()) {
        return true
    } else {
        return false
    }
}

palindrome('My age is 0, 0 si ega ym.')
