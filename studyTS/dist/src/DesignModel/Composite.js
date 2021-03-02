"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composite = void 0;
//组合模式
var Composite;
(function (Composite) {
    /**
    优点： 1、高层模块调用简单。 2、节点自由增加。
    缺点：在使用组合模式时，其叶子和树枝的声明都是实现类，而不是接口，违反了依赖倒置原则。
     */
    var Employee = /** @class */ (function () {
        function Employee(name, dept, sal) {
            this.name = name;
            this.dept = dept;
            this.salary = sal;
            this.eList = [];
        }
        Employee.prototype.add = function (e) {
            this.eList.push(e);
        };
        Employee.prototype.remove = function (e) {
            var index = this.eList.indexOf(e);
            this.eList.splice(index, 1);
        };
        Employee.prototype.getSubordinates = function () {
            return this.eList;
        };
        Employee.prototype.toString = function () {
            return this.name + "  " + this.dept + "  " + this.salary;
        };
        return Employee;
    }());
    var CompositeDemo = /** @class */ (function () {
        function CompositeDemo() {
        }
        CompositeDemo.client = function () {
            var CEO = new Employee("小米", "CEO", 30000);
            var headSales = new Employee("小明", "Sales", 20000);
            var headMarketing = new Employee("小马", "Marketing", 20000);
            var clerk1 = new Employee("小号", "Marking", 10000);
            var clerk2 = new Employee("小天", "Marking", 10000);
            var salesExecutive1 = new Employee("小a", "sales", 10000);
            var salesExecutive2 = new Employee("小b", "sales", 10000);
            CEO.add(headSales);
            CEO.add(headMarketing);
            headMarketing.add(clerk1);
            headMarketing.add(clerk2);
            headSales.add(salesExecutive1);
            headSales.add(salesExecutive2);
            for (var i = 0; i < CEO.getSubordinates().length; i++) {
                var element = CEO.getSubordinates()[i];
                console.log(element.toString());
                for (var j = 0; j < element.getSubordinates().length; j++) {
                    var item = element.getSubordinates()[j];
                    console.log(item.toString());
                }
            }
        };
        return CompositeDemo;
    }());
    Composite.CompositeDemo = CompositeDemo;
})(Composite = exports.Composite || (exports.Composite = {}));
//# sourceMappingURL=Composite.js.map