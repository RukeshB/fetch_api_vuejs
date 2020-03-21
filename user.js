URL = 'https://mock-io.herokuapp.com/users';
var app1 = new Vue({
	el      : '#app1',
	data    : {
		users : []
	},
	mounted() {
		axios.get(URL).then((response) => {
			this.users = response.data;
			console.log(this.users);
		});
	}
});
