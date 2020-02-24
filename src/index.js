
exports.min = function min (array) {
    if (array === undefined || array.length < 1) {
        return 0;
    } else {
        return array.length ? array.sort( (a, b) => a - b )[0] : 0;
    }
  
}

exports.max = function max (array) {
    if (array === undefined || array.length < 1) {
        return 0;
    } else {
        return array.length ? array.sort( (a, b) => b - a )[0] : 0;
    }  
}

exports.avg = function avg (array) {
    if (array === undefined || array.length < 1) {
        return 0;
    } else {
        let avg = 0;
        for (let el of array) {
            avg += el;
        }
      return avg / array.length;
    }
}
