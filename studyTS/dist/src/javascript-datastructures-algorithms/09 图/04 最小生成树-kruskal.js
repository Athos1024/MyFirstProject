var find = function (i, parent) {
    //查找 i元素的父节点 ,如果没有 返回 i
    while (parent[i] !== -1) {
        i = parent[i];
    }
    return i;
};
var union = function (i, j, parent) {
    if (i !== j) {
        //父节点不相同 不是环  合并 否则是环 返回false
        parent[j] = i;
        return true;
    }
    return false;
};
var getEdges = function (graph) {
    //将图的所有边取出
    var length = graph.length;
    //用两个数组来表示
    var edges = []; //存边的权
    var vertices = []; // 存顶点
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (graph[i][j] !== 0) {
                graph[j][i] = 0; //防止重复取边
                vertices.push([i, j]); //存取边的顶点
                edges.push(graph[i][j]); //存取边的权
            }
        }
    }
    return {
        edges: edges,
        vertices: vertices
    };
};
var sortEdges = function (edges, vertices) {
    var _a, _b;
    if (edges === void 0) { edges = []; }
    if (vertices === void 0) { vertices = []; }
    //冒泡排序  将所有的边从小到大排列
    for (var i = 0; i < edges.length - 1; i++) {
        for (var j = 0; j < edges.length - i - 1; j++) {
            if (edges[j] > edges[j + 1]) {
                ;
                _a = [edges[j + 1], edges[j]], edges[j] = _a[0], edges[j + 1] = _a[1];
                _b = [vertices[j + 1], vertices[j]], vertices[j] = _b[0], vertices[j + 1] = _b[1];
            }
        }
    }
    return {
        edges: edges,
        vertices: vertices
    };
};
var kruskal = function (graph) {
    //克鲁斯卡尔 算法
    //第一步  将图的 所有边 取出
    var initEdeges = getEdges(graph);
    //第二步  将所有的边 按权值 排序 由小到大
    var vertices = sortEdges(initEdeges.edges, initEdeges.vertices).vertices;
    //第三步 初始化变量
    var res = [];
    var parent = []; //存储并查集
    var k = 0; //每次取一条边  K递增
    for (var i = 0; i < graph.length; i++) {
        parent[i] = -1;
    }
    // 第四步   取出边 插入图中,
    // 直到插入 n-1条边 n代表 顶点的个数
    while (res.length < graph.length - 1) {
        var v = vertices[k];
        //注意 要避免产生环  采用 并查集的方式 判断是否生成了环
        var i = find(v[0], parent);
        var j = find(v[1], parent);
        if (union(i, j, parent)) {
            //如果不是环 存入res中
            res.push(v);
        }
        k++;
    }
    return res;
};
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
];
console.log(kruskal(graph));
//# sourceMappingURL=04%20%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91-kruskal.js.map