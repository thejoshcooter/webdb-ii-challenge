// import knex
const knex = require('knex');
// knex config
const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.db3'
    },
    useNullAsDefault: true,
    // debug: true
}
// implement knex connection
const db = knex(knexConfig);

// mod exports
module.exports = {
    find,
    findById,
    add,
    remove,
    update
}

// db functions
function find() {
  return db("zoos");
}

function findById(id) {
  return db("zoos")
    .where({ id })
    .first();
}

async function add(zoo) {
  return db("zoos")
  .insert(zoo)
}

function update(id, changes) {
  return db("zoos")
  .where({ id })
  .update(changes, '*')
}

function remove(id) {
  return db("zoos")
  .where({ id })
  .del();
}
  