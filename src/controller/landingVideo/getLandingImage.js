const Landing = require('../../models/landingImageSchema')

const getLandingImage = async (req, res) => {
  try {
    const landing = await Landing.findOne(); // returns a single object
    if (!landing) {
      return res.status(404).json({ message: 'No landing Image found' });
    }
    res.status(200).json(landing); // Send only the object
  } catch (error) {
    console.error('Error fetching Landing Image:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getLandingImage }