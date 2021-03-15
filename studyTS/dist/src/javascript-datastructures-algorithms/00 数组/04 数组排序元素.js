var arr = [1, 2, 3];
//颠倒
arr.reverse();
//排序
arr.sort();
//自定义排序
var friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
];
friends.sort(function (a, b) { return a.age - b.age; });
//字符串排序
var names = ['Ana', 'ana', 'john', 'John'];
// console.log(names.sort()) //[A J  a j]
names.sort(function (a, b) { return b.localeCompare(a); });
console.log(names);
//# sourceMappingURL=04%20%E6%95%B0%E7%BB%84%E6%8E%92%E5%BA%8F%E5%85%83%E7%B4%A0.js.map