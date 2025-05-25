
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import PredictionForm from "@/components/PredictionForm";

const HeartDisease = () => {
  const heartDiseaseFields = [
    { name: 'age', label: 'Age', type: 'number' as const, min: 1, max: 120, unit: 'years' },
    { 
      name: 'sex', 
      label: 'Sex', 
      type: 'select' as const, 
      options: [
        { value: '0', label: 'Female' },
        { value: '1', label: 'Male' }
      ]
    },
    { 
      name: 'chestPain', 
      label: 'Chest Pain Type', 
      type: 'select' as const,
      options: [
        { value: '0', label: 'Typical Angina' },
        { value: '1', label: 'Atypical Angina' },
        { value: '2', label: 'Non-anginal Pain' },
        { value: '3', label: 'Asymptomatic' }
      ]
    },
    { name: 'restingBP', label: 'Resting Blood Pressure', type: 'number' as const, min: 80, max: 200, unit: 'mmHg' },
    { name: 'cholesterol', label: 'Cholesterol', type: 'number' as const, min: 100, max: 400, unit: 'mg/dl' },
    { 
      name: 'fastingBS', 
      label: 'Fasting Blood Sugar > 120 mg/dl', 
      type: 'select' as const,
      options: [
        { value: '0', label: 'No' },
        { value: '1', label: 'Yes' }
      ]
    },
    { 
      name: 'restingECG', 
      label: 'Resting ECG', 
      type: 'select' as const,
      options: [
        { value: '0', label: 'Normal' },
        { value: '1', label: 'ST-T wave abnormality' },
        { value: '2', label: 'Left ventricular hypertrophy' }
      ]
    },
    { name: 'maxHR', label: 'Maximum Heart Rate', type: 'number' as const, min: 60, max: 220, unit: 'bpm' },
    { 
      name: 'exerciseAngina', 
      label: 'Exercise Induced Angina', 
      type: 'select' as const,
      options: [
        { value: '0', label: 'No' },
        { value: '1', label: 'Yes' }
      ]
    },
    { name: 'oldpeak', label: 'ST Depression', type: 'number' as const, min: 0, max: 10, step: 0.1, unit: 'mm' }
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Heart disease prediction data:', data);
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3 ml-8">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Heart Disease Prediction</h1>
                <p className="text-sm text-gray-600">Cardiovascular Risk Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <PredictionForm
          title="Heart Disease Risk Assessment"
          description="Enter your health parameters to assess your risk of heart disease. Our AI model analyzes multiple cardiovascular risk factors."
          fields={heartDiseaseFields}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default HeartDisease;
