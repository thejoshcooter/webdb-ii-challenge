// implement router
const express = require('express');
const router = express.Router();
// import db model
const zoosModel = require('./zoosModel');

// implement default error handling
const sendError = (status, msg, err) => {
    res.status(status).json({ errorMessage: msg });
    return;
}

// routes
router.get('/', (req, res) => {
    res.status(200).json({ status: 'casting black magic' })
});

router.get('/:id', (req,res) => {
    res.status(200).json({ status: 'casting black magic' })
});

router.post('/', (req, res) => {
    res.status(200).json({ status: 'casting black magic' })
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ status: 'casting black magic' })
});

router.put('/:id', (req, res) => {
    res.status(200).json({ status: 'casting black magic' })
});

// export router
module.exports = router;