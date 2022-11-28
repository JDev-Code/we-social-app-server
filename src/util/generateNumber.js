function generateNumber () {
    let random = Math.trunc(Math.random() * 10000).toString()
    let length = random.toString().length

    while (length < 4) {
        random = '0' + random
        length++
    }

    return random
}

export default generateNumber