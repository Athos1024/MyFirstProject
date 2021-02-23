"use strict";
//创建模式 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cline = void 0;
//柱状图类：具体产品类
var HistogramChart = /** @class */ (function () {
    function HistogramChart() {
        console.log('创建柱状图');
    }
    HistogramChart.prototype.display = function () {
        console.log('显示柱状图');
    };
    return HistogramChart;
}());
//饼状图类：具体产品类
var PieChart = /** @class */ (function () {
    function PieChart() {
        console.log('创建饼状图');
    }
    PieChart.prototype.display = function () {
        console.log('显示饼状图');
    };
    return PieChart;
}());
//折线图类：具体产品类
var LineChart = /** @class */ (function () {
    function LineChart() {
        console.log('创建折线图');
    }
    LineChart.prototype.display = function () {
        console.log('显示折线图');
    };
    return LineChart;
}());
//图表工厂类：工厂类
var ChartFactory = /** @class */ (function () {
    function ChartFactory() {
    }
    ChartFactory.getChart = function (type) {
        var chart = null;
        if (type == "histogram") {
            chart = new HistogramChart();
            console.log('"初始化设置柱状图！"');
        }
        else if (type == "pie") {
            chart = new PieChart();
            console.log('初始化设置饼状图！');
        }
        else if (type == "line") {
            chart = new LineChart();
            console.log('初始化设置折线图！');
        }
        return chart;
    };
    return ChartFactory;
}());
//客户端代码
var Cline = /** @class */ (function () {
    function Cline() {
    }
    Cline.prototype.mian = function () {
        var chart;
        chart = ChartFactory.getChart("pie");
        chart.display();
    };
    return Cline;
}());
exports.Cline = Cline;
var c = new Cline();
c.mian();
//# sourceMappingURL=testScript.js.map