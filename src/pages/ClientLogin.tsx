import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Shield, FileText, Calendar, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const ClientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // In a real app, this would authenticate with the backend
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to actual client portal
      alert('Login functionality would redirect to secure client portal');
    }, 2000);
  };

  const portalFeatures = [
    // {
    //   icon: <FileText className="h-6 w-6 text-ca-mango" />,
    //   title: "Document Library",
    //   description: "Access all your tax returns, financial reports, and important documents"
    // },
    {
      icon: <Calendar className="h-6 w-6 text-ca-mango" />,
      title: "Appointment Scheduling",
      description: "Book meetings, view upcoming appointments, and manage your calendar"
    },
    {
      icon: <Users className="h-6 w-6 text-ca-mango" />,
      title: "Email Communication",
      description: "Email your dedicated accountant and track conversation history"
    },
    {
      icon: <Shield className="h-6 w-6 text-ca-mango" />,
      title: "Secure File Upload",
      description: "Safely upload sensitive documents with bank-level encryption"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
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
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
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
                    
                    <a href="#" className="text-sm text-ca-mango hover:text-ca-blue font-medium">
                      Forgot password?
                    </a>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-ca-blue mr-2"></div>
                        Signing in...
                      </div>
                    ) : (
                      'Sign In to Portal'
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-ca-text">
                    Don't have an account? 
                    <Link to="/contact" className="text-ca-mango hover:text-ca-blue font-medium ml-1">
                      Contact us to get started
                    </Link>
                  </p>
                </div>
              </div>
              
              {/* Security Notice */}
              <div className="mt-6 p-4 bg-ca-mango/10 rounded-lg">
                <div className="flex items-start space-x-2">
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
          </div>
          
          {/* Portal Features */}
          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ca-blue mb-4">
                  Your Secure Financial Hub
                </h2>
                <p className="text-lg text-ca-text">
                  Once logged in, you'll have 24/7 access to your complete financial 
                  information and direct communication with your Chrome Accountants team.
                </p>
              </div>
              
              <div className="space-y-6">
                {portalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-ca-mango/20 rounded-lg p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ca-blue mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-ca-text">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-ca-blue rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">New to Chrome Accountants?</h3>
                <p className="text-ca-silver mb-4">
                  Experience the Chrome Financial Health System™ difference. 
                  Book your free strategy session to get started.
                </p>
                <Link to="/contact-chrome-accountants">
                  <Button className="bg-ca-mango text-ca-blue hover:bg-opacity-90">
                    Book Free Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Help Section */}
      <section className="py-16 bg-cover" style={{backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help Accessing Your Account?</h2>
            <p className="text-white mb-6">
              Our support team is here to help with any login issues or questions about your portal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-ca-blue hover:bg-opacity-90 hover:text-white hover:bg-ca-blue">


                <Mail className="h-4 w-4 mr-2" />
                <a href = "mailto:chrome@chromeaccountants.com.au">Email Support</a>
              </Button>
              <Button className="bg-white text-ca-blue hover:bg-opacity-90 hover:text-white hover:bg-ca-blue">
                <Users className="h-4 w-4 mr-2" />
                <Link
                to="/contact-chrome-accountants"
                >Book a Consultation
                </Link>
                
              </Button>
              {/* <Button variant="outline">
                (02) 9876 5432
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientLogin;