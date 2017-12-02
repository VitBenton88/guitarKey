// Dependencies
// =============================================================
const passport = require('passport');
const db = require("../models");
const path = require("path");
const bcrypt = require('bcrypt');
const session = require('express-session');
const authenticationMiddleware = require('../utils/authenticationMiddleware');
const saltRounds = 10;
const request = require('request');
const Spotify = require('node-spotify-api');

// global variables
// =============================================================

const spotify_client_id = 'a9b8de9f1dd24a1eb6be9649bc0a784c';
const spotify_client_secret = 'bb29b6523f904ddda34879c5eb2c8f1e';
let userAuthToken = "";

// Routes
// =============================================================
module.exports = (app) => {

    // send basic index.html file in build dir at root
    app.get("/", (req, res) => {
        console.log(path.join(__dirname, "../client/build/index.html"));
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

    //get route to see if user is logged
    app.get("/user", (req, res) => {

        if (req.isAuthenticated()) { //if user is authenticated, send user info, otherwise send false
            res.send(req.user)
        } else {
            res.send(false)
        }

    });

    // register new user
    app.post("/register", (req, res) => {

        const email = req.body.email;
        const password = req.body.password;

        bcrypt.hash(password, saltRounds, (err, hash) => {

            const newUser = {
                email,
                password: hash
            };

            db.User
                .create(newUser)
                .then((user) => {

                    console.log("This is the userID for new user:");
                    console.log(user._id);

                    db.User
                        .findOne({ _id: user._id })
                        .then((signedInUser, error) => {

                            if (error) throw (error);

                            console.log("NEW USER CREATED: ");
                            console.log(signedInUser);
                            //deserialize config is expecting user.userID to be accessible
                            req.login({ userID: signedInUser._id }, (err) => {

                                if (err) { console.log(err); }

                                res.send(true);

                            })

                        })

                })
                .catch((err) => {
                    // If an error occurred, send it to the client
                    console.log(err);
                    res.send(false);
                });
        });

    });

    app.post("/login", passport.authenticate('local', {

        successRedirect: "/profile", //if login was successful, redirect to profile page
        failureRedirect: "/" //if login unseccussful, redirect to homepage

    }), );

    //user logout
    app.post("/logout", (req, res) => {

        console.log(`Logging out user:`);
        console.log(req.user);

        req.session.destroy((err) => {
            req.logout();
            res.send(true);
        })

    });

    // profile page. Only renders if authentication is verified, if not, redirect to root 
    app.get("/profile", authenticationMiddleware(), (req, res) => {

        //console log user info if any
        console.log(req.user);
        console.log(req.isAuthenticated());

        res.redirect("/")

    });

    //save selected keys to DB
    app.post("/saveKey", (req, res) => {

        const key = req.body.key.key;
        const _id = req.user._id;

        console.log(`Saving key of: ${key}`);
        console.log(`For user ${_id}`);


        db.User.update({ _id }, { $push: { keys: key } })
            .then((error) => {
                if (error) {
                    console.log(error);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });

    });

    //delete selected keys from DB
    app.post("/deleteKey", (req, res) => {

        const key = req.body.key.key;
        const _id = req.user._id;

        console.log(`Deleting key of: ${key}`);
        console.log(`For user ${_id}`);


        db.User.update({ _id }, { $pullAll: { keys: [ key ] } } )
            .then((error) => {
                if (error) {
                    console.log(error);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });

    });

    //search spotify API by artist, then in promise query spotify API and return top songs by that artist
    app.get("/spotify/artist", (req, res) => {

        let {artist} = req.query;

        // SET REQUEST BODY AND HEADER PARAMETER TO RUN SPOTIFY'S Client Credentials Flow AUTHORIZATION
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(`${spotify_client_id}:${spotify_client_secret}`).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };


        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                userAuthToken = body.access_token;

            }
        });

        let spotify = new Spotify({
            id: spotify_client_id,
            secret: spotify_client_secret
        });

        spotify
            .search({ type: 'artist', query: artist, limit: 3 })
            .then((response, error) => {

                if (error) {

                    res.send(error)

                } else {
                    const id = response.artists.items[0].id;
                    const options = {
                        url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
                        headers: {
                            Authorization: `Bearer ${userAuthToken}`
                        }
                    };

                    request(options, (error, tracks, body) => {
                        res.send(JSON.parse(body));

                    });

                };

            });
    });

    //get additional song information e.g. key, tempo, duration, ect
    app.get("/spotify/audiofeatures", (req, res) => {

        let {ids} = req.query;

        // SET REQUEST BODY AND HEADER PARAMETER TO RUN SPOTIFY'S Client Credentials Flow AUTHORIZATION
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(`${spotify_client_id}:${spotify_client_secret}`).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };


        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                userAuthToken = body.access_token;

            }
        });

        let spotify = new Spotify({
            id: spotify_client_id,
            secret: spotify_client_secret
        });

        const options = {
            url: `https://api.spotify.com/v1/audio-features/?ids=${ids}`,
            headers: {
                Authorization: `Bearer ${userAuthToken}`
            }
        };

        request(options, (error, tracks, body) => {
            res.send(JSON.parse(body));

        });

    });

    //for all other paths, redirect home
    app.get("/*", (req, res) => {

        res.redirect("/")

    });


};