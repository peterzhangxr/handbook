## Set和WeakSet
WeakSet和Set类似，都是不重复的集合
* 成员都是数据或类似数组的对象
* WeakSet是弱引用 可以被垃圾回收机制回收 可以用来保存Dom节点，不容易造成内存泄漏
* WeakSet不可迭代，因此不能被用在for-of等循环中
* WeakSet没有size属性

## Map 和 Object 的区别
1. Object 对象有原型， 也就是说他有默认的 key 值在对象上面， 除非我们使用 Object.create(null)创建一个没有原型的对象；
2. 在 Object 对象中， 只能把 String 和 Symbol 作为 key 值， 但是在 Map 中，key 值可以是任何基本类型(String, Number, Boolean, undefined, NaN….)，或者对象(Map, Set, Object, Function , Symbol , null….);
3. 通过 Map 中的 size 属性， 可以很方便地获取到 Map 长度， 要获取 Object 的长度， 你只能手动计算

## WeakMap
WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。
* 只接受对象作为键名（null 除外），不接受其他类型的值作为键名
* 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
* 不能遍历，方法有 get、set、has、delete


**在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。**

* 1. 在 DOM 对象上保存相关数据

* 2. 数据缓存
* 3. 私有属性