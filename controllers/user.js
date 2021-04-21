exports.reHomePage = (req, res, next) => {
    res.redirect('/home');
};

exports.getHomePage = (req, res, next) => {
    res.render('user/home', { pageTitle: 'Home Page', path: '/home' });
};

exports.getPanel1 = (req, res, next) => {
    res.render('user/panel1', { pageTitle: 'Panel 1', path: '/panel1' });
};
