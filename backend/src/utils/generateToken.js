import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // 1. Debug log to verify environment variable is loaded (Safe, doesn't print the actual secret)
  console.log('RUNTIME CHECK: JWT_SECRET is', process.env.JWT_SECRET ? 'LOADED ✅' : 'MISSING ❌');

  // 2. Fallback / Validation - Throw a clear error immediately if missing
  if (!process.env.JWT_SECRET) {
    console.error('FATAL ERROR: JWT_SECRET is not defined in the environment variables.');
    throw new Error('Server configuration error: JWT_SECRET is missing');
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as HTTP-only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
