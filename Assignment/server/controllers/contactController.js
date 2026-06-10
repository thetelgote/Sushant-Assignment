exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } =
      req.body;

    console.log({
      name,
      email,
      message,
    });

    res.status(200).json({
      success: true,
      message:
        "Message received successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};