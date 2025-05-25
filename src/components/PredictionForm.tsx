
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Info } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface FormField {
  name: string;
  label: string;
  type: 'number' | 'select';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

interface PredictionFormProps {
  title: string;
  description: string;
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
}

interface PredictionResult {
  risk: 'low' | 'moderate' | 'high';
  probability: number;
  recommendations: string[];
}

const PredictionForm: React.FC<PredictionFormProps> = ({ title, description, fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { user } = useAuth();

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (field.type === 'number') {
        const value = parseFloat(formData[field.name]);
        if (field.min !== undefined && value < field.min) {
          newErrors[field.name] = `Value must be at least ${field.min}`;
        }
        if (field.max !== undefined && value > field.max) {
          newErrors[field.name] = `Value must be at most ${field.max}`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call with mock prediction
    setTimeout(async () => {
      const mockResult: PredictionResult = {
        risk: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'moderate' : 'low',
        probability: Math.random() * 100,
        recommendations: [
          "Maintain a healthy diet rich in fruits and vegetables",
          "Exercise regularly for at least 30 minutes daily",
          "Monitor your health parameters regularly",
          "Consult with healthcare professionals for personalized advice"
        ]
      };
      
      // Save prediction to database
      if (user) {
        try {
          await supabase.from('predictions').insert({
            user_id: user.id,
            disease_type: title.split(' ')[0].toLowerCase(),
            input_data: formData,
            prediction_result: mockResult as any
          });
        } catch (error) {
          console.error('Error saving prediction:', error);
        }
      }
      
      setResult(mockResult);
      setIsLoading(false);
      onSubmit(formData);
    }, 2000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <CheckCircle className="h-5 w-5" />;
      case 'moderate': return <Info className="h-5 w-5" />;
      case 'high': return <AlertCircle className="h-5 w-5" />;
      default: return <Info className="h-5 w-5" />;
    }
  };

  if (result) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Prediction Result</CardTitle>
            <p className="text-gray-600">{title}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`p-4 rounded-lg border-2 ${getRiskColor(result.risk)}`}>
              <div className="flex items-center space-x-3 mb-2">
                {getRiskIcon(result.risk)}
                <span className="text-lg font-semibold capitalize">{result.risk} Risk</span>
              </div>
              <p className="text-sm">
                Risk Probability: <span className="font-semibold">{result.probability.toFixed(1)}%</span>
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This prediction is for informational purposes only and should not replace professional medical advice. 
                Please consult with a healthcare provider for proper diagnosis and treatment.
              </AlertDescription>
            </Alert>

            <Button 
              onClick={() => {
                setResult(null);
                setFormData({});
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Take Another Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
          <p className="text-gray-600">{description}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                    {field.label} {field.unit && <span className="text-gray-500">({field.unit})</span>}
                  </Label>
                  
                  {field.type === 'number' ? (
                    <Input
                      id={field.name}
                      type="number"
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      min={field.min}
                      max={field.max}
                      step={field.step || 1}
                      className={errors[field.name] ? 'border-red-500' : ''}
                    />
                  ) : (
                    <Select
                      value={formData[field.name] || ''}
                      onValueChange={(value) => handleInputChange(field.name, value)}
                    >
                      <SelectTrigger className={errors[field.name] ? 'border-red-500' : ''}>
                        <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  
                  {errors[field.name] && (
                    <p className="text-sm text-red-600">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              {isLoading ? 'Analyzing...' : 'Get Prediction'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionForm;
