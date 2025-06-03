const Landing = require('../../models/landingVideoSchema')

const getLandingVideo = async (req, res) => {
  try {
    const landing = await Landing.findOne(); // returns a single object
    if (!landing) {
      return res.status(404).json({ message: 'No landing video found' });
    }
    res.status(200).json(landing); // Send only the object
  } catch (error) {
    console.error('Error fetching Landing video:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getLandingVideo }