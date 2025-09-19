// Mock patient data
export const mockPatients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    contact: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA",
    medicalHistory: "Hypertension, Type 2 Diabetes",
    lastVisit: "2023-05-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    contact: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave, Somewhere, USA",
    medicalHistory: "Asthma, Allergies",
    lastVisit: "2023-06-20"
  },
  {
    id: 3,
    name: "Robert Johnson",
    age: 68,
    contact: "robert.j@example.com",
    phone: "+1 (555) 456-7890",
    address: "789 Pine Rd, Nowhere, USA",
    medicalHistory: "Heart disease, Arthritis",
    lastVisit: "2023-04-10"
  },
  {
    id: 4,
    name: "Sarah Williams",
    age: 29,
    contact: "sarah.w@example.com",
    phone: "+1 (555) 234-5678",
    address: "321 Elm St, Anytown, USA",
    medicalHistory: "Migraines",
    lastVisit: "2023-07-05"
  },
  {
    id: 5,
    name: "Michael Brown",
    age: 52,
    contact: "michael.b@example.com",
    phone: "+1 (555) 876-5432",
    address: "654 Maple Dr, Somewhere, USA",
    medicalHistory: "High cholesterol, Sleep apnea",
    lastVisit: "2023-06-12"
  },
  {
    id: 6,
    name: "Emily Davis",
    age: 24,
    contact: "emily.d@example.com",
    phone: "+1 (555) 345-6789",
    address: "987 Cedar Ln, Nowhere, USA",
    medicalHistory: "None",
    lastVisit: "2023-07-18"
  }
]

// Function to simulate API fetch with delay
export const fetchPatients = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate random error (10% chance)
      if (Math.random() < 0.1) {
        reject(new Error("Failed to fetch patient data"))
      } else {
        resolve(mockPatients)
      }
    }, 1000)
  })
}