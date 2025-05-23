const initial = (req, res) => {

    const name = req.body.name;
    console.log(name);
    if (!name) {
        res.status(400).json({ message: 'no name found' })
    }
    else {
        res.status(200).json({ message: 'message from contoller' });
    }

};
module.exports = initial;