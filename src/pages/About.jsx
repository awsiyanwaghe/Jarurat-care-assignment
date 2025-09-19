import { Heart, Target, Award, Users, Stethoscope, Shield } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every patient with empathy and understanding"
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We maintain the highest standards in medical care"
    },
    {
      icon: Stethoscope,
      title: "Innovation",
      description: "We embrace new technologies and treatments"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold ethical practices in all we do"
    },
    {
      icon: Users,
      title: "Community",
      description: "We are committed to serving our local community"
    }
  ]

  const services = [
    "Primary Care & Family Medicine",
    "Specialist Consultations",
    "Diagnostic Services & Lab Tests",
    "Preventive Health Screenings",
    "Chronic Disease Management",
    "Emergency Care Services"
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">About </span>
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Jarurat Care
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A leading healthcare provider committed to delivering exceptional medical 
          services to our community. Founded with the mission to make quality healthcare 
          accessible to everyone.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To provide comprehensive, patient-centered healthcare that improves the quality 
            of life for the individuals and communities we serve through compassionate care 
            and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600">The principles that guide everything we do</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div 
                key={index}
                className="group p-6 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Stethoscope className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer a comprehensive range of medical services to meet all your healthcare needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl hover:from-blue-100 hover:to-green-100 transition-all duration-200"
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-800 font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality Care?</h2>
        <p className="text-blue-100 mb-6 text-lg">
          Join thousands of satisfied patients who trust Jarurat Care for their healthcare needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
            Book Appointment
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default About