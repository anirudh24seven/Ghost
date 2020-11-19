const {dropTable, combineNonTransactionalMigrations} = require('../../utils');

module.exports = combineNonTransactionalMigrations(
    dropTable('client_trusted_domains'), // first due to foreign key constraint on client_id
    dropTable('clients')
);

module.exports.config = {
    irreversible: true
};
