import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Smile, LogOut, Users, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import apiService from "@/services/api";
import Button from "@/components/ui/Button";

const META = {
  title: "Client Dashboard",
  canonical: "https://www.chromeaccountants.com.au/client-dashboard/",
};

export default function ClientDashboard() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await apiService.logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <link rel="canonical" href={META.canonical} />
      </Helmet>

      {/* Header with Logout Button
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg transition-colors duration-200 font-medium"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
              {isLoggingOut ? 'Loggin
              g out...' : 'Logout'}
            </button>
          </div>
        </div>
      </header> */}


      <section className="relative overflow-hidden bg-gradient-to-br from-ca-blue to-ca-dark text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-ca-mango" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Client Dashboard</h1>
            </div>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base w-fit"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                <span className="sm:hidden">{isLoggingOut ? '...' : 'Logout'}</span>
              </button>
          </div>
          <p className="mt-3 text-ca-silver max-w-2xl text-sm sm:text-base">
            Manage your appointments and bookings with your financial champion, Chrome Accountants.
          </p>
        </div>
      </section>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <Smile className="h-16 w-16 sm:h-20 sm:w-20 text-ca-mango" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-ca-blue">
              Welcome to Your Dashboard
            </h1>
            <p className="text-base sm:text-lg text-ca-text max-w-2xl mx-auto">
              This is your personalized space with Chrome Accountants. 
              Here you'll find tools and forms to help you with your accounting journey.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="p-3 bg-ca-mango/10 rounded-lg w-fit">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-ca-mango" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-ca-blue">Complete Your Contact Information</h2>
                <p className="text-sm sm:text-base text-ca-text">Help us ensure your details are correct in our database</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-ca-blue mb-3">What you'll need to provide:</h3>
              <ul className="space-y-2 text-sm sm:text-base text-ca-text">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ca-mango rounded-full flex-shrink-0"></div>
                  Personal details (name, date of birth, tax file number)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ca-mango rounded-full flex-shrink-0"></div>
                  Contact information (email, phone preferences)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ca-mango rounded-full flex-shrink-0"></div>
                  Address details (residential and postal)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ca-mango rounded-full flex-shrink-0"></div>
                  Banking details for refunds
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ca-mango rounded-full flex-shrink-0"></div>
                  Digital signature
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={() => navigate('/client/contact-form')}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Start Contact Form</span>
                <span className="sm:hidden">Start Form</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-ca-blue mb-2">Tax Services</h3>
              <p className="text-sm sm:text-base text-ca-text">Professional tax preparation and filing services</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center">
              <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-ca-blue mb-2">Document Management</h3>
              <p className="text-sm sm:text-base text-ca-text">Secure storage and management of your financial documents</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                <Smile className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-ca-blue mb-2">Support</h3>
              <p className="text-sm sm:text-base text-ca-text">24/7 customer support for all your accounting needs</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
