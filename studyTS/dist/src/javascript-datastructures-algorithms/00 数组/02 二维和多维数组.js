/* 二维数组的迭代 */
var arrs = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10]
];
for (var i = 0; i < arrs.length; i++) {
    for (var j = 0; j < arrs[i].length; j++) {
        console.log(arrs[i][j]);
    }
}
console.table(arrs);
/* 多维数组 */
var many = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ],
    [
        [9, 10],
        [11, 12]
    ]
];
for (var i = 0; i < many.length; i++) {
    for (var j = 0; j < many[i].length; j++) {
        for (var k = 0; k < many[i][j].length; k++) {
            console.log(many[i][j][k]);
        }
    }
}
//# sourceMappingURL=02%20%E4%BA%8C%E7%BB%B4%E5%92%8C%E5%A4%9A%E7%BB%B4%E6%95%B0%E7%BB%84.js.map