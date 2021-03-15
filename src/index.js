module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;}
        let i=String(n);
        let t=i.split("").reverse().join("");
        return Number(t);
}
