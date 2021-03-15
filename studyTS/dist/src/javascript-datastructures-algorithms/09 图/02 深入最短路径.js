"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floydWarshall = exports.Dijkstra = void 0;
// Dijkstra 算法
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
];
function Dijkstra(graph, src) {
    //dist 用来存储路径值(权)
    //visited  用来存储顶点是否访问
    var dist = [];
    var visited = [];
    var length = graph.length;
    var INF = Number.MAX_SAFE_INTEGER;
    //初始化dist 和 visited 列表
    for (var i_1 = 0; i_1 < length; i_1++) {
        dist[i_1] = INF;
        visited[i_1] = false;
    }
    //选择第一个节点 进入循环
    dist[src] = 0;
    var i = 0;
    while (i < length - 1) {
        //此时对应节点 已经访问设置 true
        visited[src] = true;
        //找到对应节点 的 对应的边集合
        var currentEdges = graph[src];
        //遍历边,更新路径
        for (var i_2 = 0; i_2 < currentEdges.length; i_2++) {
            if (currentEdges[i_2] !== 0) {
                //存在边 , 找到最短路径  例如
                //A=>B=>C 最短路径的权
                //为 A=>B 的权(dist[src]) +  B=>C的权(currentEdegs[i]) 和 A=>C(dist[i]) 的权 进行比较
                if (dist[src] + currentEdges[i_2] < dist[i_2]) {
                    //符合上面条件 更新dist[i] 保证dist[i]是每次探路的最短路径
                    dist[i_2] = currentEdges[i_2] + dist[src];
                }
            }
        }
        //迪杰斯特拉的核心算法 , 找到最短路径 重新探路.
        //选择最短路径
        var min = INF;
        var minIndex = -2;
        for (var i_3 = 0; i_3 < dist.length; i_3++) {
            if (!visited[i_3] && dist[i_3] < min) {
                min = dist[i_3];
                minIndex = i_3;
            }
        }
        //进入下一次循环
        src = minIndex;
        i++;
    }
    return dist;
}
exports.Dijkstra = Dijkstra;
function floydWarshall(graph) {
    var dist = [];
    var length = graph.length;
    //初始化dist
    for (var i = 0; i < length; i++) {
        dist[i] = [];
        for (var j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0;
            }
            else if (graph[i][j] == 0) {
                dist[i][j] = Number.MAX_SAFE_INTEGER;
            }
            else {
                dist[i][j] = graph[i][j];
            }
        }
    }
    //核心操作  判断 K 是否 是 i 到 j 可能的中点
    for (var k = 0; k < length; k++) {
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}
exports.floydWarshall = floydWarshall;
//# sourceMappingURL=02%20%E6%B7%B1%E5%85%A5%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84.js.map