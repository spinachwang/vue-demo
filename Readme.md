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
8. vue会复用元素, 如果是独立的，需要加上key属性

