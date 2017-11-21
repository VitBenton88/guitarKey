// Dependencies
// =============================================================
const passport = require('passport');
const db = require("../models");
const path = require("path");
const bcrypt = require('bcrypt');
const session = require('express-session');
const authenticationMiddleware = require('../utils/authenticationMiddleware');
const saltRounds = 10;

// Routes
// =============================================================
module.exports = (app) => {

    // send basic index.html file at root
    //send to react app on root dir
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

        successRedirect: "/", //if login was successful, redirect to profile page
        failureRedirect: "/" //if login unseccussful, redirect to homepage

    }), );

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


};