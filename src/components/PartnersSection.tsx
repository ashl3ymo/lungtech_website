import { UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "MIT", logo: "mit" },
    { name: "OKB Foundation", logo: "okb" },
    { name: "KATH", logo: "kath" },
    { name: "1517", logo: "1517" },
    { name: "SoftBank", logo: "softbank" },
    { name: "Inflection", logo: "inflection" },
  ];

  return (
    <section id="partners" className="bg-white py-12">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Partners & Supporters</h2>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="logo-container">
                <div className="h-24 w-40 bg-white rounded-md flex items-center justify-center">
                  <img
                    src={`/images/${partner.logo}.png`}
                    alt={`${partner.name} logo`}
                    className="max-h-20 max-w-32 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
