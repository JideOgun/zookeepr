const path = require('path');
const router = require('express').Router();




// ADDING A GET ROUTE FOR THE INDEX HOMEPAGE
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// ADDING A GET ROUTE FOR THE ANIMALS PAGE
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// ADDING A GET ROUTE FOR THE ZOOKEEPERS PAGE
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

//ADDING A WILCARD ROUTE I.E ROUTES THAT DO NOT EXIST
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;