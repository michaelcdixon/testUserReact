var express = require('express');
var router = express.Router();

// Requiring the User Model
const User = require("../models/User.object");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Obtaining the list of users
router.get("/users", async (req, res, next) => {
  const users = await User.find();
  
  //console.log(users); - to check if working

  res.render("users/list", { users });
})

// Creating a new User
router.get("/users/create", (req, res, next) => {
  res.render("users/createForm");
})

router.post("/users/create", async (req, res, next) => {

  const { id, userName, givenName, surName, DOB } = req.body;

  await User.create({
    id,
    userName,
    givenName,
    surName,
    DOB,
  });
  res.redirect("/users");
});

//Updating User information
router.get("/users/:id/edit", async (req, res, next) => {

  const users = await User.findById(req.params.id);
  res.render("users/update-form", users);

});

router.post("/users/:id/edit", async (req, res, next) => {

  const { id, userName, givenName, surName, DOB } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    id,
    userName,
    givenName,
    surName,
    DOB,
  });
  res.redirect("/users");
})

//Deleting users information
router.post("/users/:id/edit", async (req, res, next) => {
  
  await User.findByIdAndDelete(req.params.id);

  res.redirect("/users");

})

// If if having to deal with User session

// router.post("/request", async (req, res) => {
//   const { id, userName, givenName, surName, DOB } = req.body;

//   const User = await User.findById(req.session.currentUser.id);

//   await User.create({
//     id,
//     userName,
//     givenName,
//     surName,
//     DOB
//   });
// })

module.exports = router;
