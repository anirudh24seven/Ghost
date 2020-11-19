const {dropTable} = require('../../utils');

module.exports = dropTable('subscribers');

module.exports.config = {
    irreversible: true
};
