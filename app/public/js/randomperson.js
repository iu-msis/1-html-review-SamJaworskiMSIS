const Person = {
    data() {
      return {
        //make person undefined so that there are less errors in the console
        "person": undefined,
        }
    },

    computed: {
      prettyBirthday() {
          return dayjs(this.person.dob.date)
          .format('D MMM YYYY');
      }
    },

    methods: {
      fetchUserData() {
          fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]
           // this.nameF = this.person.name.first
           // this.nameL = this.person.name.last
            this.nationality = this.person.nat
            this.bday = this.person.dob.date
            this.age = this.person.dob.date
            this.email = this.person.dob.date
            this.picture = this.person.picture.medium
          })
          .catch( err => {
              console.error(err)
          })

          console.log("B");
      }
  },
  created() {
      this.fetchUserData();
  }

  }
  
Vue.createApp(Person).mount('#personApp');