const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(number) {
      this.counter = this.counter + number;
    },
    decrement(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#events");
