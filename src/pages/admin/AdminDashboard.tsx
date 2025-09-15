import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import apiService, { Company, User } from "@/services/api";
import {
  LogIn,
  LogOut,
  UserPlus,
  Users,
  ShieldAlert,
  Trash2,
  Loader2,
  Search,
  RefreshCw,
  BadgeCheck,
  X,
  Edit,
} from "lucide-react";

type Client = {
  _id: string;
  id: number; // For compatibility with existing UI code
  name: string;
  email: string;
  phone: string;
  type: 'admin' | 'client'; // Add type field
  status: "active" | "inactive" | string;
  address?: string | null;
  company_name?: string | null;
};

const META = {
  title: "Admin Dashboard",
  canonical: "https://www.chromeaccountants.com.au/admin-dashboard/",
};

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30 transition";

const badgeClasses: Record<string, string> = {
  active: "bg-green-50 text-green-700 ring-1 ring-green-200",
  inactive: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
  default: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
};

export default function AdminDashboard() {
  // Auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);

  // Create client form
  const [cname, setCname] = useState("");
  const [cemail, setCemail] = useState("");
  const [cphone, setCphone] = useState("");
  const [caddress, setCaddress] = useState("");
  const [ccompany, setCcompany] = useState("");
  const [ctemp, setCtemp] = useState("");
  const [crole, setCrole] = useState<"client" | "admin">("client");
  const navigate = useNavigate(); // using react-router-dom

  // Invite user form (separate from create client)
  const [iemail, setIemail] = useState("");
  const [irole, setIrole] = useState<"client" | "admin">("client");

  // Data
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  // UI
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<{ type: "success" | "error" | "info"; msg: string } | null>(null);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [clientToDeactivate, setClientToDeactivate] = useState<string | null>(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [addressText, setAddressText] = useState("");
  
  // Individual edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState<Partial<Client>>({});
  const [editLoading, setEditLoading] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>('all');
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'delete' | 'update'>('success');

  // Helpers
  const showToast = (type: "success" | "error" | "info", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3200);
  };

  const displaySuccessNotification = (message: string, type: 'success' | 'delete' | 'update' = 'success') => {
    setSuccessMessage(message);
    setNotificationType(type);
    setShowSuccessNotification(true);
    
    // Trigger fade-in animation
    setTimeout(() => setNotificationVisible(true), 10);
    
    // Start fade-out after 3.5 seconds
    setTimeout(() => {
      setNotificationVisible(false);
      // Hide completely after fade-out animation
      setTimeout(() => {
        setShowSuccessNotification(false);
        setSuccessMessage('');
      }, 300); // Match the fade-out duration
    }, 3500);
  };

  const statusBadgeClass = (status?: string) =>
    badgeClasses[status || ""] || badgeClasses.default;

  const loadClients = async () => {
    setLoading(true);
    try {
      const res = await apiService.getUsers();
      
      if (res.ok) {
        const data = await res.jsonSafe();
        // Map users to clients format
        // The API returns users directly as an array, not wrapped in data
        const users = Array.isArray(data) ? data : (data?.data || []);
        
        const clients: Client[] = users.map((user: User, index: number) => ({
          _id: user._id,
          id: index + 1, // Use sequential number for display compatibility
          name: user.name,
          email: user.email,
          phone: user.phone_number || "",
          type: user.type, // Use actual user type from database
          status: user.is_active ? "active" : "inactive",
          address: user.address || null, // Map address field to address
          company_name: typeof user.company_id === 'object' ? user.company_id?.name : null, // Map company name
        }));
        
        setClients(clients);
        setIsAuthed(true);
      } else {
        const errorData = await res.jsonSafe();
        console.error('Error loading clients:', errorData);
        setIsAuthed(false);
        setClients([]);
      }
    } catch (error) {
      console.error('Error loading clients:', error);
      setIsAuthed(false);
      setClients([]);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const getPaginatedData = (data: Client[]) => {
    if (itemsPerPage === 'all') {
      return data;
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (data: Client[]) => {
    if (itemsPerPage === 'all') {
      return 1;
    }
    return Math.ceil(data.length / itemsPerPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: string) => {
    const newItemsPerPage = value === 'all' ? 'all' : parseInt(value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const login = async () => {
    setAuthLoading(true);
    try {
      const res = await apiService.login({ email, password });
      if (res.ok) {
        const result = await res.jsonSafe();
        if (result && result.user) {
          const { type } = result.user; // Backend uses 'type' field, not 'role'
          
          // Store token and role
          if (result.token) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("role", type);
          }
          
          if (type === 'admin') {
            setIsAuthed(true);
            await loadClients(); // Load clients after successful admin login
            navigate('/admin-dashboard');
            showToast("success", "Logged in as admin");
          } else {
            showToast("error", "Unauthorized access");
            await apiService.logout(); // Log out non-admin users immediately
          }
        }
      } else {
        const errorData = await res.jsonSafe();
        showToast("error", (errorData as any)?.message || "Login failed");
        setIsAuthed(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      showToast("error", "Login failed");
      setIsAuthed(false);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      setIsAuthed(false);
      setClients([]);
      showToast("success", "Logged out");
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const createClient = async () => {
    // Basic validation
    if (!cname.trim() || !cemail.trim()) {
      showToast("error", "Name and Email are required");
      return;
    }
    
    // Company name is optional for client users
    setCreating(true);
    try {
      let companyId = null;
      
      // For client users, create a company only if company name is provided
      if (crole === 'client' && ccompany.trim()) {

        
        const companyData = {
          name: ccompany.trim(),
          email: cemail.trim(),
          phone: cphone.trim() || undefined,
          address: caddress.trim() || undefined,
        };
        const companyRes = await apiService.createCompany(companyData);
        if (!companyRes.ok) {
          const errorData = await companyRes.jsonSafe();
          showToast("error", (errorData as any)?.message || "Failed to create company");
          return;
        }
        const companyResult = await companyRes.jsonSafe() as Company;
        companyId = companyResult?._id;
      }
      
      // Create the user account
      const userData = {
        name: cname.trim(),
        email: cemail.trim(),
        password: ctemp.trim() || "temp123",
        type: crole,
        address: caddress.trim() || undefined,
        phone_number: cphone.trim() || undefined,
        ...(companyId && { company_id: companyId }),
      };
      
      const userRes = await apiService.signup(userData);
      if (userRes.ok) {
        showToast("success", `${crole === 'admin' ? 'Admin' : 'Client'} created successfully`);
        displaySuccessNotification(`${crole === 'admin' ? 'Admin' : 'Client'} created successfully!`);
        // Reset form
        setCname("");
        setCemail("");
        setCphone("");
        setCaddress("");
        setCcompany("");
        setCtemp("");
        setCrole("client");
        await loadClients();
      } else {
        const errorData = await userRes.jsonSafe();
        console.error('User creation failed:', errorData);
        showToast("error", (errorData as any)?.message || "Failed to create user account");
      }
    } catch (error) {
      console.error('Error creating client:', error);
      showToast("error", "Error creating client");
    } finally {
      setCreating(false);
    }
  };

  const handleDeactivateClick = (client: Client) => {
    setClientToDeactivate(client._id);
    setShowDeactivateModal(true);
  };

  const handleAddressClick = (client: Client) => {
    setSelectedClient(client);
    setAddressText(client.address || "");
    setShowAddressModal(true);
  };


  const handleSaveAddress = async () => {
    if (!selectedClient) return;
    
    try {
      // Update the user's address
      const res = await apiService.updateUser(selectedClient._id, { 
        address: addressText
      });
      
      if (res.ok) {
        showToast("success", "Address updated successfully");
        await loadClients(); // Refresh the list
        setShowAddressModal(false);
        setSelectedClient(null);
        setAddressText("");
      } else {
        const errorData = await res.jsonSafe();
        showToast("error", (errorData as any)?.message || "Failed to update address");
      }
    } catch (error) {
      console.error('Error updating address:', error);
      showToast("error", "Failed to update address");
    }
  };




  const handleEditClick = (client: Client) => {
    setSelectedClient(client);
    setEditData({
      name: client.name,
      email: client.email,
      phone: client.phone,
      type: client.type,
      company_name: client.company_name,
      address: client.address
    });
    setShowEditModal(true);
  };

  const handleEditFieldChange = (field: keyof Client, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditSave = async () => {
    if (!selectedClient) return;
    
    setEditLoading(true);
    try {
      // Only update fields that have actually changed
      const changes: any = {};
      if (editData.name && editData.name !== selectedClient.name) changes.name = editData.name;
      if (editData.email && editData.email !== selectedClient.email) changes.email = editData.email;
      if (editData.phone !== selectedClient.phone) changes.phone_number = editData.phone;
      if (editData.company_name !== selectedClient.company_name) changes.company_name = editData.company_name;
      if (editData.address !== selectedClient.address) changes.address = editData.address;

      if (Object.keys(changes).length > 0) {
        const res = await apiService.updateUser(selectedClient._id, changes);
      
      if (res.ok) {
          showToast("success", "Client updated successfully");
          displaySuccessNotification("User information updated successfully!", "update");
        await loadClients();
          setShowEditModal(false);
        setSelectedClient(null);
          setEditData({});
      } else {
        const errorData = await res.jsonSafe();
          showToast("error", (errorData as any)?.message || "Failed to update client");
        }
      } else {
        showToast("info", "No changes were made");
        setShowEditModal(false);
      }
    } catch (error) {
      console.error('Error updating client:', error);
      showToast("error", "Failed to update client");
    } finally {
      setEditLoading(false);
    }
  };

  const confirmDeactivate = async () => {
    if (clientToDeactivate === null) return;
    try {
      const res = await apiService.deleteUser(clientToDeactivate);
      if (res.ok) {
        showToast("success", "User deactivated successfully");
        displaySuccessNotification("User deleted successfully!", "delete");
        await loadClients();
      } else {
        const errorData = await res.jsonSafe();
        showToast("error", (errorData as any)?.message || "Error deactivating user");
      }
    } catch (error) {
      console.error('Error deactivating user:', error);
      showToast("error", "Error deactivating user");
    }
    setShowDeactivateModal(false);
    setClientToDeactivate(null);
  };

  const handleLogout = async () => {
    try {
      await apiService.logout();
      setIsAuthed(false);
      setClients([]);
      showToast("success", "Logged out successfully");
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      showToast("error", "Error during logout");
    }
  };

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return clients;
    return clients.filter(
      (c) =>
        String(c.id).includes(q) ||
        c.name?.toLowerCase().includes(q) ||
        c.email?.toLowerCase().includes(q) ||
        c.phone?.toLowerCase().includes(q) ||
        c.status?.toLowerCase().includes(q) ||
        c.address?.toLowerCase().includes(q) ||
        c.company_name?.toLowerCase().includes(q)
    );
  }, [clients, query]);

  const paginatedData = useMemo(() => {
    return getPaginatedData(filtered);
  }, [filtered, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    return getTotalPages(filtered);
  }, [filtered, itemsPerPage]);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // Load clients when component mounts if user is already authenticated
  useEffect(() => {
    const checkAuthAndLoadClients = async () => {
      try {
        // Check if user is already logged in
        const token = localStorage.getItem('token');
        if (token) {
          // Try to get current user to verify token is valid
          const res = await apiService.getCurrentUser();
          if (res.ok) {
            const result = await res.jsonSafe();
            if (result && result.data && result.data.type === 'admin') {
              setIsAuthed(true);
              await loadClients();
            }
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
        // If there's an error, clear auth state
        setIsAuthed(false);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      }
    };

    checkAuthAndLoadClients();
  }, []);
  // The login function now handles the redirection logic.

  // JSX for Toast notification
  const toastNotification = toast && (
    <div
      className={`fixed top-4 right-4 z-50 rounded-xl px-4 py-3 shadow-lg ${
        toast.type === "success"
          ? "bg-green-600 text-white"
          : toast.type === "error"
          ? "bg-red-600 text-white"
          : "bg-blue-600 text-white"
      }`}
      role="status"
    >
      {toast.msg}
    </div>
  );

  // JSX for the Deactivation Modal
  const deactivateModal = showDeactivateModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-ca-blue">Confirm Deletion</h3>
          <button onClick={() => setShowDeactivateModal(false)} aria-label="Close modal">
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <p className="text-ca-text mb-6">Are you sure you want to delete this client? This action cannot be undone.</p>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setShowDeactivateModal(false)}>
            Cancel
          </Button>
          <Button onClick={confirmDeactivate} className="bg-red-600 hover:bg-red-700 text-white">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );

  // JSX for the Address Modal
  const addressModal = showAddressModal && selectedClient && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-ca-blue">Address for {selectedClient.name}</h3>
          <button onClick={() => setShowAddressModal(false)} aria-label="Close modal">
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-ca-text mb-2">Address</label>
          <textarea
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30 transition"
            rows={4}
            value={addressText}
            onChange={(e) => setAddressText(e.target.value)}
            placeholder="Enter the client's address..."
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setShowAddressModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSaveAddress} className="bg-ca-mango hover:bg-ca-mango/90 text-ca-blue">
            Save Address
          </Button>
        </div>
      </div>
    </div>
  );


  // JSX for the Individual Edit Modal
  const editModal = showEditModal && selectedClient && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-semibold text-ca-blue">Edit Client: {selectedClient.name}</h3>
          <button onClick={() => setShowEditModal(false)} aria-label="Close modal">
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">Name</label>
          <input
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30"
                  value={editData.name || ''}
                  onChange={(e) => handleEditFieldChange('name', e.target.value)}
                  placeholder="Enter client name"
          />
        </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">Email</label>
          <input
            type="email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30"
                  value={editData.email || ''}
                  onChange={(e) => handleEditFieldChange('email', e.target.value)}
                  placeholder="Enter email address"
          />
        </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30"
                  value={editData.phone || ''}
                  onChange={(e) => handleEditFieldChange('phone', e.target.value)}
                  placeholder="Enter phone number"
                />
        </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">Role</label>
                <div className="flex items-center">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                    selectedClient.type === 'admin' 
                      ? 'bg-purple-100 text-purple-700 ring-1 ring-purple-200' 
                      : 'bg-blue-100 text-blue-700 ring-1 ring-blue-200'
                  }`}>
                    {selectedClient.type === 'admin' ? 'Admin' : 'Client'}
                  </span>
      </div>
    </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">Company Name</label>
          <input
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30"
                  value={editData.company_name || ''}
                  onChange={(e) => handleEditFieldChange('company_name', e.target.value)}
                  placeholder="Enter company name"
          />
        </div>
              
              <div>
                <label className="block text-sm font-medium text-ca-text mb-2">Status</label>
                <div className="flex items-center">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${statusBadgeClass(selectedClient.status)}`}>
                    <BadgeCheck className="h-3 w-3" />
                    {selectedClient.status}
                  </span>
        </div>
      </div>
    </div>
            
            <div>
              <label className="block text-sm font-medium text-ca-text mb-2">Address</label>
              <textarea
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30 resize-none"
                rows={4}
                value={editData.address || ''}
                onChange={(e) => handleEditFieldChange('address', e.target.value)}
                placeholder="Enter full address"
          />
        </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3 p-6 border-t">
          <Button variant="outline" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleEditSave} 
            className="bg-ca-mango hover:bg-ca-mango/90 text-ca-blue"
            disabled={editLoading}
          >
            {editLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <link rel="canonical" href={META.canonical} />
      </Helmet>
      {toastNotification}
      {deactivateModal}
      {addressModal}
      {editModal}
      

      {/* Success Notification */}
      {showSuccessNotification && (
        <div 
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 9999,
            backgroundColor: notificationType === 'delete' ? '#ef4444' : notificationType === 'update' ? '#f59e0b' : '#10b981',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '400px',
            border: `2px solid ${notificationType === 'delete' ? '#dc2626' : notificationType === 'update' ? '#d97706' : '#059669'}`,
            opacity: notificationVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div style={{ flexShrink: 0 }}>
            {notificationType === 'delete' ? (
              <Trash2 className="h-6 w-6" />
            ) : notificationType === 'update' ? (
              <Edit className="h-6 w-6" />
            ) : (
              <BadgeCheck className="h-6 w-6" />
            )}
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
              padding: '4px'
            }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Hero / Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ca-blue to-ca-dark text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-ca-mango" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Admin Dashboard</h1>
            </div>
            {isAuthed && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base w-fit"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Logout</span>
              </button>
            )}
          </div>
          <p className="mt-3 text-ca-silver max-w-2xl text-sm sm:text-base">
            Manage client onboarding, status, and notes with the Chrome Accountants admin dashboard.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Auth Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="lg:col-span-2">
            {/* Create Client */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 sm:h-6 sm:w-6 text-ca-mango" />
                  <h3 className="text-lg sm:text-xl font-semibold text-ca-blue">Create Client</h3>
                </div>
                <Button
                  variant="outline"
                  onClick={loadClients}
                  className="border-ca-blue text-ca-blue text-sm sm:text-base w-fit"
                  aria-label="Refresh clients"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Refresh</span>
                  <span className="sm:hidden">Refresh</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-ca-text mb-1">Name *</label>
                  <input className={fieldBase} value={cname} onChange={(e) => setCname(e.target.value)} placeholder="Sarah Chen" />
                </div>
                <div>
                  <label className="block text-sm text-ca-text mb-1">Email *</label>
                  <input className={fieldBase} value={cemail} onChange={(e) => setCemail(e.target.value)} placeholder="sarah@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-ca-text mb-1">Phone</label>
                  <input className={fieldBase} value={cphone} onChange={(e) => setCphone(e.target.value)} placeholder="+61 4xx xxx xxx" />
                </div>
                <div>
                  <label className="block text-sm text-ca-text mb-1">Role *</label>
                  <select 
                    className={fieldBase} 
                    value={crole} 
                    onChange={(e) => setCrole(e.target.value as "client" | "admin")}
                  >
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                {crole === 'client' && (
                  <div>
                    <label className="block text-sm text-ca-text mb-1">Company Name</label>
                    <input className={fieldBase} value={ccompany} onChange={(e) => setCcompany(e.target.value)} placeholder="Acme Corporation" />
                  </div>
                )}
                <div>
                  <label className="block text-sm text-ca-text mb-1">Temp Password *</label>
                  <input className={fieldBase} value={ctemp} onChange={(e) => setCtemp(e.target.value)} placeholder="Temp@123" />
                </div>
                <div>
                  <label className="block text-sm text-ca-text mb-1">Address</label>
                  <textarea className={fieldBase} rows={3} value={caddress} onChange={(e) => setCaddress(e.target.value)} placeholder="123 Main Street, City, State 12345" />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Button onClick={createClient} disabled={creating}>
                  {creating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Create
                </Button>
                <p className="text-xs text-ca-text">* Required</p>
              </div>
            </div>
          </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mt-6 lg:mt-10">
          <div className="flex items-center gap-2 mb-4">
            <UserPlus className="h-5 w-5 sm:h-6 sm:w-6 text-ca-mango" />
            <h3 className="text-lg sm:text-xl font-semibold text-ca-blue">Invite User</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-ca-text mb-1">Email</label>
              <input
                className={fieldBase}
                value={iemail}
                onChange={(e) => setIemail(e.target.value)}
                placeholder="user@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-ca-text mb-1">Role</label>
              <select
                className={fieldBase}
                value={irole}
                onChange={(e) => setIrole(e.target.value as "client" | "admin")}
              >
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button
              onClick={async () => {
                if (!iemail.trim()) {
                  showToast("error", "Email is required");
                  return;
                }
                
                try {
                  const res = await apiService.inviteUser(iemail.trim(), irole);
                  if (res.ok) {
                    const result = await res.jsonSafe();
                    showToast("success", `🎉 User Invited Successfully! Invitation email sent to ${iemail}. Check their inbox for login credentials.`);
                    displaySuccessNotification(`User invited successfully! Email sent to ${iemail}`);
                    setIemail("");
                    setIrole("client");
                  } else {
                    const errorData = await res.jsonSafe();
                    console.error('Invite API error:', errorData);
                    showToast("error", (errorData as any)?.message || "Failed to send invitation");
                  }
                } catch (error) {
                  console.error('Invite error:', error);
                  showToast("error", "Failed to send invitation. Please check your connection and try again.");
                }
              }}
            >
              Invite
            </Button>
          </div>
        </div>
        </div>

        {/* Clients Table */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 border-b">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-ca-mango" />
              <h3 className="text-base sm:text-lg font-semibold text-ca-blue">Clients</h3>
              <span className="ml-2 text-xs sm:text-sm text-ca-text">{clients.length} total</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
              {/* Items per page dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-xs sm:text-sm font-medium text-ca-text">Show:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30"
                >
                  <option value="all">All</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                </select>
              </div>
              
              {/* Search bar */}
              <div className="relative w-full sm:w-80">
              <Search className="absolute left-2 sm:left-3 top-2 sm:top-2.5 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
              <input
                className="w-full rounded-xl border border-gray-200 bg-white pl-7 sm:pl-9 pr-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:border-ca-mango focus:ring-2 focus:ring-ca-mango/30 transition"
                placeholder="Search name, email, phone, status…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left sticky top-0">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ca-text">ID</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Name</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Email</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Phone</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Role</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Company</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Status</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Address</th>
                  <th className="px-4 py-3 font-semibold text-ca-text">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  [...Array(6)].map((_, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3"><div className="h-4 w-10 bg-gray-100 rounded" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-40 bg-gray-100 rounded" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-56 bg-gray-100 rounded" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-28 bg-gray-100 rounded" /></td>
                      <td className="px-4 py-3"><div className="h-6 w-20 bg-gray-100 rounded-full" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-64 bg-gray-100 rounded" /></td>
                      <td className="px-4 py-3"><div className="h-8 w-24 bg-gray-100 rounded" /></td>
                    </tr>
                  ))
                ) : filtered.length === 0 ? (
                  <tr className="border-t">
                    <td colSpan={7} className="px-4 py-10 text-center text-ca-text">
                      {isAuthed === false ? (
                        <span className="inline-flex items-center gap-2 text-red-600">
                          <ShieldAlert className="h-4 w-4" />
                          Unauthorized. Please sign in.
                        </span>
                      ) : (
                        "No clients found."
                      )}
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((c) => (
                    <tr key={c.id} className="border-t hover:bg-gray-50/60">
                      <td className="px-4 py-3 text-ca-text">{c.id}</td>
                      <td className="px-4 py-3">
                        <span className="font-medium text-ca-blue">{c.name}</span>
                      </td>
                      <td className="px-4 py-3 text-ca-text">{c.email}</td>
                      <td className="px-4 py-3 text-ca-text">{c.phone || "No phone"}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                          c.type === 'admin' 
                            ? 'bg-purple-100 text-purple-700 ring-1 ring-purple-200' 
                            : 'bg-blue-100 text-blue-700 ring-1 ring-blue-200'
                        }`}>
                          {c.type === 'admin' ? 'Admin' : 'Client'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ca-text">{c.company_name || '-'}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ring-1 ${statusBadgeClass(c.status)}`}>
                          <BadgeCheck className="h-3 w-3" />
                          {c.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ca-text">
                        <button
                          onClick={() => handleAddressClick(c)}
                          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-ca-mango hover:bg-ca-mango/10 transition-colors group"
                          aria-label="View address"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {c.address ? 'View' : 'Add address'}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditClick(c)}
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-ca-mango hover:bg-ca-mango/10"
                            aria-label={`Edit ${c.name}`}
                          >
                            <Edit className="h-3.5 w-3.5" />
                            Edit
                          </button>
                        <button
                          onClick={() => handleDeactivateClick(c)}
                          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                          aria-label={`Deactivate ${c.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                            Delete
                        </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls - Always reserve space */}
          {isAuthed && filtered.length > 0 && (
            <div className="mt-8 px-8 pb-6 min-h-[80px] flex flex-col justify-center">
              {/* Client count info */}
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-ca-text">
                  Showing {paginatedData.length} of {filtered.length} clients
                </span>
              </div>

              {/* Pagination navigation - centered */}
              {itemsPerPage !== 'all' && totalPages > 1 ? (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ca-text bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  {/* Page numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-ca-mango text-white'
                            : 'text-ca-text bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ca-text bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                /* Invisible spacer when pagination is not needed */
                <div className="h-10"></div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

