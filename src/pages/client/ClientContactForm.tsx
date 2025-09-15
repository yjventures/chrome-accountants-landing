import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import SignatureCanvas from 'react-signature-canvas';
import { apiService } from '@/services/api';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  CreditCard,
  FileText,
  CheckCircle,
  AlertCircle,
  Check,
  BadgeCheck,
  X
} from 'lucide-react';

const META = {
  title: "Client Contact Form - Chrome Accountants",
  description: "Complete your contact information form for Chrome Accountants",
  canonical: "https://chromeaccountants.com/client/contact-form"
};

interface FormData {
  // Client Personal Details
  taxFileNumber: string;
  lastName: string;
  givenNames: string;
  dateOfBirth: string;
  title: string;
  
  // Client Contact Information
  email: string;
  phonePreferences: {
    mobile: string;
    home: string;
    work: string;
    homeExtension: string;
    workExtension: string;
    mobileTime: string;
    homeTime: string;
    workTime: string;
    mobileAMPM: 'AM' | 'PM';
    homeAMPM: 'AM' | 'PM';
    workAMPM: 'AM' | 'PM';
    selectedPhones: ('mobile' | 'home' | 'work')[];
  };
  
  // Spouse/Partner Details
  spouse: {
    lastName: string;
    givenNames: string;
    email: string;
    phonePreferences: {
      mobile: string;
      home: string;
      work: string;
      homeExtension: string;
      workExtension: string;
      mobileTime: string;
      homeTime: string;
      workTime: string;
      mobileAMPM: 'AM' | 'PM';
      homeAMPM: 'AM' | 'PM';
      workAMPM: 'AM' | 'PM';
      selectedPhones: ('mobile' | 'home' | 'work')[];
    };
    title: string;
  };
  
