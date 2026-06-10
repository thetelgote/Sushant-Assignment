exports.chatBot = async (req, res) => {
  try {
    const { message } = req.body;

    let reply =
      "I'm NetraSecure AI. I can help with cybersecurity questions.";

    if (
      message.toLowerCase().includes("phishing")
    ) {
      reply =
        "Phishing is a cyber attack where attackers trick users into revealing sensitive information through fake websites, emails, or messages.";
    }

    if (
      message.toLowerCase().includes("2fa")
    ) {
      reply =
        "Two-Factor Authentication (2FA) adds an extra layer of security by requiring a second verification step.";
    }

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};