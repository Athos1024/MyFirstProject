"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01______1 = __importDefault(require("../02 \u961F\u5217/01 \u961F\u5217\u7684\u5B9E\u73B0"));
var _02_________1 = __importDefault(require("../01 \u6808/02 \u6808\u7684\u5B9E\u73B0\u57FA\u4E8E\u5BF9\u8C61"));
var WHITE = Symbol('white');
var GREY = Symbol('grey');
var BLACK = Symbol('black');
var Graph = /** @class */ (function () {
    function Graph(isDirected) {
        if (isDirected === void 0) { isDirected = false; }
        this.isDirected = isDirected; //是否是无向图
        this.vertices = []; //存储顶点
        this.adjList = new Map(); //邻接表存储变
    }
    Graph.prototype.initializeColor = function () {
        var color = {};
        this.vertices.forEach(function (v) {
            color[v] = WHITE;
        });
        return color;
    };
    Graph.prototype.depthFirstSearchVisit = function (v, color, cb) {
        var _this = this;
        var list = this.adjList.get(v);
        color[v] = BLACK;
        cb(v);
        list.forEach(function (el) {
            if (color[el] === WHITE) {
                _this.depthFirstSearchVisit(el, color, cb);
            }
        });
    };
    Graph.prototype.addVertex = function (v) {
        //添加顶点
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []); //用数组存储边
        }
    };
    Graph.prototype.addEdge = function (v, w) {
        //添加边
        if (this.vertices.includes(v) && this.vertices.includes(w)) {
            var vList = this.adjList.get(v);
            var wList = this.adjList.get(w);
            if (!this.isDirected) {
                //如果是无向图
                if (vList.includes(w) || wList.includes(v))
                    return false;
                vList.push(w);
                wList.push(v);
            }
            else {
                //有向图
                if (vList.includes(w))
                    return false;
                vList.push(w);
            }
            return true;
        }
        return false;
    };
    Graph.prototype.toString = function () {
        var _this = this;
        var str = '';
        this.vertices.forEach(function (verText) {
            var temp = verText + '=>';
            _this.adjList.get(verText).forEach(function (edge) {
                temp = temp + ' ' + edge;
            });
            str = str + temp + '\n';
        });
        return str;
    };
    Graph.prototype.breadthFirstSearch = function (startVertex, callback) {
        //广度优先搜索 BFS
        //初始化 队列 和颜色
        var queue = new _01______1.default();
        var color = this.initializeColor();
        queue.enqueue(startVertex);
        while (!queue.isEmpty()) {
            //当队列不为空时循环出列
            var v = queue.dequeue();
            var list = this.adjList.get(v);
            //将v设置为灰色(已经发现的)
            color[v] = GREY;
            list.forEach(function (vertext) {
                //遍历关联的顶点,如果顶点是白色的(未发现的),入列
                if (color[vertext] === WHITE) {
                    color[vertext] = GREY;
                    queue.enqueue(vertext);
                }
            });
            //访问 v顶点 ,将其设为black(已探索的)
            callback(v);
            color[v] = BLACK;
        }
    };
    Graph.prototype.depthFirstSearch = function (v, cb) {
        //深度优先搜索 DFS
        var color = this.initializeColor();
        this.depthFirstSearchVisit(v, color, cb);
    };
    Graph.prototype.getShortedPathByBfs = function (startVertex) {
        //通过广度优先搜索 得到最短路径
        var color = this.initializeColor();
        var queue = new _01______1.default();
        //distance 存储距离  predecessors 存储前一个节点
        var distance = {};
        var predecessors = {};
        //初始化 disance 和 predecessors
        this.vertices.forEach(function (el) {
            distance[el] = 0;
            predecessors[el] = null;
        });
        queue.enqueue(startVertex);
        var _loop_1 = function () {
            var v = queue.dequeue();
            var list = this_1.adjList.get(v);
            color[startVertex] = GREY;
            list.forEach(function (el) {
                if (color[el] === WHITE) {
                    color[el] = GREY;
                    //比BFS多两步操作即可
                    distance[el] = distance[v] + 1;
                    predecessors[el] = v;
                    queue.enqueue(el);
                }
            });
            color[v] = BLACK;
        };
        var this_1 = this;
        while (!queue.isEmpty()) {
            _loop_1();
        }
        //将结果返回
        return {
            distance: distance,
            predecessors: predecessors
        };
    };
    Graph.prototype.getShortedPathByBfsToString = function (v) {
        //将结果拼接成字符串 以下 是 path的 传入A 的 预期结果
        //distances:{A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3},
        //predecessors:{A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H:"D",I:"E"}
        var path = this.getShortedPathByBfs(v);
        var fromVertex = v;
        var res = '';
        for (var i = 1; i < this.vertices.length; i++) {
            var toVertex = this.vertices[i];
            var stack = new _02_________1.default();
            for (var v_1 = toVertex; v_1 !== fromVertex; v_1 = path.predecessors[v_1]) {
                stack.push(v_1);
            }
            stack.push(fromVertex);
            var temp = stack.pop();
            while (!stack.isEmpty()) {
                temp += ' - ' + stack.pop();
            }
            res = res + temp + '\n';
        }
        return res;
    };
    return Graph;
}());
exports.default = Graph;
//# sourceMappingURL=01%20%E5%9B%BE%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map