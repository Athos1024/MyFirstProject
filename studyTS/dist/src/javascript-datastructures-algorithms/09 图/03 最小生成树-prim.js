"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prim = void 0;
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
];
console.log(prim(graph, 0));
function prim(graph, src) {
    var dist = [];
    var visited = [];
    var parent = [];
    //比迪杰斯特拉多的一个列表 存前朔点
    var INF = Number.MAX_SAFE_INTEGER;
    var length = graph.length;
    //初始化
    for (var i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    parent[src] = -1;
    var index = 0;
    //只用循环length -1 次
    while (index < length - 1) {
        visited[src] = true;
        var currentEdges = graph[src];
        for (var i = 0; i < currentEdges.length; i++) {
            if (currentEdges[i] !== 0) {
                if (currentEdges[i] < dist[i]) {
                    //注意和迪杰斯特拉不同 只比较边的值
                    dist[i] = currentEdges[i];
                    parent[i] = src;
                }
            }
        }
        var minIndex = -1;
        var min = INF;
        for (var i = 0; i < dist.length; i++) {
            if (dist[i] < min && !visited[i]) {
                min = dist[i];
                minIndex = i;
            }
        }
        src = minIndex;
        index++;
    }
    return parent;
}
exports.prim = prim;
//# sourceMappingURL=03%20%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91-prim.js.map