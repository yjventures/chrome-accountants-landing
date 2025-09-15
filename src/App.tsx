import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import TaxCalculator from './pages/TaxCalculator';
import ScrollToTop from './components/ScrollToTop';
import BookkeepingServiceBooking from './pages/bookings/BookkeepingServiceBooking';
import BusinessServiceBooking from './pages/bookings/BusinessServiceBooking';
import IndividualServiceBooking from './pages/bookings/IndividualServiceBooking';
import BookkeepingServices from './pages/services/BookkeepingServices';
import BusinessServices from './pages/services/BusinessServices';
import IndividualServices from './pages/services/IndividualServices';
import GSTRegistrationGuideNSW from './pages/blogs/GSTRegistrationGuideNSW';
import BookkeepingBasics from './pages/blogs/BookkeepingBasicsNSW';
import TaxPlanningStrategies from './pages/blogs/TaxPlanningStrategiesNSW';
import PayrollComplianceChecklist from './pages/blogs/PayrollComplianceChecklistNSW';
import TaxPlanningStrategiesNSW from './pages/blogs/TaxPlanningStrategiesNSW';
import InvestmentPropertyTaxTipsNSW from './pages/blogs/InvestmentPropertyTaxTipsNSW';
import WorkRelatedDeductionsNSW from './pages/blogs/WorkRelatedDeductionsNSW';
import CryptocurrencyTaxGuideNSW from './pages/blogs/CryptocurrencyTaxGuideNSW';
import BusinessStructureComparisonNSW from './pages/blogs/BusinessStructureComparisonNSW';
import StartupFinancialPlanningTemplateNSW from './pages/blogs/StartupFinancialPlanningTemplateNSW';
import RegistrationRequirementsNSW from './pages/blogs/RegistrationRequirementsNSW';
import FirstYearTaxTipsNSW from './pages/blogs/FirstYearTaxTipsNSW';
import TaxReturnPreparationGuideNSW from './pages/blogs/TaxReturnPreparationGuideNSW';
import Sitemap from './pages/Sitemap';
import NotFound404 from './pages/NotFound404';

// Resouce Guides
import BusinessStartupChecklist from './pages/guides/BusinessStartupChecklist';
import TaxDeductionGuide from './pages/guides/TaxDeductionGuide';
import FinancialHealthChecklist from './pages/guides/FinancialHealthChecklist';
import CryptoTaxesSydney from './pages/guides/CryptoTaxesSydney';
import GSTinNSWGuide from './pages/guides/GSTinNSWGuide';
import StampDutyLandTaxNSW from './pages/guides/StampDutyLandTaxNSW';
import PayrollComplianceChecklist2025 from './pages/guides/PayrollComplianceChecklist2025';
import SwappingCryptoTaxable from './pages/guides/SwappingCryptoTaxable';
import TopTaxAgentsMerrylands from './pages/guides/TopTaxAgentsMerrylands';
import IndependentContractorDeductions from './pages/guides/IndependentContractorDeductions';
import LodgeTaxReturnMerrylands from './pages/guides/LodgeTaxReturnMerrylands';

// Bookkeeping service pages (you already had these)
import BasIasLodgementServices from './pages/services/bookkeeping/BasIasLodgementServices';
import AccountsPayableReceivable from './pages/services/bookkeeping/AccountsPayableReceivable';
import PayrollSuperannuationMgmt from './pages/services/bookkeeping/PayrollSuperannuationMgmt';
import FinancialAccountingReports from './pages/services/bookkeeping/FinancialAccountingReports';

// Business service pages (new imports)
import SoleTraderTaxServices from './pages/services/business/SoleTraderTaxServices';
import PartnershipTaxServices from './pages/services/business/PartnershipTaxServices';
import CompanyTaxReturnsAus from './pages/services/business/CompanyTaxReturnsAus';
import TrustTaxReturnServices from './pages/services/business/TrustTaxReturnServices';
import SelfManagedSuperFunds from './pages/services/business/SelfManagedSuperFunds';

// Individual service pages (new imports)
import EmploymentIncome from './pages/services/individual/EmploymentIncome';
import InvestmentProperty from './pages/services/individual/InvestmentProperty';
import CapitalGainsTaxService from './pages/services/individual/CapitalGainsTaxService';
import ForeignIncomeTaxAus from './pages/services/individual/ForeignIncomeTaxAus';
import LendingServices from './pages/services/LendingServices';

