
import { UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "MIT Mobile Tech Lab",
      description: "Research collaboration on mobile health technologies",
      logo: "MIT",
    },
    {
      name: "OKB Hope Foundation",
      description: "Implementation partner for community health initiatives",
      logo: "OKB",
    },
    {
      name: "Komfo Anokye Teaching Hospital",
      description: "Clinical research and data collection partner",
      logo: "KATH",
    },
  ];

  const funders = [
    { name: "SoftBank", logo: "SoftBank" },
    { name: "1517", logo: "1517" },
    { name: "Inflection", logo: "Inflection" },
  ];

  return (
    <section id="partners" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partners & Supporters</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our work is made possible through collaborations with leading research institutions, 
            healthcare providers, and funding partners.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8 text-center">Research & Implementation Partners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card key={partner.name} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="bg-gray-100 rounded-md p-3 w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 font-medium">{partner.logo} Logo</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-center mb-2">{partner.name}</h4>
                  <p className="text-gray-600 text-center text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-medium mb-8 text-center">Funding Support</h3>
          <div className="grid grid-cols-3 gap-6">
            {funders.map((funder) => (
              <div key={funder.name} className="flex flex-col items-center">
                <div className="h-12 w-32 bg-white rounded-md shadow-sm flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-sm">{funder.logo}</span>
                </div>
                <p className="text-sm font-medium">{funder.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-3 bg-research-100 rounded-full mb-4">
            <UsersRound className="h-6 w-6 text-research-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We're actively seeking research collaborators, implementation partners, and healthcare providers
            interested in advancing AI-powered lung disease detection.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-research-600 hover:bg-research-700">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
