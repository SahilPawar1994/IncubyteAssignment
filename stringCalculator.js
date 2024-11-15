
function stringCalculator(str) {
    if(typeof str === 'string') {
        const split = str.split(/[,;/n]/)

        let num = 0;
        split.forEach(s => {
            num = num + Number(s)
        })

        return num;
    }

}

stringCalculator("1,2;3/n4")

module.exports = stringCalculator;