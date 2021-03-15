"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01_____1 = __importDefault(require("./01 \u56FE\u7684\u5B9E\u73B0"));
describe('图的测试', function () {
    var graph = new _01_____1.default(false);
    var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    test('插入测试', function () {
        for (var i = 0; i < myVertices.length; i++) {
            graph.addVertex(myVertices[i]);
        }
        graph.addEdge('A', 'B'); //I,E,B,A,C,D,G,H,F
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('C', 'D');
        graph.addEdge('C', 'G');
        graph.addEdge('D', 'G');
        graph.addEdge('D', 'H');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'I');
        expect(graph.toString()).toBe("A=> B C D\nB=> A E F\nC=> A D G\nD=> A C G H\nE=> B I\nF=> B\nG=> C D\nH=> D\nI=> E\n");
    });
    test('广度优先搜索测试', function () {
        var str = '';
        graph.breadthFirstSearch('A', function (v) {
            str = str + ',' + v;
        });
        expect(str.slice(1)).toBe('A,B,C,D,E,F,G,H,I');
        str = '';
        graph.breadthFirstSearch('C', function (v) {
            str = str + ',' + v;
        });
        expect(str.slice(1)).toBe('C,A,D,G,B,H,E,F,I');
    });
    test('深度优先搜索测试', function () {
        var str = '';
        graph.depthFirstSearch('A', function (v) {
            str = str + ',' + v;
        });
        expect(str.slice(1)).toBe('A,B,E,I,F,C,D,G,H');
        str = '';
        graph.depthFirstSearch('I', function (v) {
            str = str + ',' + v;
        });
        expect(str.slice(1)).toBe('I,E,B,A,C,D,G,H,F');
    });
    test('BFS求最短路径', function () {
        expect(graph.getShortedPathByBfsToString('A')).toBe("A - B\nA - C\nA - D\nA - B - E\nA - B - F\nA - C - G\nA - D - H\nA - B - E - I\n");
    });
});
//# sourceMappingURL=Graph.test.js.map