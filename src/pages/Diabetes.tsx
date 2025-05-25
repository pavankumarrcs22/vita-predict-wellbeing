
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets } from "lucide-react";
import PredictionForm from "@/components/PredictionForm";

const Diabetes = () => {
  const diabetesFields = [
    { name: 'pregnancies', label: 'Number of Pregnancies', type: 'number' as const, min: 0, max: 20 },
    { name: 'glucose', label: 'Glucose Level', type: 'number' as const, min: 50, max: 300, unit: 'mg/dl' },
    { name: 'bloodPressure', label: 'Blood Pressure', type: 'number' as const, min: 50, max: 200, unit: 'mmHg' },
    { name: 'skinThickness', label: 'Skin Thickness', type: 'number' as const, min: 0, max: 100, unit: 'mm' },
    { name: 'insulin', label: 'Insulin Level', type: 'number' as const, min: 0, max: 900, unit: 'μU/ml' },
    { name: 'bmi', label: 'BMI', type: 'number' as const, min: 10, max: 70, step: 0.1, unit: 'kg/m²' },
    { name: 'diabetesPedigree', label: 'Diabetes Pedigree Function', type: 'number' as const, min: 0, max: 3, step: 0.001 },
    { name: 'age', label: 'Age', type: 'number' as const, min: 1, max: 120, unit: 'years' }
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Diabetes prediction data:', data);
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3 ml-8">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Diabetes Prediction</h1>
                <p className="text-sm text-gray-600">Diabetes Risk Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <PredictionForm
          title="Diabetes Risk Assessment"
          description="Evaluate your diabetes risk based on key health indicators including glucose levels, BMI, and family history."
          fields={diabetesFields}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default Diabetes;
