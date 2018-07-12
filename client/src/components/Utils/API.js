import axios from "axios";

export default {

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
	},

	saveKey: (data) => {
		return axios.post("/saveKey", data);
	},

	deleteKey: (data) => {
		return axios.post("/deleteKey", data);
	},

	spotifyArtist: (artist) => {
		return axios.get(`/spotify/artist?artist=${artist}`);
	},

	spotifyAudioFeatures: (ids) => {
		return axios.get(`/spotify/audiofeatures?ids=${ids.join(",")}`);
	},

	getTabs: (artist, song) => {
		return axios.get(`/tabs?artist=${artist}&song=${song}`);
	}

};
