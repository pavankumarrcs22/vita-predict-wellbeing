
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Droplets, Shield, Activity, Ribbon, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user, signOut } = useAuth();

  const predictionModules = [
    {
      id: "heart",
      title: "Heart Disease",
      description: "Assess cardiovascular risk factors and predict heart disease probability",
      icon: Heart,
      color: "bg-red-500",
      path: "/heart-disease"
    },
    {
      id: "diabetes",
      title: "Diabetes",
      description: "Evaluate glucose levels and diabetes risk factors",
      icon: Droplets,
      color: "bg-blue-500",
      path: "/diabetes"
    },
    {
      id: "liver",
      title: "Liver Disease",
      description: "Analyze liver function markers and disease indicators",
      icon: Shield,
      color: "bg-yellow-500",
      path: "/liver-disease"
    },
    {
      id: "kidney",
      title: "Kidney Disease",
      description: "Monitor kidney function and chronic disease risk",
      icon: Activity,
      color: "bg-green-500",
      path: "/kidney-disease"
    },
    {
      id: "breast-cancer",
      title: "Breast Cancer",
      description: "Screen for breast cancer risk factors and early detection",
      icon: Ribbon,
      color: "bg-pink-500",
      path: "/breast-cancer"
    }
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VitaPredict</h1>
                <p className="text-sm text-gray-600">Health Monitoring System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{user?.email}</span>
              </div>
              <Button 
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Health
            <span className="text-blue-600"> Risk Assessment</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized health insights and disease risk predictions using advanced machine learning algorithms. Monitor your health proactively with our comprehensive screening tools.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800">
              Welcome back! Select a health assessment below to get started with your personalized risk analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Disease Prediction Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Disease Prediction Modules</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of disease prediction tools, each powered by state-of-the-art machine learning models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predictionModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Card key={module.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">{module.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-6">{module.description}</p>
                    <Link to={module.path}>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                        Start Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VitaPredict?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Accurate Predictions</h4>
              <p className="text-gray-600">Advanced ML models trained on extensive medical datasets for reliable health assessments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Preventive Care</h4>
              <p className="text-gray-600">Early detection and prevention strategies to maintain optimal health.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Personalized Insights</h4>
              <p className="text-gray-600">Tailored recommendations based on your unique health profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">VitaPredict</span>
              </div>
              <p className="text-gray-400">Empowering healthier lives through AI-driven health monitoring.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Predictions</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/heart-disease" className="hover:text-white">Heart Disease</Link></li>
                <li><Link to="/diabetes" className="hover:text-white">Diabetes</Link></li>
                <li><Link to="/liver-disease" className="hover:text-white">Liver Disease</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/resources" className="hover:text-white">Health Tips</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VitaPredict. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
