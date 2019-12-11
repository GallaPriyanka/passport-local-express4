const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', { });
    // res.render('home', { user : req.user });
});

router.get('/about_us', (req, res) => {
    res.render('about_us', { });
    // res.render('home', { user : req.user });
});

router.get('/register', (req, res) => {
    console.log('get register')
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    console.log('post register')
    const user = new Account()
    user.username = req.body.username
    user.gender = req.body.gender
    user.age = req.body.age
    user.email = req.body.email
    user.mobile_number = req.body.mobile_number
    user.address_line_1 = req.body.address_line_1
    user.address_line_2 = req.body.address_line_2
    user.street = req.body.street
    user.city = req.body.city
    user.state = req.body.state
    user.zipcode = req.body.zipcode
    user.password = req.body.password
    user.save((err) => {
      if (err) { return res.end('ERROR: User could not be saved') }
      return res.redirect('ride_booking')
    })
  })

// router.post('/register', (req, res, next) => {
//     Account.register(new Account({ username : req.body.username }, {gender = req.body.gender}, {age = req.body.age},
//         {email = req.body.email}, {mobile_number = req.body.mobile_number}, {address_line_1 = req.body.address_line_1},
//         {address_line_2 = req.body.address_line_2}, {street = req.body.street}, {city = req.body.city},
//         {state = req.body.state}, {zipcode = req.body.zipcode}, {password = req.body.password }), req.body.password, (err, account) => {
//         if (err) {
//           return res.render('register');
//         }

//         passport.authenticate('local')(req, res, () => {
//             req.session.save((err) => {
//                 if (err) {
//                     return next(err);
//                 }
//                 res.redirect('/');
//             });
//         });
//     });
// });


router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ride_booking', (req, res) => {
    res.render('ride_booking', { });
    // res.render('home', { user : req.user });
});

router.get('/passenger_list', (req, res) => {
    res.render('passenger_list', { });
    // res.render('home', { user : req.user });
});

router.get('/ride_confirmation', (req, res) => {
    res.render('ride_confirmation', { });
    // res.render('home', { user : req.user });
});

router.get('/adminlogin', (req, res) => {
    res.render('adminlogin', { });
    // res.render('home', { user : req.user });
});

router.get('/deleteuser', (req, res) => {
    res.render('deleteuser', { });
    // res.render('home', { user : req.user });
});

router.get('/newusers', (req, res) => {
    res.render('newusers', { });
    // res.render('home', { user : req.user });
});

router.get('/managedrivers', (req, res) => {
    res.render('managedrivers', { });
    // res.render('home', { user : req.user });
});

router.get('/deletedriver', (req, res) => {
    res.render('deletedriver', { });
    // res.render('home', { user : req.user });
});

router.get('/newdrivers', (req, res) => {
    res.render('newdrivers', { });
    // res.render('home', { user : req.user });
});

router.get('/manageroutes', (req, res) => {
    res.render('manageroutes', { });
    // res.render('home', { user : req.user });
});

router.get('/deleteroutes', (req, res) => {
    res.render('deleteroutes', { });
    // res.render('home', { user : req.user });
});

router.get('/newroutes', (req, res) => {
    res.render('newroutes', { });
    // res.render('home', { user : req.user });
});

router.get('/admin_home', (req, res) => {
    res.render('admin_home', { });
    // res.render('home', { user : req.user });
});

router.get('/cancellation_confirmation', (req, res) => {
    res.render('cancellation_confirmation', { });
    // res.render('home', { user : req.user });
});

router.get('/payment_confirmation', (req, res) => {
    res.render('payment_confirmation', { });
    // res.render('home', { user : req.user });
});

router.get('/tracking', (req, res) => {
    res.render('tracking', { });
    // res.render('home', { user : req.user });
});

router.get('/ride_cancel', (req, res) => {
    res.render('ride_cancel', { });
    // res.render('home', { user : req.user });
});

router.get('/contact', (req, res) => {
    res.render('contact', { });
    // res.render('home', { user : req.user });
});

router.get('/payment', (req, res) => {
    res.render('payment', { });
    // res.render('home', { user : req.user });
});

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
