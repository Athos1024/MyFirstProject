// //创建模式 1
//     //抽象图表接口,抽象产品接口
//     interface Chart {
//         display(): void;
//     }
//     //柱状图类：具体产品类
//     class HistogramChart implements Chart {
//         constructor(){
//             console.log('创建柱状图');
//         }
//         display(): void {
//             console.log('显示柱状图');
//         }
//     }
//     //饼状图类：具体产品类
//     class PieChart implements Chart{
//         constructor(){
//             console.log('创建饼状图');
//         }
//         display(): void {
//             console.log('显示饼状图');
//         }
//     }
//     //折线图类：具体产品类
//     class LineChart implements Chart{
//         constructor(){
//             console.log('创建折线图');
//         }
//         display(): void {
//             console.log('显示折线图');
//         }
//     }
//     //图表工厂类：工厂类
//     class ChartFactory {
//         public static getChart(type:string):Chart{
//             let chart:Chart = null;
//             if(type == "histogram"){
//                 chart = new HistogramChart();
//                 console.log('"初始化设置柱状图！"');
//             }else if(type == "pie"){
//                 chart = new PieChart();
//                 console.log('初始化设置饼状图！');
//             }else if(type == "line"){
//                 chart = new LineChart();
//                 console.log('初始化设置折线图！');
//             }
//             return chart;
//         }
//     }
//     //客户端代码
//     export class Cline{
//         public mian():void{
//             let chart:Chart;
//             chart = ChartFactory.getChart("pie");
//             chart.display();
//         }
//     }
//     let c = new Cline();
//     c.mian()
/// <reference path = "./DesignModel" />
//# sourceMappingURL=testScript.js.map