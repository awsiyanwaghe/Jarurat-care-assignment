import { User, Phone, Mail } from 'lucide-react'

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-200">
      <div className="flex flex-col h-full">
        {/* Header with Avatar */}
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{patient.name}</h3>
            <p className="text-sm text-gray-500">Patient ID: #{patient.id}</p>
          </div>
        </div>

        {/* Patient Details */}
        <div className="text-gray-600 mb-6 flex-grow space-y-3">
          <div className="flex items-center">
            <span className="w-16 text-sm font-medium text-gray-500">Age:</span>
            <span className="text-gray-900 font-medium">{patient.age}</span>
          </div>
          
          {patient.contact && (
            <div className="flex items-center">
              <Mail className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600 truncate">{patient.contact}</span>
            </div>
          )}
          
          {patient.phone && (
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">{patient.phone}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(patient)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg mt-auto"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default PatientCard