const userData = require('../MOCK_DATA.json')
module.exports = isAuthenticated = (req, res, next) => {

    if (userData.email.includes(req.params.email)) {
        return true;
   }
}
