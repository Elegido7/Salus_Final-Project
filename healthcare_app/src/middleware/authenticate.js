import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    // Verify and decode the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.doctorId = decoded.id;
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

export default authenticate;
