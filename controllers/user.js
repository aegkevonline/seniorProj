exports.reMainPage = (req, res, next) => {
    res.redirect('/main');
};

exports.getMainPage = (req, res, next) => {
    res.render('user/main', { pageTitle: 'Main Page', path: '/main' });
};

exports.getGear1 = (req, res, next) => {
    res.render('user/gear1', { pageTitle: 'Gear 1', path: '/gear1' });
};
