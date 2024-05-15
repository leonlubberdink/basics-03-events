const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      return this.name === "" ? "" : `${this.name} Lubberdink`;
    },
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
    submitForm() {
      alert("Submitted Form!");
    },
    confirmName() {
      console.log("safgsdfg");
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
