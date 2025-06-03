import { FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ResearchSection = () => {
  return (
    <section id="research" className="bg-white pb-12">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research & Demos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Further explore our work!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Algorithm Demo Card */}
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video rounded-md overflow-hidden mb-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QdLET69214A"
                    title="Algorithm Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font-bold text-xl mb-3">Algorithm Demo</h3>
                <p className="text-gray-600 text-lg mb-5">
                  Demo of the algorithm making predictions based on an inputted
                  cough recording.
                </p>
                <Button
                  variant="outline"
                  className="w-full py-6 text-lg font-medium"
                >
                  <a
                    href="https://www.youtube.com/watch?v=QdLET69214A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    Watch Demo
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* App Interface Card */}
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video rounded-md overflow-hidden mb-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/k8A3fgxqwH0"
                    title="App Interface Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font-bold text-xl mb-3">App Interface</h3>
                <p className="text-gray-600 text-lg mb-5">
                  A walkthrough of our mobile app that healthcare workers can
                  use for on-site screening.
                </p>
                <Button
                  variant="outline"
                  className="w-full py-6 text-lg font-medium"
                >
                  <a
                    href="https://www.youtube.com/shorts/k8A3fgxqwH0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    Watch App Demo
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Research Paper Card */}
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video rounded-md overflow-hidden mb-6">
                  <img
                    src="/images/paper.png"
                    alt="Research Paper"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-3">Paper</h3>
                <p className="text-gray-600 text-lg mb-5">
                  Our peer-reviewed research paper details the methodology and
                  validation of the AI algorithm.
                </p>
                <Button
                  variant="outline"
                  className="w-full py-6 text-lg font-medium"
                >
                  <a
                    href="https://ieeexplore.ieee.org/document/9911027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <FileText className="mr-3 h-5 w-5" />
                    Read Full Paper
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
