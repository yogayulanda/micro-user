const { User } = require('../../../models');

module.exports = async (req, res) => {


    const userIds = req.query.user_ids || [];

    // Search User berdasarkan parameter Id yang Diinputkan
    const sqlOPtions = {
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    }

    if (userIds.length){
        sqlOPtions.where = {
            id: userIds
        }
    }

// Search User ALL
    const users = await User.findAll(sqlOPtions);
    
    return res.json({
        status: 'Success',
        data: users
    });
}
