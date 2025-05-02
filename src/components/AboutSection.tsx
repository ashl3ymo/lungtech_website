
import { Microscope, Lungs, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About CoughVision AI</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Using advanced machine learning to analyze cough recordings, our technology detects lung diseases with high accuracy, making healthcare more accessible globally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mx-auto">
                <Lungs className="h-6 w-6 text-medical-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">AI-Powered Detection</h3>
              <p className="text-gray-600 text-center">
                Our AI analyzes sound patterns in cough recordings to identify specific lung conditions with clinical accuracy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mx-auto">
                <Microscope className="h-6 w-6 text-medical-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Research-Backed</h3>
              <p className="text-gray-600 text-center">
                Developed through extensive research and clinical trials in partnership with leading medical institutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mx-auto">
                <Video className="h-6 w-6 text-medical-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Mobile Application</h3>
              <p className="text-gray-600 text-center">
                Our mobile app makes screening accessible anywhere, especially in regions with limited healthcare resources.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-medical-50 to-research-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Current Research: Expanding the Model</h3>
              <p className="text-gray-700 mb-4">
                We're currently leading a study at Komfo Anokye Teaching Hospital to collect and analyze tuberculosis, pneumonia, and asthma cough recordings, expanding our AI model's capabilities.
              </p>
              <p className="text-gray-700">
                This research will help create a more comprehensive detection system that can identify multiple lung conditions from a single cough recording.
              </p>
            </div>
            <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-gray-500 text-sm mb-2">Study Image</p>
                  <p className="text-xs text-gray-400">Research in progress at Komfo Anokye Teaching Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
