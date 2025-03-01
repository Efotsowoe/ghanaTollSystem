import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  AlertTriangle, 
  Car, 
  Map,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data for dashboard
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (GHS)',
        data: [150000, 180000, 210000, 220000, 250000, 280000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
      },
    ],
  };
  
  const trafficData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Traffic Volume',
        data: [12500, 15000, 14800, 13900, 16200, 10500, 9000],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
      },
    ],
  };
  
  const paymentMethodsData = {
    labels: ['Mobile Money', 'Bank Account', 'Credit/Debit Card'],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(249, 115, 22, 0.7)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(249, 115, 22)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const tollLocations = [
    { id: 1, name: 'Accra-Tema Motorway', dailyTraffic: 25000, dailyRevenue: 250000, status: 'Operational' },
    { id: 2, name: 'Kasoa Toll Plaza', dailyTraffic: 18000, dailyRevenue: 90000, status: 'Operational' },
    { id: 3, name: 'Tema-Aflao Road', dailyTraffic: 12000, dailyRevenue: 60000, status: 'Operational' },
    { id: 4, name: 'Accra-Kumasi Highway', dailyTraffic: 20000, dailyRevenue: 100000, status: 'Maintenance' },
  ];
  
  const recentAlerts = [
    { id: 1, type: 'System', message: 'Database backup completed successfully', time: '10 minutes ago' },
    { id: 2, type: 'Revenue', message: 'Daily revenue target exceeded for Accra-Tema Motorway', time: '2 hours ago' },
    { id: 3, type: 'Traffic', message: 'Unusual traffic pattern detected at Kasoa Toll Plaza', time: '5 hours ago' },
    { id: 4, type: 'Maintenance', message: 'Scheduled maintenance for ANPR cameras at Tema-Aflao Road', time: '1 day ago' },
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.name}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-blue-100">Total Revenue (Today)</p>
              <p className="text-2xl font-bold mt-1">GHS 500,000</p>
              <div className="flex items-center mt-2 text-blue-100">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span className="text-xs">12% from yesterday</span>
              </div>
            </div>
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-green-100">Total Traffic (Today)</p>
              <p className="text-2xl font-bold mt-1">75,000 vehicles</p>
              <div className="flex items-center mt-2 text-green-100">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span className="text-xs">8% from yesterday</span>
              </div>
            </div>
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-orange-100">Registered Users</p>
              <p className="text-2xl font-bold mt-1">12,458</p>
              <div className="flex items-center mt-2 text-orange-100">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span className="text-xs">24 new today</span>
              </div>
            </div>
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-red-100">Outstanding Payments</p>
              <p className="text-2xl font-bold mt-1">GHS 45,250</p>
              <div className="flex items-center mt-2 text-red-100">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                <span className="text-xs">5% from yesterday</span>
              </div>
            </div>
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Revenue Trend (Last 6 Months)" headerAction={
          <Link to="/admin/revenue">
            <Button variant="outline" size="sm">View Details</Button>
          </Link>
        }>
          <div className="h-80">
            <Line 
              data={revenueData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function(value) {
                        return 'GHS ' + value.toLocaleString();
                      }
                    }
                  }
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return 'Revenue: GHS ' + context.parsed.y.toLocaleString();
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </Card>
        
        <Card title="Weekly Traffic Volume" headerAction={
          <Link to="/admin/toll-management">
            <Button variant="outline" size="sm">View Details</Button>
          </Link>
        }>
          <div className="h-80">
            <Bar 
              data={trafficData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function(value) {
                        return value.toLocaleString();
                      }
                    }
                  }
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return 'Vehicles: ' + context.parsed.y.toLocaleString();
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card title="Payment Methods Distribution">
          <div className="h-64">
            <Doughnut 
              data={paymentMethodsData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </Card>
        
        <Card title="Toll Locations" className="lg:col-span-2" headerAction={
          <Link to="/admin/toll-management">
            <Button variant="outline" size="sm">Manage Tolls</Button>
          </Link>
        }>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Traffic</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Revenue</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tollLocations.map((location) => (
                  <tr key={location.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{location.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{location.dailyTraffic.toLocaleString()}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">GHS {location.dailyRevenue.toLocaleString()}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        location.status === 'Operational' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {location.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card title="System Alerts & Notifications" headerAction={
          <Button variant="outline" size="sm">View All</Button>
        }>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 mr-4">
                  <div className={`p-2 rounded-full ${
                    alert.type === 'System' ? 'bg-blue-100' :
                    alert.type === 'Revenue' ? 'bg-green-100' :
                    alert.type === 'Traffic' ? 'bg-orange-100' : 'bg-red-100'
                  }`}>
                    <AlertTriangle className={`h-5 w-5 ${
                      alert.type === 'System' ? 'text-blue-600' :
                      alert.type === 'Revenue' ? 'text-green-600' :
                      alert.type === 'Traffic' ? 'text-orange-600' : 'text-red-600'
                    }`} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {alert.type}
                    </p>
                    <p className="text-xs text-gray-500">
                      {alert.time}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {alert.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;