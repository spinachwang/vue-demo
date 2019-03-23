let app1 = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
})

let app2 = new Vue({
    el: '#app2',
    data: {
        message: 'title 绑定'
    }
})

let app3 = new Vue({
    el: '#app3',
    data: {
        seen: false
    }
})

let app4 = new Vue({
    el: '#app4',
    data: {
        items: [
            {
                id: 1,
                text: 'a'
            },{
                id: 2,
                text: 'b'
            },{
                id: 3,
                text: 'c'
            }

        ]
    }
})

let app5 = new Vue({
    el: '#app5',
    data: {
        message: 'hello bob'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})


let app6 = new Vue({
    el: '#app6',
    data: {
        message: 'hello app6'
    }
})

Vue.component('todo-item', {
    template: '<li>{{ todo.text }}</li>',
    props: ['todo']
})

let ap7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})

let app8 = new Vue({
    el: '#app8',
    data: {
        attrName: 'href',
        url: 'www.baidu.com'
    }
})

let app9 = new Vue({
    el: '#app9',
    data: {
        message: 'hello computed'
    },
    computed: {
        reverseMessage: {
            get: function() {
                return this.message.split('').reverse().join('');
            },
            set: function(val) {
                this.message = this.message + val
            }
        }
        
    }
})

let app10 = new Vue({
    el: '#app10',
    data: {
        curClass: {
            curBackgroundColor: true
        },
        curStyle: {
            'font-size': '20px'
        }
    }
})


