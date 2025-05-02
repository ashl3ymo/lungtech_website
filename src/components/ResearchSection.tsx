
import { FileText, Link, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResearchSection = () => {
  return (
    <section id="research" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research & Demonstrations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our published research, demonstration videos, and technical resources that showcase our AI technology.
          </p>
        </div>

        <Tabs defaultValue="demos" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="demos" className="text-sm sm:text-base">Video Demos</TabsTrigger>
            <TabsTrigger value="paper" className="text-sm sm:text-base">Research Paper</TabsTrigger>
            <TabsTrigger value="resources" className="text-sm sm:text-base">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demos" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Technology Demo Video</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">AI Technology Demonstration</h3>
                  <p className="text-gray-600 mb-4">
                    See how our AI processes and analyzes cough recordings to detect patterns associated with lung diseases.
                  </p>
                  <Button variant="outline" className="w-full">Watch Demo</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">App Demo Video</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Mobile Application Demo</h3>
                  <p className="text-gray-600 mb-4">
                    A walkthrough of our mobile app that healthcare workers can use for on-site disease screening.
                  </p>
                  <Button variant="outline" className="w-full">Watch App Demo</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="paper" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8 md:w-1/3">
                    <div className="aspect-[3/4] bg-white border rounded-md shadow-sm flex items-center justify-center">
                      <div className="text-center p-4">
                        <FileText className="h-12 w-12 text-medical-500 mx-auto mb-2" />
                        <p className="text-medical-700 font-medium">Research Paper</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-bold text-xl mb-2">Published Research</h3>
                    <p className="text-gray-600 mb-4">
                      Our peer-reviewed research paper details the methodology, datasets, and clinical validation of the AI cough detection technology.
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p className="font-medium">Key findings:</p>
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Detection accuracy across different lung conditions</li>
                        <li>Validation in diverse population groups</li>
                        <li>Comparison with traditional diagnostic methods</li>
                        <li>Technical architecture of the AI model</li>
                      </ul>
                    </div>
                    <Button className="bg-medical-600 hover:bg-medical-700">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Full Paper
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-medical-100 rounded-md">
                      <Link className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Technical Documentation</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Detailed technical specifications and methodology
                      </p>
                      <Button variant="link" className="text-medical-600 p-0 h-auto">
                        View Documentation →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-medical-100 rounded-md">
                      <Link className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Data Collection Protocol</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Guidelines for research partners on data collection
                      </p>
                      <Button variant="link" className="text-medical-600 p-0 h-auto">
                        Download Protocol →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-medical-100 rounded-md">
                      <Link className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Research Presentations</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Slides and materials from conference presentations
                      </p>
                      <Button variant="link" className="text-medical-600 p-0 h-auto">
                        View Presentations →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-medical-100 rounded-md">
                      <Link className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Media Kit</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Images, videos, and press materials for media use
                      </p>
                      <Button variant="link" className="text-medical-600 p-0 h-auto">
                        Download Media Kit →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResearchSection;
