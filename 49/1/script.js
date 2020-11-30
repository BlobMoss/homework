function dotTriangle(){
    let str = ''
    for (let i = 10; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            str += '*'
        }
        str += '\n'
    }
    return str
}

function sociallyDistancedDots(){
    let str = ''
    for (let i = 0; i < 5; i++) {
        str = str + '* '
    }
    return str
}

function dotSquare(){
    let str = ''
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            str += '* '
        }
        str += '\n'
    }
    return str
}

function dotDiamond(){
    let str = ''
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            str += '* '
        }
        str += '\n'
        for (let j = 0; j < i + 1; j++) {
            str += ' '
        }
    }
    return str
}