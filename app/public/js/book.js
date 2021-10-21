const BookApp = {
    data() {
      return {
        books: [],
        newBookForm: {}
      }
    },
    computed: {},
    methods: {
        prettyMSRP(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    fetchBooks(s) {
        console.log("Fetching data for ", s);
        fetch('/api/offer/?student=' + s.id)
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            this.offers = responseJson;
        })
        .catch( (err) => {
            console.error(err);
        })
        .catch( (error) => {
            console.error(error);
        });
    },
    postNewBooks(evt) {     
                
        console.log("Posting!", this.booksForm);
        alert("posting!");

        fetch('api/books/create.php', {
            method:'POST',
            body: JSON.stringify(this.booksForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.booksForm = {};
          });
      },
    handleEditOffer(newBook) {
        this.selectedBook = offer;
        this.newBookForm = Object.assign({}, this.selectedOffer);
    },
    handleResetEdit(newBook) {
        this.selectedBook = null;
        this.newBookForm = {};
    },
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(BookApp).mount('#booksApp');