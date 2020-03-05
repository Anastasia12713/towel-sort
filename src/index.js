// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix.length == 0) {
        return [];
    } else {
        let arr = [];
        let i;
        let j;
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < matrix[i].length; j++) {
                    arr = arr + " " + matrix[i][j];
                }
            }
            if (i % 2 != 0) {
                for (j = 0; j < matrix[i].length; j++) {
                    arr = arr + " " + matrix[i][matrix[i].length - 1 - j];
                }
            }
        }
        let ars = arr.split(" ");
        ars.splice(0, 1);
        for (let t = 0; t < ars.length; t++) {
            ars[t] = Number(ars[t]);
        }
        return ars;
    }
};
