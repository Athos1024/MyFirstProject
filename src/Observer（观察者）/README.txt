*观察者模式：
·定义：指多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。这种模式有时又称作发布-订阅模式、模型-视图模式
·解释：在前端开发中应用得十分普遍，典型的就是事件监听与触发
·场景：
  -- 事件监听与触发
  -- 软件公司欲开发一款多人联机对战游戏（类似魔兽世界、星际争霸等游戏），在该游戏中，多个玩家可以加入同一战队组成联盟，当战队中某一成员受到敌人攻击时将给所有其他盟友发送通知，盟友收到通知后将作出响应。
  -- Excel 中的数据与折线图、饼状图、柱状图之间的关系
·优点：
  -- 降低了目标与观察者之间的耦合关系，两者之间是抽象耦合关系。
  -- 目标与观察者之间建立了一套触发机制。
·缺点：
  -- 目标与观察者之间的依赖关系并没有完全解除，而且有可能出现循环引用。
  -- 当观察者对象很多时，通知的发布会花费很多时间，影响程序的效率。