  // Address Details
  residentialAddress: {
    fullAddress: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  postalAddress: {
    fullAddress: string;
    suburb: string;
    state: string;
    postcode: string;
    isDifferent: boolean;
  };
  
  // Banking Details
  banking: {
    bsb: string;
    accountNumber: string;
    accountName: string;
  };
  
  // Additional Information
  referralSource: string;
  consentGiven: boolean;
  
  // E-Signature
  signature: string;
  signatureDate: string;
}

const ClientContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasSpouse, setHasSpouse] = useState<boolean | null>(null);
  const signatureRef = useRef<SignatureCanvas>(null);
  
  // Notification state
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    taxFileNumber: '',
    lastName: '',
    givenNames: '',
    dateOfBirth: '',
    title: 'MR',
    email: '',
    phonePreferences: {
      mobile: '',
      home: '',
      work: '',
      homeExtension: '',
      workExtension: '',
      mobileTime: '',
      homeTime: '',
      workTime: '',
      mobileAMPM: 'PM',
      homeAMPM: 'PM',
      workAMPM: 'PM',
      selectedPhones: ['mobile']
    },
    spouse: {
      lastName: '',
      givenNames: '',
      email: '',
      phonePreferences: {
        mobile: '',
        home: '',
        work: '',
        homeExtension: '',
        workExtension: '',
        mobileTime: '',
        homeTime: '',
        workTime: '',
        mobileAMPM: 'PM',
        homeAMPM: 'PM',
        workAMPM: 'PM',
        selectedPhones: ['mobile']
      },
      title: 'MR'
    },
    residentialAddress: {
      fullAddress: '',
      suburb: '',
      state: '',
      postcode: ''
    },
    postalAddress: {
      fullAddress: '',
      suburb: '',
      state: '',
      postcode: '',
      isDifferent: false
    },
    banking: {
      bsb: '',
      accountNumber: '',
      accountName: ''
    },
    referralSource: '',
    consentGiven: false,
    signature: '',
    signatureDate: new Date().toISOString().split('T')[0]
  });

  const totalSteps = 7;

  // Scroll to top when reaching step 3 (spouse/partner step)
  useEffect(() => {
    if (currentStep === 3) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const parts = field.split('.');
      setFormData(prev => {
        const newData = { ...prev };
        let current = newData;
        
        // Navigate to the parent object
        for (let i = 0; i < parts.length - 1; i++) {
          if (!current[parts[i]]) {
            current[parts[i]] = {};
          }
          current = current[parts[i]];
        }
        
        // Set the final value
        current[parts[parts.length - 1]] = value;
        return newData;
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handlePhoneSelection = (phoneType: 'mobile' | 'home' | 'work', isSelected: boolean, isSpouse = false) => {
    const fieldPrefix = isSpouse ? 'spouse.phonePreferences' : 'phonePreferences';
    const currentSelected = isSpouse ? formData.spouse.phonePreferences.selectedPhones : formData.phonePreferences.selectedPhones;
    
    let newSelected: ('mobile' | 'home' | 'work')[];
    if (isSelected) {
      newSelected = [...currentSelected, phoneType];
    } else {
      newSelected = currentSelected.filter(type => type !== phoneType);
    }
    
    handleInputChange(`${fieldPrefix}.selectedPhones`, newSelected);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1: // Personal Details
        if (!formData.taxFileNumber.trim()) newErrors.taxFileNumber = 'Tax File Number is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.givenNames.trim()) newErrors.givenNames = 'Given Names are required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
        break;
        
      case 2: // Contact Information
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        
        // Check if at least one phone number is provided
        const hasPhoneNumber = formData.phonePreferences.selectedPhones.some(phoneType => 
          formData.phonePreferences[phoneType].trim() !== ''
        );
        if (!hasPhoneNumber) {
          newErrors.phonePreferences = 'At least one phone number is required';
        }
        break;
        
      case 3: // Spouse/Partner Details
        if (hasSpouse === true) {
          if (!formData.spouse.lastName.trim()) newErrors['spouse.lastName'] = 'Spouse last name is required';
          if (!formData.spouse.givenNames.trim()) newErrors['spouse.givenNames'] = 'Spouse given names are required';
          if (!formData.spouse.email.trim()) newErrors['spouse.email'] = 'Spouse email is required';
          else if (!/\S+@\S+\.\S+/.test(formData.spouse.email)) newErrors['spouse.email'] = 'Spouse email is invalid';
          
          // Check if at least one spouse phone number is provided
          const hasSpousePhoneNumber = formData.spouse.phonePreferences.selectedPhones.some(phoneType => 
            formData.spouse.phonePreferences[phoneType].trim() !== ''
          );
          if (!hasSpousePhoneNumber) {
            newErrors['spouse.phonePreferences'] = 'At least one spouse phone number is required';
          }
        }
        break;
        
      case 4: // Address Details
        if (formData.postalAddress.isDifferent) {
          // If postal address is different, only validate postal address
          if (!formData.postalAddress.fullAddress.trim()) newErrors['postalAddress.fullAddress'] = 'Postal full address is required';
          if (!formData.postalAddress.suburb.trim()) newErrors['postalAddress.suburb'] = 'Postal suburb is required';
          if (!formData.postalAddress.state.trim()) newErrors['postalAddress.state'] = 'Postal state is required';
          if (!formData.postalAddress.postcode.trim()) newErrors['postalAddress.postcode'] = 'Postal postcode is required';
        } else {
          // If postal address is same as residential, validate residential address
          if (!formData.residentialAddress.fullAddress.trim()) newErrors['residentialAddress.fullAddress'] = 'Full address is required';
          if (!formData.residentialAddress.suburb.trim()) newErrors['residentialAddress.suburb'] = 'Suburb is required';
          if (!formData.residentialAddress.state.trim()) newErrors['residentialAddress.state'] = 'State is required';
          if (!formData.residentialAddress.postcode.trim()) newErrors['residentialAddress.postcode'] = 'Postcode is required';
        }
        break;
        
      case 5: // Banking Details
        if (!formData.banking.bsb.trim()) newErrors['banking.bsb'] = 'BSB is required';
        if (!formData.banking.accountNumber.trim()) newErrors['banking.accountNumber'] = 'Account Number is required';
        if (!formData.banking.accountName.trim()) newErrors['banking.accountName'] = 'Account Name is required';
        break;
        
      case 6: // Additional Information
        if (!formData.consentGiven) newErrors.consentGiven = 'You must agree to the terms';
        break;
        
      case 7: // Signature
        if (!formData.signature.trim()) newErrors.signature = 'Signature is required';
        if (!formData.signatureDate.trim()) newErrors.signatureDate = 'Signature date is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 3 && hasSpouse === null) {
      // If on spouse step and hasn't chosen yet, don't proceed
      return;
    }
    
    if (validateStep(currentStep)) {
      // If on spouse step and user chose no spouse, skip to next step
      if (currentStep === 3 && hasSpouse === false) {
        setCurrentStep(4); // Skip to address step
      } else {
        setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      }
      // Scroll to top when moving to next step
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    // If on step 4 (address) and user skipped spouse step, go back to step 2
    if (currentStep === 4 && hasSpouse === false) {
      setCurrentStep(2);
    } 
    // If on step 3 and user has already chosen spouse option, go back to choice selection
    else if (currentStep === 3 && hasSpouse !== null) {
      setHasSpouse(null);
    } 
    else {
      setCurrentStep(prev => Math.max(prev - 1, 1));
    }
    // Scroll to top when moving to previous step
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignatureEnd = () => {
    if (signatureRef.current) {
      const signatureData = signatureRef.current.toDataURL();
      setFormData(prev => ({
        ...prev,
        signature: signatureData,
        signatureDate: new Date().toISOString().split('T')[0]
      }));
    }
  };

  const clearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
      setFormData(prev => ({
        ...prev,
        signature: '',
        signatureDate: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) return;
    
    setIsSubmitting(true);
    try {
      // Prepare form data for submission
      const submissionData = {
        personalDetails: {
          firstName: formData.givenNames,
          lastName: formData.lastName,
          dateOfBirth: formData.dateOfBirth,
          ssn: formData.taxFileNumber,
          title: formData.title
        },
        contactInfo: {
          email: formData.email,
          mobilePhone: formData.phonePreferences.mobile,
          homePhone: formData.phonePreferences.home,
          workPhone: formData.phonePreferences.work,
          homeExtension: formData.phonePreferences.homeExtension,
          workExtension: formData.phonePreferences.workExtension,
          mobileTime: formData.phonePreferences.mobileTime,
          homeTime: formData.phonePreferences.homeTime,
          workTime: formData.phonePreferences.workTime,
          mobileAMPM: formData.phonePreferences.mobileAMPM,
          homeAMPM: formData.phonePreferences.homeAMPM,
          workAMPM: formData.phonePreferences.workAMPM,
          selectedPhones: formData.phonePreferences.selectedPhones
        },
        spouseDetails: formData.spouse?.lastName ? {
          firstName: formData.spouse.givenNames,
          lastName: formData.spouse.lastName,
          email: formData.spouse.email,
          title: formData.spouse.title,
          mobilePhone: formData.spouse.phonePreferences.mobile,
          homePhone: formData.spouse.phonePreferences.home,
          workPhone: formData.spouse.phonePreferences.work,
          homeExtension: formData.spouse.phonePreferences.homeExtension,
          workExtension: formData.spouse.phonePreferences.workExtension,
          mobileTime: formData.spouse.phonePreferences.mobileTime,
          homeTime: formData.spouse.phonePreferences.homeTime,
          workTime: formData.spouse.phonePreferences.workTime,
          mobileAMPM: formData.spouse.phonePreferences.mobileAMPM,
          homeAMPM: formData.spouse.phonePreferences.homeAMPM,
          workAMPM: formData.spouse.phonePreferences.workAMPM,
          selectedPhones: formData.spouse.phonePreferences.selectedPhones
        } : null,
        addressDetails: {
          residentialAddress: formData.residentialAddress?.fullAddress || '',
          residentialCity: formData.residentialAddress?.suburb || '',
          residentialState: formData.residentialAddress?.state || '',
          residentialZip: formData.residentialAddress?.postcode || '',
          postalDifferent: formData.postalAddress?.isDifferent || false,
          postalAddress: formData.postalAddress?.fullAddress || '',
          postalCity: formData.postalAddress?.suburb || '',
          postalState: formData.postalAddress?.state || '',
          postalZip: formData.postalAddress?.postcode || ''
        },
        bankingDetails: {
          bankName: formData.banking?.accountName || '',
          accountNumber: formData.banking?.accountNumber || '',
          routingNumber: formData.banking?.bsb || ''
        },
        additionalInfo: {
          occupation: formData.referralSource || '',
          employer: '',
          annualIncome: '',
          notes: ''
        },
        eSignature: {
          signature: formData.signature,
          signatureDate: formData.signatureDate
        }
      };

      // Submit form to backend
      const response = await apiService.submitContactForm(submissionData);
      const result = await response.jsonSafe();
      
      if (response.ok && result?.message) {
        // Show success notification
        setSuccessMessage('Form submitted successfully! Chrome Accountants will review your information and contact you soon.');
        setShowSuccessNotification(true);
        setNotificationVisible(true);
        
        // Auto-hide notification after 4 seconds and redirect
        setTimeout(() => {
          setNotificationVisible(false);
          setTimeout(() => {
            setShowSuccessNotification(false);
            setSuccessMessage('');
            navigate('/client-dashboard');
          }, 300);
        }, 4000);
      } else {
        throw new Error(result?.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-ca-blue mb-2">Personal Details</h2>
              <p className="text-sm sm:text-base text-ca-text">Please provide your personal information</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Tax File Number *
                </label>
                <input
                  type="text"
                  value={formData.taxFileNumber}
                  onChange={(e) => handleInputChange('taxFileNumber', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors.taxFileNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your tax file number"
                />
                {errors.taxFileNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.taxFileNumber}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Title *
                </label>
                <select
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                >
                  <option value="MR">MR</option>
                  <option value="MRS">MRS</option>
                  <option value="MS">MS</option>
                  <option value="MISS">MISS</option>
                  <option value="DR">DR</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Given Names *
                </label>
                <input
                  type="text"
                  value={formData.givenNames}
                  onChange={(e) => handleInputChange('givenNames', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors.givenNames ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your given names"
                />
                {errors.givenNames && (
                  <p className="text-red-500 text-sm mt-1">{errors.givenNames}</p>
                )}
              </div>
              
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-ca-blue mb-2">Contact Information</h2>
              <p className="text-ca-text">Please provide email address and phone number so we can update you on tax return status, ask questions if required,
              and provide further information</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Phone Numbers *
                </label>
                <p className="text-sm text-ca-text mb-4">Select and fill in your phone numbers (mobile typically allows fastest contact time)</p>
                
                <div className="space-y-6">
                  {/* Mobile */}
                  <div>
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        checked={formData.phonePreferences.selectedPhones.includes('mobile')}
                        onChange={(e) => handlePhoneSelection('mobile', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium">MOBILE</span>
                    </div>
                    {formData.phonePreferences.selectedPhones.includes('mobile') && (
                      <>
                        <input
                          type="tel"
                          value={formData.phonePreferences.mobile}
                          onChange={(e) => handleInputChange('phonePreferences.mobile', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                            errors['phonePreferences.mobile'] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Mobile number"
                        />
                        <div className="flex items-center mt-2 space-x-2">
                          <input
                            type="text"
                            value={formData.phonePreferences.mobileTime}
                            onChange={(e) => handleInputChange('phonePreferences.mobileTime', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            placeholder="e.g., 09:30"
                            pattern="[0-9]{1,2}:[0-9]{2}"
                          />
                          <select
                            value={formData.phonePreferences.mobileAMPM}
                            onChange={(e) => handleInputChange('phonePreferences.mobileAMPM', e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                        {errors['phonePreferences.mobile'] && (
                          <p className="text-red-500 text-sm mt-1">{errors['phonePreferences.mobile']}</p>
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* Home */}
                  <div>
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        checked={formData.phonePreferences.selectedPhones.includes('home')}
                        onChange={(e) => handlePhoneSelection('home', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium">HOME</span>
                    </div>
                    {formData.phonePreferences.selectedPhones.includes('home') && (
                      <>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={formData.phonePreferences.homeExtension}
                            onChange={(e) => handleInputChange('phonePreferences.homeExtension', e.target.value)}
                            placeholder="( )"
                            className="w-16 px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            maxLength={3}
                          />
                          <input
                            type="tel"
                            value={formData.phonePreferences.home}
                            onChange={(e) => handleInputChange('phonePreferences.home', e.target.value)}
                            className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                              errors['phonePreferences.home'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Home number"
                          />
                        </div>
                        <div className="flex items-center mt-2 space-x-2">
                          <input
                            type="text"
                            value={formData.phonePreferences.homeTime}
                            onChange={(e) => handleInputChange('phonePreferences.homeTime', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            placeholder="e.g., 09:30"
                            pattern="[0-9]{1,2}:[0-9]{2}"
                          />
                          <select
                            value={formData.phonePreferences.homeAMPM}
                            onChange={(e) => handleInputChange('phonePreferences.homeAMPM', e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                        {errors['phonePreferences.home'] && (
                          <p className="text-red-500 text-sm mt-1">{errors['phonePreferences.home']}</p>
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* Work */}
                  <div>
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        checked={formData.phonePreferences.selectedPhones.includes('work')}
                        onChange={(e) => handlePhoneSelection('work', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium">WORK</span>
                    </div>
                    {formData.phonePreferences.selectedPhones.includes('work') && (
                      <>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={formData.phonePreferences.workExtension}
                            onChange={(e) => handleInputChange('phonePreferences.workExtension', e.target.value)}
                            placeholder="( )"
                            className="w-16 px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            maxLength={3}
                          />
                          <input
                            type="tel"
                            value={formData.phonePreferences.work}
                            onChange={(e) => handleInputChange('phonePreferences.work', e.target.value)}
                            className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                              errors['phonePreferences.work'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Work number"
                          />
                        </div>
                        <div className="flex items-center mt-2 space-x-2">
                          <input
                            type="text"
                            value={formData.phonePreferences.workTime}
                            onChange={(e) => handleInputChange('phonePreferences.workTime', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            placeholder="e.g., 09:30"
                            pattern="[0-9]{1,2}:[0-9]{2}"
                          />
                          <select
                            value={formData.phonePreferences.workAMPM}
                            onChange={(e) => handleInputChange('phonePreferences.workAMPM', e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                        {errors['phonePreferences.work'] && (
                          <p className="text-red-500 text-sm mt-1">{errors['phonePreferences.work']}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {errors.phonePreferences && (
                  <p className="text-red-500 text-sm mt-2">{errors.phonePreferences}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-ca-blue mb-2">Spouse/Partner Details</h2>
              <p className="text-ca-text">Please provide details for your spouse or partner</p>
            </div>
            
            {hasSpouse === null && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-lg text-ca-text mb-6">Do you have a spouse or partner?</p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={() => {
                        setHasSpouse(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-8 py-3"
                    >
                      Yes, I have a spouse/partner
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setHasSpouse(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-8 py-3"
                    >
                      No, I don't have a spouse/partner
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {hasSpouse === true && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ca-text mb-2">
                      Title *
                    </label>
                    <select
                      value={formData.spouse.title}
                      onChange={(e) => handleInputChange('spouse.title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                    >
                      <option value="MR">MR</option>
                      <option value="MRS">MRS</option>
                      <option value="MS">MS</option>
                      <option value="MISS">MISS</option>
                      <option value="DR">DR</option>
                      <option value="OTHER">OTHER</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ca-text mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.spouse.lastName}
                      onChange={(e) => handleInputChange('spouse.lastName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                        errors['spouse.lastName'] ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter spouse last name"
                    />
                    {errors['spouse.lastName'] && (
                      <p className="text-red-500 text-sm mt-1">{errors['spouse.lastName']}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ca-text mb-2">
                      Given Names *
                    </label>
                    <input
                      type="text"
                      value={formData.spouse.givenNames}
                      onChange={(e) => handleInputChange('spouse.givenNames', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                        errors['spouse.givenNames'] ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter spouse given names"
                    />
                    {errors['spouse.givenNames'] && (
                      <p className="text-red-500 text-sm mt-1">{errors['spouse.givenNames']}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ca-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.spouse.email}
                      onChange={(e) => handleInputChange('spouse.email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                        errors['spouse.email'] ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter spouse email address"
                    />
                    {errors['spouse.email'] && (
                      <p className="text-red-500 text-sm mt-1">{errors['spouse.email']}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ca-text mb-2">
                    Phone Numbers *
                  </label>
                  <p className="text-sm text-ca-text mb-4">Select and fill in spouse/partner phone numbers (mobile typically allows fastest contact time)</p>
                  
                  <div className="space-y-6">
                    {/* Mobile */}
                    <div>
                      <div className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          checked={formData.spouse.phonePreferences.selectedPhones.includes('mobile')}
                          onChange={(e) => handlePhoneSelection('mobile', e.target.checked, true)}
                          className="mr-2"
                        />
                        <span className="text-sm font-medium">MOBILE</span>
                      </div>
                      {formData.spouse.phonePreferences.selectedPhones.includes('mobile') && (
                        <>
                          <input
                            type="tel"
                            value={formData.spouse.phonePreferences.mobile}
                            onChange={(e) => handleInputChange('spouse.phonePreferences.mobile', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                              errors['spouse.phonePreferences.mobile'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Mobile number"
                          />
                          <div className="flex items-center mt-2 space-x-2">
                            <input
                              type="text"
                              value={formData.spouse.phonePreferences.mobileTime}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.mobileTime', e.target.value)}
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                              placeholder="e.g., 09:30"
                              pattern="[0-9]{1,2}:[0-9]{2}"
                            />
                            <select
                              value={formData.spouse.phonePreferences.mobileAMPM}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.mobileAMPM', e.target.value)}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            >
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                          {errors['spouse.phonePreferences.mobile'] && (
                            <p className="text-red-500 text-sm mt-1">{errors['spouse.phonePreferences.mobile']}</p>
                          )}
                        </>
                      )}
                    </div>
                    
                    {/* Home */}
                    <div>
                      <div className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          checked={formData.spouse.phonePreferences.selectedPhones.includes('home')}
                          onChange={(e) => handlePhoneSelection('home', e.target.checked, true)}
                          className="mr-2"
                        />
                        <span className="text-sm font-medium">HOME</span>
                      </div>
                      {formData.spouse.phonePreferences.selectedPhones.includes('home') && (
                        <>
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              value={formData.spouse.phonePreferences.homeExtension}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.homeExtension', e.target.value)}
                              placeholder="( )"
                              className="w-16 px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                              maxLength={3}
                            />
                            <input
                              type="tel"
                              value={formData.spouse.phonePreferences.home}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.home', e.target.value)}
                              className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                                errors['spouse.phonePreferences.home'] ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Home number"
                            />
                          </div>
                          <div className="flex items-center mt-2 space-x-2">
                            <input
                              type="text"
                              value={formData.spouse.phonePreferences.homeTime}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.homeTime', e.target.value)}
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                              placeholder="e.g., 09:30"
                              pattern="[0-9]{1,2}:[0-9]{2}"
                            />
                            <select
                              value={formData.spouse.phonePreferences.homeAMPM}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.homeAMPM', e.target.value)}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            >
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                          {errors['spouse.phonePreferences.home'] && (
                            <p className="text-red-500 text-sm mt-1">{errors['spouse.phonePreferences.home']}</p>
                          )}
                        </>
                      )}
                    </div>
                    
                    {/* Work */}
                    <div>
                      <div className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          checked={formData.spouse.phonePreferences.selectedPhones.includes('work')}
                          onChange={(e) => handlePhoneSelection('work', e.target.checked, true)}
                          className="mr-2"
                        />
                        <span className="text-sm font-medium">WORK</span>
                      </div>
                      {formData.spouse.phonePreferences.selectedPhones.includes('work') && (
                        <>
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              value={formData.spouse.phonePreferences.workExtension}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.workExtension', e.target.value)}
                              placeholder="( )"
                              className="w-16 px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                              maxLength={3}
                            />
                            <input
                              type="tel"
                              value={formData.spouse.phonePreferences.work}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.work', e.target.value)}
                              className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                                errors['spouse.phonePreferences.work'] ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Work number"
                            />
                          </div>
                          <div className="flex items-center mt-2 space-x-2">
                            <input
                              type="text"
                              value={formData.spouse.phonePreferences.workTime}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.workTime', e.target.value)}
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                              placeholder="e.g., 09:30"
                              pattern="[0-9]{1,2}:[0-9]{2}"
                            />
                            <select
                              value={formData.spouse.phonePreferences.workAMPM}
                              onChange={(e) => handleInputChange('spouse.phonePreferences.workAMPM', e.target.value)}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                            >
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                          {errors['spouse.phonePreferences.work'] && (
                            <p className="text-red-500 text-sm mt-1">{errors['spouse.phonePreferences.work']}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {errors['spouse.phonePreferences'] && (
                    <p className="text-red-500 text-sm mt-2">{errors['spouse.phonePreferences']}</p>
                  )}
                </div>
              </div>
            )}
            
            {hasSpouse === false && (
              <div className="text-center py-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">No Spouse/Partner</h3>
                  <p className="text-green-600">You can proceed to the next step.</p>
                </div>
              </div>
            )}
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-ca-blue mb-2">Address Details</h2>
              <p className="text-ca-text">Please provide your address information</p>
            </div>
            
            <div className="space-y-8">
              {/* Residential Address */}
              <div>
                <h3 className="text-lg font-semibold text-ca-blue mb-4">
                  Residential Address
                  {!formData.postalAddress.isDifferent && <span className="text-red-500 ml-1">*</span>}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-ca-text mb-2">
                      Full Address {!formData.postalAddress.isDifferent && '*'}
                    </label>
                    <textarea
                      value={formData.residentialAddress.fullAddress}
                      onChange={(e) => handleInputChange('residentialAddress.fullAddress', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                        errors['residentialAddress.fullAddress'] ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full residential address"
                      rows={3}
                    />
                    {errors['residentialAddress.fullAddress'] && (
                      <p className="text-red-500 text-sm mt-1">{errors['residentialAddress.fullAddress']}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ca-text mb-2">
                        Suburb {!formData.postalAddress.isDifferent && '*'}
                      </label>
                      <input
                        type="text"
                        value={formData.residentialAddress.suburb}
                        onChange={(e) => handleInputChange('residentialAddress.suburb', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                          errors['residentialAddress.suburb'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter suburb"
                      />
                      {errors['residentialAddress.suburb'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['residentialAddress.suburb']}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ca-text mb-2">
                        State {!formData.postalAddress.isDifferent && '*'}
                      </label>
                      <input
                        type="text"
                        value={formData.residentialAddress.state}
                        onChange={(e) => handleInputChange('residentialAddress.state', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                          errors['residentialAddress.state'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter state"
                      />
                      {errors['residentialAddress.state'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['residentialAddress.state']}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ca-text mb-2">
                        Postcode {!formData.postalAddress.isDifferent && '*'}
                      </label>
                      <input
                        type="text"
                        value={formData.residentialAddress.postcode}
                        onChange={(e) => handleInputChange('residentialAddress.postcode', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                          errors['residentialAddress.postcode'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter postcode"
                      />
                      {errors['residentialAddress.postcode'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['residentialAddress.postcode']}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Postal Address */}
              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="postalDifferent"
                    checked={formData.postalAddress.isDifferent}
                    onChange={(e) => handleInputChange('postalAddress.isDifferent', e.target.checked)}
                    className="mr-3"
                  />
                  <label htmlFor="postalDifferent" className="text-sm font-medium text-ca-text">
                    Postal Address (if different from residential)
                  </label>
                </div>
                
                {formData.postalAddress.isDifferent && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ca-text mb-2">
                        Postal Full Address *
                      </label>
                      <textarea
                        value={formData.postalAddress.fullAddress}
                        onChange={(e) => handleInputChange('postalAddress.fullAddress', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                          errors['postalAddress.fullAddress'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full postal address"
                        rows={3}
                      />
                      {errors['postalAddress.fullAddress'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['postalAddress.fullAddress']}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ca-text mb-2">
                          Suburb *
                        </label>
                        <input
                          type="text"
                          value={formData.postalAddress.suburb}
                          onChange={(e) => handleInputChange('postalAddress.suburb', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                            errors['postalAddress.suburb'] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter postal suburb"
                        />
                        {errors['postalAddress.suburb'] && (
                          <p className="text-red-500 text-sm mt-1">{errors['postalAddress.suburb']}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-ca-text mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          value={formData.postalAddress.state}
                          onChange={(e) => handleInputChange('postalAddress.state', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                            errors['postalAddress.state'] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter postal state"
                        />
                        {errors['postalAddress.state'] && (
                          <p className="text-red-500 text-sm mt-1">{errors['postalAddress.state']}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-ca-text mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          value={formData.postalAddress.postcode}
                          onChange={(e) => handleInputChange('postalAddress.postcode', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                            errors['postalAddress.postcode'] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter postal postcode"
                        />
                        {errors['postalAddress.postcode'] && (
                          <p className="text-red-500 text-sm mt-1">{errors['postalAddress.postcode']}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-ca-blue mb-2">Banking Details</h2>
              <p className="text-ca-text">Please provide your bank account details for refunds to be deposited into</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  BSB *
                </label>
                <input
                  type="text"
                  value={formData.banking.bsb}
                  onChange={(e) => handleInputChange('banking.bsb', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors['banking.bsb'] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter BSB"
                  maxLength={6}
                />
                {errors['banking.bsb'] && (
                  <p className="text-red-500 text-sm mt-1">{errors['banking.bsb']}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Account Number *
                </label>
                <input
                  type="text"
                  value={formData.banking.accountNumber}
                  onChange={(e) => handleInputChange('banking.accountNumber', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors['banking.accountNumber'] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter account number"
                />
                {errors['banking.accountNumber'] && (
                  <p className="text-red-500 text-sm mt-1">{errors['banking.accountNumber']}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Account Name *
                </label>
                <input
                  type="text"
                  value={formData.banking.accountName}
                  onChange={(e) => handleInputChange('banking.accountName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango ${
                    errors['banking.accountName'] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter account name"
                />
                {errors['banking.accountName'] && (
                  <p className="text-red-500 text-sm mt-1">{errors['banking.accountName']}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-ca-blue mb-2">Additional Information</h2>
              <p className="text-ca-text">Please provide any additional information</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  If you are a new client, how did you hear about us?
                </label>
                <input
                  type="text"
                  value={formData.referralSource}
                  onChange={(e) => handleInputChange('referralSource', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                  placeholder="e.g., Google search, friend referral, advertisement"
                />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consentGiven}
                    onChange={(e) => handleInputChange('consentGiven', e.target.checked)}
                    className={`mt-1 mr-3 ${errors.consentGiven ? 'border-red-500' : ''}`}
                  />
                  <label htmlFor="consent" className="text-sm text-ca-text">
                    I agree that Chrome Accountants may access the ATO Tax Agent Portal and gather information necessary to complete my tax return and handle my tax affairs for the period that I am a client of Chrome Accountants. *
                  </label>
                </div>
                {errors.consentGiven && (
                  <p className="text-red-500 text-sm mt-2">{errors.consentGiven}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-ca-blue mb-2">E-Signature</h2>
              <p className="text-ca-text">Please provide your digital signature to complete the form</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">
                  Signature *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-ca-mango" />
                    <p className="text-sm text-ca-text">Draw your signature in the box below</p>
                  </div>
                  
                  <div className="w-full h-32 sm:h-40 bg-white border border-gray-300 rounded-lg mb-4 relative">
                    <SignatureCanvas
                      ref={signatureRef}
                      canvasProps={{
                        className: 'w-full h-full rounded-lg',
                        style: { width: '100%', height: '100%' }
                      }}
                      onEnd={handleSignatureEnd}
                      backgroundColor="white"
                      penColor="#000000"
                      minWidth={1}
                      maxWidth={3}
                    />
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      onClick={clearSignature}
                      className="px-4 py-2 text-sm text-ca-mango border border-ca-mango rounded-lg hover:bg-ca-mango hover:text-white transition-colors"
                    >
                      Clear Signature
                    </button>
                    {formData.signature && (
                      <div className="flex items-center text-sm text-green-600">
                        <Check className="h-4 w-4 mr-1" />
                        Signature Captured
                      </div>
                    )}
                  </div>
                </div>
                {errors.signature && (
                  <p className="text-red-500 text-sm mt-2">{errors.signature}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ca-text mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.signatureDate}
                    onChange={(e) => handleInputChange('signatureDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Step content coming soon...</div>;
    }
  };

  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <link rel="canonical" href={META.canonical} />
      </Helmet>
      
      {/* Success Notification */}
      {showSuccessNotification && (
        <div 
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 9999,
            backgroundColor: '#10b981',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '400px',
            border: '2px solid #059669',
            opacity: notificationVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <BadgeCheck className="h-6 w-6" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>{successMessage}</p>
          </div>
          <button
            onClick={() => {
              setNotificationVisible(false);
              setTimeout(() => {
                setShowSuccessNotification(false);
                setSuccessMessage('');
              }, 300);
            }}
            style={{
              flexShrink: 0,
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.8)',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => navigate('/client-dashboard')}
                  className="flex items-center text-ca-text hover:text-ca-mango transition-colors text-sm sm:text-base"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Back to Dashboard</span>
                  <span className="sm:hidden">Back</span>
                </button>
                <div className="h-4 sm:h-6 w-px bg-gray-300"></div>
                <h1 className="text-lg sm:text-xl font-semibold text-ca-blue">Client Contact Form</h1>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-ca-text">Step {currentStep} of {totalSteps}</span>
                <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-ca-mango h-1.5 sm:h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    className="flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
                  >
                    Next
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        <span className="hidden sm:inline">Submitting...</span>
                        <span className="sm:hidden">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Submit Form</span>
                        <span className="sm:hidden">Submit</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientContactForm;
