import { Stethoscope, Microscope, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Lungtech</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI platform identifies patterns in cough recordings to detect
            COPD, asthma, COVID-19 (and soon pnuemonia & tuberculosis), aiming
            to provide healthcare access globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-8 px-6">
              <div className="mb-6 w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center mx-auto">
                <Stethoscope className="h-8 w-8 text-medical-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">AI</h3>
              <p className="text-gray-600 text-center text-lg">
                Using audio processing techniques and CNNs, our AI can screen
                for lung diseases with good accuracy. The research was done in
                collaboration with MIT's Mobile Tech Lab.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-8 px-6">
              <div className="mb-6 w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center mx-auto">
                <Smartphone className="h-8 w-8 text-medical-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">App</h3>
              <p className="text-gray-600 text-center text-lg">
                Our mobile app (under development) makes screening accessible
                anywhere, especially in regions where it is difficult to access
                doctors or diagnostic equipment.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-medical-50 to-research-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                Now: Data collection study
              </h3>
              <p className="text-gray-700 mb-4">
                There is currently an ongoing study at Komfo Anokye Teaching
                Hospital in Ghana to collect tuberculosis, pneumonia, and asthma
                cough recordings. This study will help us expand and improve our
                current AI model's capabilities. We are collecting some of the
                first clinically-validated tuberculosis and pneumonia cough
                data. The first patient was recruited into the study in April
                2025.
              </p>
            </div>
            <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <div className="aspect-square rounded overflow-hidden">
                <img 
                  src="/images/demo.png" 
                  alt="Research in progress at Komfo Anokye Teaching Hospital" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
