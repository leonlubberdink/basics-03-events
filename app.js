const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  computed: {
    fullName() {
      return this.name === "" || this.lastName === ""
        ? ""
        : `${this.name} ${this.lastName}`;
    },
  },
  watch: {
    // name(newValue) {
    //   this.fullName = newValue === "" ? "" : `${newValue} Lubberdink`;
    // },
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
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
