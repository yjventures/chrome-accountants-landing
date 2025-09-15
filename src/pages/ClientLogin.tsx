import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Shield, Calendar, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import FirstTimeLogin from '@/components/FirstTimeLogin';
import apiService from '@/services/api';

const ClientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [showFirstTimeLogin, setShowFirstTimeLogin] = useState(false);
  const [showLoginCode, setShowLoginCode] = useState(false);
  const [loginCode, setLoginCode] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log('Attempting login with:', loginData.email);
      const res = await apiService.login({
        email: loginData.email.trim(),
        password: loginData.password
      });

      console.log('Login response:', res);
      console.log('Response status:', res.status);
      console.log('Response ok:', res.ok);

      if (res.ok) {
        const result = await res.jsonSafe();
        console.log('Login result:', result);
        if (result && result.user) {
          const { type } = result.user; // Backend uses 'type' field, not 'role'
          
          // Store token and role
          if (result.token) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("role", type);
          }
          
          // Redirect based on type
          if (type === 'admin') {
            navigate('/admin-dashboard');
          } else {
            navigate('/client-dashboard');
          }
        } else {
          setError('Invalid response from server.');
        }
      } else {
        const errorData = await res.jsonSafe();
        const errorMessage = (errorData as any)?.message || 'Login failed. Please check your credentials.';
        
        // Check if this is a first-time login error
        if (errorMessage === 'Please update your password to login') {
          setShowFirstTimeLogin(true);
          setError(null);
        } else {
          setError(errorMessage);
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFirstTimeLoginSuccess = () => {
    setShowFirstTimeLogin(false);
    setError(null);
    // Try to login again with the new password
    handleSubmit(new Event('submit') as any);
  };

  const handleBackToLogin = () => {
    setShowFirstTimeLogin(false);
    setError(null);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
    setError(null);
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotPasswordEmail.trim()) {
      setError('Please enter your email address');
      return;
    }

    setIsSendingCode(true);
    setError(null);

    try {
      const res = await apiService.forgotPassword(forgotPasswordEmail.trim());
      if (res.ok) {
        setShowForgotPasswordModal(false);
        setShowLoginCode(true);
        setLoginData(prev => ({ ...prev, email: forgotPasswordEmail.trim() }));
        setError(null);
      } else {
        const errorData = await res.jsonSafe();
        setError((errorData as any)?.message || 'Failed to send login code');
      }
    } catch (err) {
      console.error('Forgot password error:', err);
      setError('Network error. Please try again.');
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleLoginCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginCode.trim()) {
      setError('Please enter the login code');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await apiService.verifyLoginCode(loginData.email.trim(), loginCode.trim());
      if (res.ok) {
        const result = await res.jsonSafe();
        if (result && result.user) {
          const { type } = result.user;
          
          // Store token and role
          if (result.token) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("role", type);
          }
          
          // Redirect based on type
          if (type === 'admin') {
            navigate('/admin-dashboard');
          } else {
            navigate('/client-dashboard');
          }
        } else {
          setError('Invalid response from server.');
        }
      } else {
        const errorData = await res.jsonSafe();
        setError((errorData as any)?.message || 'Invalid login code');
      }
    } catch (err) {
      console.error('Login code verification error:', err);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToPasswordLogin = () => {
    setShowLoginCode(false);
    setLoginCode('');
    setError(null);
  };

  const handleCloseForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
    setForgotPasswordEmail('');
    setError(null);
  };

  const portalFeatures = [
    {
      icon: <Calendar className="h-6 w-6 text-ca-mango" />,
      title: "Appointments",
      description: "Book meetings, view upcoming appointments, and manage your calendar"
    },
    {
      icon: <Users className="h-6 w-6 text-ca-mango" />,
      title: "Communication",
      description: "Email your dedicated accountant and track conversation history"
    },
  ];

  // Show first-time login component if needed
  if (showFirstTimeLogin) {
    return (
      <FirstTimeLogin
        email={loginData.email}
        onSuccess={handleFirstTimeLoginSuccess}
        onBack={handleBackToLogin}
      />
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-ca-mango rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-ca-blue" />
              </div>
              <h2 className="text-2xl font-bold text-ca-blue mb-2">Forgot Password?</h2>
              <p className="text-ca-text">
                Enter your email address and we'll send you a login code
              </p>
            </div>

            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ca-blue mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-ca-text" />
                  <input
                    type="email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseForgotPasswordModal}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSendingCode}
                  className="flex-1"
                >
                  {isSendingCode ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-ca-blue mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Login Code'
                  )}
                </Button>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Login Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-ca-mango rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-ca-blue" />
                </div>
                <h1 className="text-3xl font-bold text-ca-blue mb-2">Client Portal</h1>
                <p className="text-ca-text">
                  Access your secure financial dashboard and documents
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                {!showLoginCode ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-ca-blue mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-ca-text" />
                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ca-blue mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-ca-text" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-ca-text hover:text-ca-blue"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-ca-mango focus:ring-ca-mango"
                      />
                      <span className="ml-2 text-sm text-ca-text">Remember me</span>
                    </label>
                    
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-ca-mango hover:text-ca-blue font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-ca-blue mr-2"></div>
                        Signing in...
                      </div>
                    ) : (
                      'Sign In to Portal'
                    )}
                  </Button>

                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>
                ) : (
                  <form onSubmit={handleLoginCodeSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-ca-mango rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-8 w-8 text-ca-blue" />
                      </div>
                      <h2 className="text-2xl font-bold text-ca-blue mb-2">Check Your Email</h2>
                      <p className="text-ca-text">
                        We've sent a 6-digit login code to <strong>{loginData.email}</strong>
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ca-blue mb-2">
                        Enter Login Code
                      </label>
                      <input
                        type="text"
                        value={loginCode}
                        onChange={(e) => setLoginCode(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango text-center text-2xl font-mono tracking-widest"
                        placeholder="123456"
                        maxLength={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-ca-blue mr-2"></div>
                          Verifying...
                        </div>
                      ) : (
                        'Verify Code & Sign In'
                      )}
                    </Button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleBackToPasswordLogin}
                        className="text-sm text-ca-text hover:text-ca-blue font-medium"
                      >
                        ← Back to password login
                      </button>
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-ca-text">
                    Don't have an account? 
                    <Link to="/contact-chrome-accountants" className="text-ca-mango hover:text-ca-blue font-medium ml-1">
                      Contact us to get started
                    </Link>
                  </p>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-ca-mango/10 rounded-lg flex items-start space-x-2">
                <Shield className="h-5 w-5 text-ca-mango mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ca-blue">Security Notice</p>
                  <p className="text-sm text-ca-text">
                    Your data is protected with bank-level encryption. Never share your login credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portal Features */}
          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ca-blue mb-4">
                  Your Secure AI Financial Hub
                </h2>
                <p className="text-lg text-ca-text">
                  Once logged in, you'll have 24/7 access to your complete financial 
                  information and direct communication with your Chrome Accountants team.
                </p>
              </div>

              <div className="space-y-6">
                {portalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-ca-mango/20 rounded-lg p-3">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-ca-blue mb-2">{feature.title}</h3>
                      <p className="text-ca-text">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-ca-blue rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">New to Chrome Accountants?</h3>
                <p className="text-ca-silver mb-4">
                  Experience the Chrome Financial Health System™ difference. 
                  Book an appointment to get started.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link to="/contact-chrome-accountants">
                    <Button className="bg-ca-mango text-ca-blue hover:bg-opacity-90">
                      Book a Session
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientLogin;