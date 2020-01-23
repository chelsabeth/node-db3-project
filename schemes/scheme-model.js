const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep
}

function find() {
    return db.select('*').from('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
    return db.select('*')
    .from('steps')
    .where({ id });
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        return findById(ids[0]);
    });
}

function addStep(step, scheme_id) {
    return db('steps')
    .insert(step)
    .where({ scheme_id });
}