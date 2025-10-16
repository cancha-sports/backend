import AuthService from "../../application/services/AuthService.js";
import AppError from "../../shared/errors/AppError.js";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Access token is required.", 401);
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix
    const decoded = AuthService.verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(error.statusCode || 401).json({ error: error.message });
  }
};

export const optionalAuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);
      const decoded = AuthService.verifyToken(token);
      req.user = decoded;
    }

    next();
  } catch (error) {
    // If token is invalid, just continue without user
    next();
  }
};
