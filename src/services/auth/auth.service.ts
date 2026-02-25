import { type User } from '../../store/slices/auth.slice';

// Mock login function that simulates DummyJSON response
export const authService = {
  async login(username: string, password: string): Promise<User> {
    // Simulate API call to DummyJSON
    
    //////////////
    if (username==="emilys@gmail.com"){username="emilys"; password="emilyspass"}
    else if (username==="michaelw@gmail.com"){username="michaelw"; password="michaelwpass"}
    //////////////
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await response.json();
    
    // Transform DummyJSON response to our User type
    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      image: data.image,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      role: 'student', // Will be overridden by slice based on username
    };
  },

  async logout(): Promise<void> {
    // Clear local storage or cookies if needed
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  validateToken(token: string): boolean {
    // Simple token validation
    return !!token && token.length > 10;
  },
};

export default authService;