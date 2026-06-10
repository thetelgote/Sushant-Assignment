exports.scanUrl = async (req, res) => {
  try {
    const { url } = req.body;

    let riskLevel = "safe";
    let score = 95;
    let details =
      "No suspicious activity detected.";

    if (
      url.includes("free") ||
      url.includes("login") ||
      url.includes("verify")
    ) {
      riskLevel = "high";
      score = 25;
      details =
        "Potential phishing indicators detected.";
    }

    res.status(200).json({
      success: true,
      riskLevel,
      score,
      details,
      categories: [
        "URL Analysis",
        "Phishing Detection",
      ],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};