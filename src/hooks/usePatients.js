import { useState, useEffect } from 'react'
import { fetchPatients } from '../data/mockData'

const usePatients = () => {
  const [patients, setPatients] = useState([])
  const [filteredPatients, setFilteredPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPatients = async () => {
      try {
        setLoading(true)
        const data = await fetchPatients()
        setPatients(data)
        setFilteredPatients(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getPatients()
  }, [])

  const searchPatients = (query) => {
    if (!query) {
      setFilteredPatients(patients)
      return
    }

    const lowerCaseQuery = query.toLowerCase()
    const filtered = patients.filter(patient => 
      patient.name.toLowerCase().includes(lowerCaseQuery)
    )
    setFilteredPatients(filtered)
  }

  const addPatient = (newPatient) => {
    const id = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1
    const patientToAdd = { ...newPatient, id }
    setPatients([...patients, patientToAdd])
    setFilteredPatients([...patients, patientToAdd])
  }

  return {
    patients: filteredPatients,
    loading,
    error,
    searchPatients,
    addPatient
  }
}

export default usePatients