import { Heart, Menu, Bell, User, Search, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const notifications = [
    { id: 1, message: "New patient registration", time: "2 mins ago", read: false },
    { id: 2, message: "Appointment reminder", time: "1 hour ago", read: true },
    { id: 3, message: "Lab results available", time: "3 hours ago", read: false }
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl border-b border-blue-500/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/10">
              <Heart className="w-7 h-7 text-white" fill="white" fillOpacity="0.2" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Jarurat Care
              </h1>
              <p className="text-blue-100 text-sm opacity-90 hidden sm:block">Comprehensive Healthcare Management</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300" />
              <input
                type="text"
                placeholder="Search patients, records..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 placeholder-blue-200 text-white backdrop-blur-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button - Mobile */}
            <button className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                className="relative p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                    <p className="text-sm text-gray-500">{unreadCount} unread</p>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 last:border-b-0 hover:bg-blue-50 transition-colors duration-200 ${
                          !notification.read ? 'bg-blue-50/50' : ''
                        }`}
                      >
                        <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gray-50 rounded-b-xl">
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-700 w-full text-center">
                      Mark all as read
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-200">
                  <User className="w-4 h-4" />
                </div>
                <div className="hidden md:block text-left">
                  <span className="font-medium block text-sm">Dr. Sarah Johnson</span>
                  <span className="text-blue-200 text-xs opacity-80">Administrator</span>
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-100">
                    <p className="font-medium text-gray-800">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-500">sarah.j@jaruratcare.com</p>
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Profile Settings</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Account Settings</span>
                    </button>
                  </div>
                  <div className="p-3 border-t border-gray-100">
                    <button className="w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - appears when menu is open */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300" />
              <input
                type="text"
                placeholder="Search patients, records..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 placeholder-blue-200 text-white backdrop-blur-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Overlay for dropdowns */}
      {(showNotifications || showProfileMenu) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowNotifications(false)
            setShowProfileMenu(false)
          }}
        />
      )}
    </header>
  )
}

export default Header