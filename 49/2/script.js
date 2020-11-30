function dotSquare(){
    let str = ''
    str += '* '.repeat(5)
    str += '\n'
    return str.repeat(5)
}

function dotDiamond(){
    let str = ''
    for (let i = 0; i < 5; i++) {
        str += '* '.repeat(5)
        str += '\n'
        str += ' '.repeat(i + 1)
    }
    return str
}