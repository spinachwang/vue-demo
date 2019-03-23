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