
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import PredictionForm from "@/components/PredictionForm";

const LiverDisease = () => {
  const liverDiseaseFields = [
    { name: 'age', label: 'Age', type: 'number' as const, min: 1, max: 120, unit: 'years' },
    { 
      name: 'gender', 
      label: 'Gender', 
      type: 'select' as const, 
      options: [
        { value: '0', label: 'Female' },
        { value: '1', label: 'Male' }
      ]
    },
    { name: 'totalBilirubin', label: 'Total Bilirubin', type: 'number' as const, min: 0, max: 30, step: 0.1, unit: 'mg/dl' },
    { name: 'directBilirubin', label: 'Direct Bilirubin', type: 'number' as const, min: 0, max: 15, step: 0.1, unit: 'mg/dl' },
    { name: 'alkalinePhos', label: 'Alkaline Phosphatase', type: 'number' as const, min: 0, max: 3000, unit: 'IU/L' },
    { name: 'alamineAminotrans', label: 'Alamine Aminotransferase', type: 'number' as const, min: 0, max: 2000, unit: 'IU/L' },
    { name: 'aspartateAminotrans', label: 'Aspartate Aminotransferase', type: 'number' as const, min: 0, max: 5000, unit: 'IU/L' },
    { name: 'totalProteins', label: 'Total Proteins', type: 'number' as const, min: 0, max: 15, step: 0.1, unit: 'g/dl' },
    { name: 'albumin', label: 'Albumin', type: 'number' as const, min: 0, max: 10, step: 0.1, unit: 'g/dl' },
    { name: 'albuminGlobulinRatio', label: 'Albumin/Globulin Ratio', type: 'number' as const, min: 0, max: 5, step: 0.01 }
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Liver disease prediction data:', data);
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3 ml-8">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Liver Disease Prediction</h1>
                <p className="text-sm text-gray-600">Liver Function Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <PredictionForm
          title="Liver Disease Risk Assessment"
          description="Analyze your liver function markers and assess the risk of liver disease based on blood test parameters."
          fields={liverDiseaseFields}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default LiverDisease;
