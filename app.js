const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    increment(number) {
      this.counter = this.counter + number;
    },
    decrement(number) {
      this.counter = this.counter - number;
    },
    setName(e) {
      this.name = e.target.value;
    },
  },
});

app.mount("#events");