// Dashboard pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientContactForm from './pages/client/ClientContactForm';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            <Route path="/sitemap-chrome-accountants" element={<Sitemap />} />
            <Route path="/about-us-chrome-accountants" element={<AboutUs/>} />
            <Route path="/services-chrome-accountants" element={<Services />} />
            <Route path="/why-us-chrome-accountants" element={<WhyUs />} />
            <Route path="/tax-resources-chrome-accountants" element={<Resources />} />
            <Route path="/contact-chrome-accountants" element={<Contact />} />
            <Route path="/privacy-policy-chrome-accountants" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service-chrome-accountants" element={<TermsOfService />} />
            <Route path="/australian-tax-calculator" element={<TaxCalculator />} />
            <Route path="/404" element={<NotFound404 />} />
            <Route path="*" element={<NotFound404 />} />
            
            {/* Guides */}
            <Route path="/business-startup-checklist" element={<BusinessStartupChecklist />} />
            <Route path="/tax-deduction-guide" element={<TaxDeductionGuide />} />
            <Route path="/financial-health-checklist" element={<FinancialHealthChecklist />} />
            <Route path="/crypto-taxes-sydney" element={<CryptoTaxesSydney />} />
            <Route path="/gst-in-nsw-guide" element={<GSTinNSWGuide />} />
            <Route path="/stamp-duty-land-tax-nsw" element={<StampDutyLandTaxNSW />} />
            <Route path="/payroll-compliance-checklist-2025" element={<PayrollComplianceChecklist2025 />} />
            <Route path="/swapping-crypto-taxable" element={<SwappingCryptoTaxable />} />
            <Route path="/top-tax-agents-merrylands" element={<TopTaxAgentsMerrylands />} />
            <Route path="/independent-contractor-deductions" element={<IndependentContractorDeductions />} />
            <Route path="/lodge-tax-return-merrylands" element={<LodgeTaxReturnMerrylands />} />


            {/* Bookings */}
            <Route path="/bookkeeping-service-booking" element={<BookkeepingServiceBooking />} />
            <Route path="/business-service-booking" element={<BusinessServiceBooking />} />
            <Route path="/individual-service-booking" element={<IndividualServiceBooking />} />

            {/* Services hub pages */}
            <Route path="/bookkeeping-services-chrome-accountants" element={<BookkeepingServices />} />
            <Route path="/business-services-chrome-accountants" element={<BusinessServices />} />
            <Route path="/individual-services-chrome-accountants" element={<IndividualServices />} />
            
            {/* Blogs */}
            <Route path="/gst-registration-guide-nsw-chrome-accountants" element={<GSTRegistrationGuideNSW />} />
            <Route path="/bookkeeping-basics-nsw-chrome-accountants" element={<BookkeepingBasics />} />
            <Route path="/payroll-compliance-checklist-nsw-chrome-accountants" element={<PayrollComplianceChecklist />} />
            <Route path="/tax-planning-strategies-nsw-chrome-accountants" element={<TaxPlanningStrategiesNSW />} />
            <Route path="/investment-property-tax-tips-nsw-chrome-accountants" element={<InvestmentPropertyTaxTipsNSW />} />
            <Route path="/work-related-deductions-nsw-chrome-accountants" element={<WorkRelatedDeductionsNSW />} />
            <Route path="/cryptocurrency-tax-guide-nsw-chrome-accountants" element={<CryptocurrencyTaxGuideNSW />} />
            <Route path="/business-structure-comparison-nsw-chrome-accountants" element={<BusinessStructureComparisonNSW />} />
            <Route path="/startup-financial-planning-template-nsw-chrome-accountants" element={<StartupFinancialPlanningTemplateNSW />} />
            <Route path="/registration-requirements-nsw-chrome-accountants" element={<RegistrationRequirementsNSW />} />
            <Route path="/first-year-tax-tips-nsw-chrome-accountants" element={<FirstYearTaxTipsNSW />} />
            <Route path="/tax-return-preparation-guide-nsw-chrome-accountants" element={<TaxReturnPreparationGuideNSW />} />


            {/*
              ===== Service detail pages (match services.json hrefs) =====
              Bookkeeping
            */}
            <Route path="/pages/services/bookkeeping/bas-ias-lodgement-services" element={<BasIasLodgementServices />} />
            <Route path="/pages/services/bookkeeping/payroll-superannuation-mgmt" element={<PayrollSuperannuationMgmt />} />
            <Route path="/pages/services/bookkeeping/financial-accounting-reports" element={<FinancialAccountingReports />} />
            <Route path="/pages/services/bookkeeping/accounts-payable-receivable" element={<AccountsPayableReceivable />} />

            {/* Business */}
            <Route path="/pages/services/business/sole-trader-tax-services" element={<SoleTraderTaxServices />} />
            <Route path="/pages/services/business/partnership-tax-services" element={<PartnershipTaxServices />} />
            <Route path="/pages/services/business/company-tax-returns-aus" element={<CompanyTaxReturnsAus />} />
            <Route path="/pages/services/business/trust-tax-return-services" element={<TrustTaxReturnServices />} />
            <Route path="/pages/services/business/self-managed-super-funds" element={<SelfManagedSuperFunds />} />

            {/* Individual */}
            <Route path="/pages/services/individual/employment-income-returns" element={<EmploymentIncome />} />
            <Route path="/pages/services/individual/investment-property-tax" element={<InvestmentProperty />} />
            <Route path="/pages/services/individual/capital-gains-tax-service" element={<CapitalGainsTaxService />} />
            <Route path="/pages/services/individual/foreign-income-tax-aus" element={<ForeignIncomeTaxAus />} />

            {/*
              ===== Back-compat aliases (keep old short paths working) =====
              (You can remove these once all internal links use the /pages/services/... structure.)
            */}
            <Route path="/bas-and-ias-lodgement" element={<BasIasLodgementServices />} />
            <Route path="/accounts-payable-receivable" element={<AccountsPayableReceivable />} />
            <Route path="/payroll-superannuation-mgmt" element={<PayrollSuperannuationMgmt />} />
            <Route path="/financial-accounting-reports" element={<FinancialAccountingReports />} />
            {/* Dashboards */}
            {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
            {/* <Route path="/client/dashboard" element={<ClientDashboard />} /> */}
            {/* <Route path="/protected-route" element={<ProtectedRoute />} /> */}

            <Route path="/login" element={<ClientLogin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            {/* Protected admin route */}
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected client route */}
            <Route
              path="/client-dashboard"
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected client contact form route */}
            <Route
              path="/client/contact-form"
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientContactForm />
                </ProtectedRoute>
              }
            />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
