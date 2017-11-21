import axios from "axios";

export default {

	// nyAPI: function (topic, startYear, endYear) {

	//   	const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	// 	const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key
	// 	=${authKey}&q
	// 	=${topic}&begin_date
	// 	=${startYear}0101&end_date
	// 	=${endYear}0101`;

	// 	return axios.get(queryURL);
	// },

	getUser: () => {

	  	return axios.get("/user");
	},

	userRegister: (userData) => {

	  	return axios.post("/register", userData);
	},

	userLogin: (userData) => {

	  	return axios.post("/login", userData);
	},

	userLogout: () => {

	  	return axios.post("/logout");
	},

	userUpdate: (data) => {

	  	return axios.post("/logout", data);
	}

};