import { useState } from 'react'
import { Plus, AlertCircle, RefreshCw } from 'lucide-react'
import usePatients from '../hooks/usePatients'
import PatientCard from '../components/PatientCard'
import PatientModal from '../components/PatientModal'
import SearchBar from '../components/SearchBar'
import AddPatientForm from '../components/AddPatientForm'

const Patients = () => {
  const { patients, loading, error, searchPatients, addPatient } = usePatients()
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedPatient(null)
  }

  const handleAddPatient = (newPatient) => {
    addPatient(newPatient)
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading Patients</h3>
          <p className="text-gray-500">Please wait while we fetch the records...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-3xl p-8 text-center shadow-xl border border-red-100">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Error Loading Patients</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Patient Records</h1>
          <p className="text-gray-500">Manage and view patient information</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center whitespace-nowrap"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Patient
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={searchPatients} />

      {/* Content */}
      {patients.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">No patients found</h3>
          <p className="text-gray-600 leading-relaxed">Try adjusting your search criteria or add a new patient.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      )}

      {/* Modals */}
      {showModal && (
        <PatientModal
          patient={selectedPatient}
          isOpen={showModal}
          onClose={handleCloseModal}
        />
      )}

      {showAddForm && (
        <AddPatientForm
          onAddPatient={handleAddPatient}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  )
}

export default Patients