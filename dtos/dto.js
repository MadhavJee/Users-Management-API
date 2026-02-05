export const validateCreateUserDTO = (req, res, next) => {
  console.log("Using DTO to check data validation");

  const { name, email } = req.body;

  // Body check
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  // Name validation
  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 2 characters"
    });
  }

  // Email validation (simple)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  next(); // ✅ validation passed
};
