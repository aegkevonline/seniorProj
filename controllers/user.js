exports.reLogin = (req, res, next) => {
    res.redirect('/login');
};

exports.getLogin = (req, res, next) => {
    res.render('user/login', { pageTitle: 'Log In', path: '/login' });
};

exports.postAuth = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        if (username == 'aegkevonline' && password == '12345') {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/home');
        } else {
            res.redirect('/login');
        }
    }
};

exports.getHomePage = (req, res, next) => {
    if (req.session.username) {
        res.render('user/home', { pageTitle: 'Home Page', path: '/home' });
    } else {
        res.redirect('/login');
    }
};

exports.getPanel1 = (req, res, next) => {
    if (req.session.username) {
        res.render('user/panel1', { pageTitle: 'Panel 1', path: '/panel1' });
    } else {
        res.redirect('/login');
    }
};

exports.getLogout = (req, res, next) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login');
    });
};


