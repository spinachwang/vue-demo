1. 只有 初始定义的data属性才会监听, 因为是由defineProperty实现的
2. 使用Object.freeze()冻结属性,就可以禁止监听
3. 使用$来访问vue实例的属性比如 vm.$data, vm.$watch
4. 生命周期
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdated
- updated
- beforeDestroy
- destoryed
5. 文档的动态参数无效,不知道为啥
6.  计算属性是由缓存的, 有依赖的情况下，依赖的一方变化,计算属性才会执行,不想有缓存请使用方法
7. watch是使用在数据变化需要请求ajax，或者开销较大的工作时使用
8. vue会复用元素, 复用元素的意思是dom元素不变, vue的值还是会变动的. 如果dom元素会有特殊属性，比如checkbox，点击的时候选中的是当前的checkbox元素, 如果此时添加一个checkbox，将还是会选中之前的checkbox元素，而不是跟着值走
9. Vue的数组变异方法（会改变当前数组）, 这些方法也会触发视图更新, 如果是不会改变当前数组的方法，直接用返回的覆盖当前数组
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
10. Vue检测不了直接利用索引赋值和修改数组长度的数组，用下面方法代替
- Vue.set(vm.items, 数组下标, newValue)
- vm.$set(vm.items, 下标, newValue)
- 修改长度, vm.items.splice(newLength)
11. Vue同样检测不了对象的属性添加删除，用下面方法代替
- Vue.set(vm.userProfile, 属性key, value)
- vm.$set(vm.userProfile, 属性key, value)
12. 如果要赋值多个新属性, 需要去创建一个新对象
```
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```
13. 事件的修饰符
- .stop              阻止事件传播
- .prevent           阻止默认事件
- .capture           捕获阶段执行,也就是先父级执行
- .self              只有是自己触发是才调用，冒泡传递上来的不调用
- .once
- .passive           阻止默认行为, prevent可能会导致卡顿（用在滚动条上）
14. 静止继承特性 inheritAttrs: false, 意思是定义组件的时候加上这个属性。当用到这个组件并且加上属性之后，组件内部不会继承到这个属性
15. 事件名用kebab-case
16. 利用model属性, 可以配置组件的双向绑定的prop和event
```
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```
17. this.$listeners  用来访问元素传进来的事件, this.$attrs 用来访问元素传进来的props
18. 父子组件双向绑定最好用 v-bind-sync ，原理是用的事件触发，这样不会导致子组件会把父组件的值改变
19. 插槽不鞥访问父组件的作用域。 可以绑定变量到slot上面就可以访问了

