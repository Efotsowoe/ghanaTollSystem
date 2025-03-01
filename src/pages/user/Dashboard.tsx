import React from 'react';
import { Link } from 'react-router-dom';
import { Car, CreditCard, AlertCircle, History, MessageSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data for dashboard
  const recentTolls = [
    { id: 1, date: '2025-05-10', time: '08:32 AM', location: 'Accra-Tema Motorway', amount: 10.00, vehicle: 'GR-2345-22', status: 'Paid' },
    { id: 2, date: '2025-05-09', time: '05:15 PM', location: 'Kasoa Toll Plaza', amount: 5.00, vehicle: 'GR-2345-22', status: 'Paid' },
    { id: 3, date: '2025-05-07', time: '09:45 AM', location: 'Accra-Tema Motorway', amount: 10.00, vehicle: 'GR-2345-22', status: 'Paid' },
  ];
  
  const outstandingBalances = [
    { id: 1, date: '2025-05-08', location: 'Accra-Tema Motorway', amount: 10.00, vehicle: 'GW-5678-21', dueDate: '2025-05-11' },
  ];
  
  const vehicles = [
    { id: 1, plate: 'GR-2345-22', type: 'Sedan', make: 'Toyota', model: 'Corolla', year: 2020, status: 'Active' },
    { id: 2, plate: 'GW-5678-21', type: 'SUV', make: 'Honda', model: 'CR-V', year: 2019, status: 'Active' },
  ];
  
  const paymentMethods = [
    { id: 1, type: 'Mobile Money', provider: 'MTN MoMo', number: '024*******9', isDefault: true },
    { id: 2, type: 'Credit Card', provider: 'Visa', number: '****-****-****-4567', isDefault: false },
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
        <p className="text-gray-600">Here's an overview of your toll account</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-blue-100">Total Toll Payments (This Month)</span>
            <span className="text-3xl font-bold mt-2">GHS 85.00</span>
            <div className="mt-4">
              <Link to="/user/toll-history">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-blue-700">
                  View History
                </Button>
              </Link>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-green-100">Active Vehicles</span>
            <span className="text-3xl font-bold mt-2">{vehicles.length}</span>
            <div className="mt-4">
              <Link to="/user/vehicles">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-green-700">
                  Manage Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-100">Outstanding Balance</span>
            <span className="text-3xl font-bold mt-2">GHS {outstandingBalances.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}</span>
            <div className="mt-4">
              <Link to="/user/outstanding-balances">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-red-700">
                  Pay Now
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Recent Toll Transactions" headerAction={
          <Link to="/user/toll-history">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        }>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTolls.map((toll) => (
                  <tr key={toll.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {toll.date} <br />
                      <span className="text-gray-500">{toll.time}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{toll.location}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{toll.vehicle}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">GHS {toll.amount.toFixed(2)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <Badge variant="success">{toll.status}</Badge>
                    </td>
                  </tr>
                ))}
                {recentTolls.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-4 text-sm text-gray-500 text-center">No recent toll transactions</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card title="Outstanding Balances" headerAction={
          <Link to="/user/outstanding-balances">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        }>
          {outstandingBalances.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {outstandingBalances.map((balance) => (
                    <tr key={balance.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{balance.date}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{balance.location}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{balance.vehicle}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">GHS {balance.amount.toFixed(2)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{balance.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No Outstanding Balances</h3>
              <p className="mt-1 text-sm text-gray-500">You have no unpaid toll charges at this time.</p>
            </div>
          )}
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="My Vehicles" headerAction={
          <Link to="/user/vehicles">
            <Button variant="outline" size="sm">Manage</Button>
          </Link>
        }>
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {vehicle.plate}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {vehicle.make} {vehicle.model} ({vehicle.year})
                  </p>
                </div>
                <div>
                  <Badge variant={vehicle.status === 'Active' ? 'success' : 'warning'}>
                    {vehicle.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Link to="/user/vehicles">
              <Button variant="outline" fullWidth leftIcon={<Car size={16} />}>
                Add New Vehicle
              </Button>
            </Link>
          </div>
        </Card>
        
        <Card title="Payment Methods" headerAction={
          <Link to="/user/payment-methods">
            <Button variant="outline" size="sm">Manage</Button>
          </Link>
        }>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {method.type} - {method.provider}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {method.number}
                  </p>
                </div>
                {method.isDefault && (
                  <div>
                    <Badge variant="primary">Default</Badge>
                  </div>
                )}
              </div>
            ))}
            <Link to="/user/payment-methods">
              <Button variant="outline" fullWidth leftIcon={<CreditCard size={16} />}>
                Add Payment Method
              </Button>
            </Link>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mt-6">
        <Card>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Need Help?</h3>
                <p className="text-sm text-gray-500">Have questions or need to dispute a toll charge?</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link to="/user/disputes">
                <Button leftIcon={<AlertCircle size={16} />}>
                  Open Dispute
                </Button>
              </Link>
              <Button variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;