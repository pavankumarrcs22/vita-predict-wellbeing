
import { Link } from "react-router-dom";
import { ArrowLeft, Kidney } from "lucide-react";
import PredictionForm from "@/components/PredictionForm";

const KidneyDisease = () => {
  const kidneyDiseaseFields = [
    { name: 'age', label: 'Age', type: 'number' as const, min: 1, max: 120, unit: 'years' },
    { name: 'bloodPressure', label: 'Blood Pressure', type: 'number' as const, min: 50, max: 200, unit: 'mmHg' },
    { name: 'specificGravity', label: 'Specific Gravity', type: 'number' as const, min: 1.005, max: 1.035, step: 0.001 },
    { 
      name: 'albumin', 
      label: 'Albumin in Urine', 
      type: 'select' as const,
      options: [
        { value: '0', label: 'Normal' },
        { value: '1', label: 'Trace' },
        { value: '2', label: '+' },
        { value: '3', label: '++' },
        { value: '4', label: '+++' },
        { value: '5', label: '++++' }
      ]
    },
    { 
      name: 'sugar', 
      label: 'Sugar in Urine', 
      type: 'select' as const,
      options: [
        { value: '0', label: 'Normal' },
        { value: '1', label: 'Trace' },
        { value: '2', label: '+' },
        { value: '3', label: '++' },
        { value: '4', label: '+++' },
        { value: '5', label: '++++' }
      ]
    },
    { name: 'bloodGlucoseRandom', label: 'Blood Glucose Random', type: 'number' as const, min: 50, max: 500, unit: 'mg/dl' },
    { name: 'bloodUrea', label: 'Blood Urea', type: 'number' as const, min: 10, max: 200, unit: 'mg/dl' },
    { name: 'serumCreatinine', label: 'Serum Creatinine', type: 'number' as const, min: 0.5, max: 10, step: 0.1, unit: 'mg/dl' },
    { name: 'sodium', label: 'Sodium', type: 'number' as const, min: 100, max: 180, unit: 'mEq/L' },
    { name: 'potassium', label: 'Potassium', type: 'number' as const, min: 2, max: 8, step: 0.1, unit: 'mEq/L' },
    { name: 'hemoglobin', label: 'Hemoglobin', type: 'number' as const, min: 5, max: 20, step: 0.1, unit: 'g/dl' }
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Kidney disease prediction data:', data);
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3 ml-8">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Kidney className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Kidney Disease Prediction</h1>
                <p className="text-sm text-gray-600">Renal Function Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <PredictionForm
          title="Kidney Disease Risk Assessment"
          description="Evaluate your kidney function and assess the risk of chronic kidney disease based on blood and urine tests."
          fields={kidneyDiseaseFields}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default KidneyDisease;
