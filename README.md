# 在 webpack 异步加载组件时 $refs 出错
# error occured in $refs when webpack loading components asynchronously

## Vue.js version

 2.0.7

## Reproduction Link



## Steps to reproduce

```
npm install

npm run dev

http://localhost:8080/
```

./src 下的 card.vue 是 Cardlist.vue 的孙组件

父组件 Cardlist 模拟的是传统的 feed 拖到底后，继续往下无限加载列表的场景。
this situation is about infinite scroll;

```
<card v-for="card in cards" ref="foo"></card>
```

我给循环输出的 card 定义了一个 ```ref='foo'```，所以在后面的 ```this.$refs.foo``` 会得到一个数组；

## What is Expected?

this.$refs.foo 的第0、1、2、3、……、n 项对应的 DOM 本应该也是第0、1、2、3、……、n 个，

## What is actually happening?

但当孙组件异步加载时， ```this.$refs.foo``` 的第0、1、2、3、……、n 项对应的 DOM 却是第0、0、1、2、……、(n-1)；
也就是说第 n 个 DOM 用 ```this.$refs``` 是永远取不到的；
而且第0个重复了2遍；

本例中使用 ```console.log(this.$refs.foo[0].$el === this.$refs.foo[1].$el);``` 在控制台输出一个的值，是用来检查 ```this.$refs.foo``` 的第0个和第1个的 DOM 是否为同一个的，chrome 下结果是 true。

PS:
孙组件同步加载时不会出现这个情况；
对子组件的拼接采用同步的方法时也不会出现这个情况（即本例中不使用setTimeout延迟的时候）；

不确定是 webpack 的还是 vue 的坑；
I am not sure which to blame...webpack or vue?

每次想提 issue 的时候就特别悔恨自己英文写作太烂……
