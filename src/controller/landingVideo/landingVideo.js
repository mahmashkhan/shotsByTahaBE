const Landing = require('../../models/landingVideoSchema');

const landing = async (req, res) => {
  try {
    const { landingVideo } = req.body;

    if (!landingVideo) {
      return res.status(400).json({ message: 'Landing video URL is required' });
    }

    // Always update the one and only landing video document
    const updatedLanding = await Landing.findOneAndUpdate(
      {},
      { landingVideo },
      {
        new: true,      // return the updated document
        upsert: true,   // create it if it doesn't exist
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({
      message: 'Landing video saved successfully',
      data: updatedLanding
    });
  } catch (error) {
    console.error('Error saving Landing video:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { landing };
