const {dropTable, combineNonTransactionalMigrations} = require('../../utils');

module.exports = combineNonTransactionalMigrations(
    dropTable('accesstokens'),
    dropTable('refreshtokens')
);
