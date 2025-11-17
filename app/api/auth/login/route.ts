import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Λογική για έλεγχο χρήστη με bcrypt και jwt
  const token = jwt.sign({ email }, 'your_jwt_secret');
  return new Response(JSON.stringify({ token }));
}
