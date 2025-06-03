const Highlights = require('../../models/highlightSchema');

const addHighlight = async (req, res) => {
  try {
    const { highlights } = req.body;

    if (!highlights) {
      return res.status(400).json({ message: 'Highlights video URL is required' });
    }

    // Always update the one and only landing video document
    const updatedHighlights = await Highlights.findOneAndUpdate(
      {},
      { highlights },
      {
        new: true,      // return the updated document
        upsert: true,   // create it if it doesn't exist
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({
      message: 'Highlights video saved successfully',
      data: updatedHighlights
    });
  } catch (error) {
    console.error('Error saving Landing video:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addHighlight };
