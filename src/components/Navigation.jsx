const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'patients', label: 'Patients' },
    { id: 'about', label: 'About' }
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`px-4 py-3 font-medium transition-colors duration-200 ${
                currentPage === item.id
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation