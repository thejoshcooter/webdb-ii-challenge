// import knex
const knex = require('knex');

// implement router
const express = require('express');
const router = express.Router();
// import db model
const Zoos = require('./zoosModel');


// implement default error handling
const sendError = (status, msg, err) => {
    res.status(status).json({ errorMessage: msg });
    return;
}

// routes
router.get('/', (req, res) => {
    // res.status(200).json({ status: 'casting black magic' })
    Zoos.find()
    .then(zoos => {
        res.status(200).json(zoos)
    })
    .catch(error => {
        sendError(500, 'error fetching zoos', error)
    })
});

router.get('/:id', (req, res) => {
    // res.status(200).json({ status: 'casting black magic' })
    const id = req.params.id;
    Zoos
    .findById(id)
    .then(zoo => {
        if(zoo) {
            res.status(200).json(zoo)
        } else {
            res.status(404).json({ message: 'zoo not found' })
        }
    })
    .catch(error => {
        sendError(500, 'error finding zoo id', error);
    })
});

router.post('/', (req, res) => {
    // res.status(200).json({ status: 'casting black magic' })
    const zoo = req.body;
    console.log(req.body);
    Zoos
    .add(zoo)
    .then(zoo => {
        res.status(201).json(zoo);
    })
    .catch(error => {
        sendError(500, 'error adding zoo to db', error )
    })
});

router.delete('/:id', (req, res) => {
    // res.status(200).json({ status: 'casting black magic' })
    const id = req.params.id;
    Zoos
    .remove(id)
    .then(zoo => {
        res.status(200).json(zoo);
    })
    .catch(error => {
        sendError(500, 'error deleting', error);
    })
});

router.put('/:id', (req, res) => {
    // res.status(200).json({ status: 'casting black magic' })
    const id = req.params.id;
    const zooDetails = req.body;

    Zoos
    .update(id, zooDetails)
    .then(zoo => {
        res.status(200).json(zoo)
    })
    .catch(error => {
        sendError(500, 'error updating zoo', error)
    })
});

// export router
module.exports = router;