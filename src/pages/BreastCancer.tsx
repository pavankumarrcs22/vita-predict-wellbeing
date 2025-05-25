
import { Link } from "react-router-dom";
import { ArrowLeft, Ribbon } from "lucide-react";
import PredictionForm from "@/components/PredictionForm";

const BreastCancer = () => {
  const breastCancerFields = [
    { name: 'radiusMean', label: 'Radius Mean', type: 'number' as const, min: 5, max: 30, step: 0.01, unit: 'mm' },
    { name: 'textureMean', label: 'Texture Mean', type: 'number' as const, min: 5, max: 40, step: 0.01 },
    { name: 'perimeterMean', label: 'Perimeter Mean', type: 'number' as const, min: 40, max: 200, step: 0.01, unit: 'mm' },
    { name: 'areaMean', label: 'Area Mean', type: 'number' as const, min: 100, max: 2500, step: 0.1, unit: 'mm²' },
    { name: 'smoothnessMean', label: 'Smoothness Mean', type: 'number' as const, min: 0.05, max: 0.2, step: 0.001 },
    { name: 'compactnessMean', label: 'Compactness Mean', type: 'number' as const, min: 0.01, max: 0.4, step: 0.001 },
    { name: 'concavityMean', label: 'Concavity Mean', type: 'number' as const, min: 0, max: 0.5, step: 0.001 },
    { name: 'concavePointsMean', label: 'Concave Points Mean', type: 'number' as const, min: 0, max: 0.2, step: 0.001 },
    { name: 'symmetryMean', label: 'Symmetry Mean', type: 'number' as const, min: 0.1, max: 0.35, step: 0.001 },
    { name: 'fractalDimensionMean', label: 'Fractal Dimension Mean', type: 'number' as const, min: 0.04, max: 0.1, step: 0.001 },
    { name: 'radiusSE', label: 'Radius Standard Error', type: 'number' as const, min: 0.1, max: 3, step: 0.01, unit: 'mm' },
    { name: 'textureSE', label: 'Texture Standard Error', type: 'number' as const, min: 0.3, max: 5, step: 0.01 }
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Breast cancer prediction data:', data);
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3 ml-8">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <Ribbon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Breast Cancer Prediction</h1>
                <p className="text-sm text-gray-600">Breast Cancer Risk Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <PredictionForm
          title="Breast Cancer Risk Assessment"
          description="Analyze breast tissue characteristics to assess cancer risk based on cell nucleus features from fine needle aspirate."
          fields={breastCancerFields}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default BreastCancer;
