import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 font-heading">
              Detecting Lung Disease Through{" "}
              <span className="text-[#2998b4]">Cough Recordings</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-body font-light">
              Increasing access to diagnostics with AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/watch?v=QdLET69214A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90">
                  Watch Demo
                </Button>
              </a>
              <a
                href="https://ieeexplore.ieee.org/document/9911027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Read Our Paper
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 flex justify-center">
            <div className="rounded-lg bg-white/50 backdrop-blur-sm shadow-xl p-1 max-w-md">
              <div className="relative aspect-video rounded overflow-hidden border-2 border-medical-200">
                <div className="absolute inset-0 flex items-center justify-center bg-medical-50">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="text-medical-800 mb-2">
                      Demo Video Thumbnail
                    </div>
                    <div className="w-16 h-16 rounded-full bg-medical-500/20 flex items-center justify-center animate-pulse">
                      <svg
                        className="w-8 h-8 text-medical-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
