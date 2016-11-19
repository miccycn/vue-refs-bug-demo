<template>
  <div>
    <card v-for="card in cards" ref="foo"></card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        cards: [],
      };
    },
    created() {
      this.next();
      window.addEventListener('scroll', () => {
        if (this.$el.getBoundingClientRect().bottom - window.innerHeight < 100) {
          this.next();
        }
      });
    },
    methods: {
      next() {
        if (!this.loading) {
          try {
            console.log(this.$refs.foo[0].$el === this.$refs.foo[1].$el);
          } catch (e) {
          // ..
          }
          this.loading = true;
          setTimeout(() => {
            this.cards = this.cards.concat([0]);
            this.loading = false;
          }, 1000);
        }
      }
    },
    components: {
      card: {
        template: '<children></children>',
        components: {
          // children: require('./card.vue')     // 同步加载时是 ok 的
          children: function (resolve) {     // 异步加载时 $refs 就出问题了
            require(['./card.vue'], resolve);
          }
        }
      },
    }
  };
</script>
