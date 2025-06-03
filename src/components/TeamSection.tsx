import { Card, CardContent } from "@/components/ui/card";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imgSrc: string;
  institution?: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ashley Mo",
    role: "Co-Founder",
    institution: "Lungtech",
    bio: "Computer Science at Caltech.",
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Emma Gui",
    role: "Co-Founder",
    institution: "Lungtech",
    bio: "Software Engineering at University of Waterloo.",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Dr. Richard Fletcher",
    role: "Research Scientist",
    institution: "MIT",
    bio: "Head of Mobile Tech Lab, which creates tools for biomedical applications and public health.",
    imgSrc:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "Dr. Chris Oppong",
    role: "Specialist Emergency Physician",
    institution: "Komfo Anokye Teaching Hospital (KATH)",
    bio: "Head of the Emergency Medicine Directorate at KATH. Lecturer at KNUST.",
    imgSrc:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 5,
    name: "Osei Boateng",
    role: "Founder",
    institution: "OKB Hope Foundation",
    bio: "Provided medical care to 6000 individuals across 55 rural communities in Ghana.",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 6,
    name: "Dr. Divine Amenuke",
    role: "Physician",
    institution: "KATH",
    bio: "Head of Respiratory Unit, Directorate of Medicine.",
    imgSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 7,
    name: "Dr. Akosua Afriyie-AnsahRank",
    role: "Emergency Medicine Resident",
    institution: "KATH",
    bio: "Head Research Assistant in ongoing Lungtech study.",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-gray-50 py-12 sm:py-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 font-heading">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body font-light">
            Hello from Lungtech! We're a team of researchers, doctors, and
            engineers working together to increase access to healthcare with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white border-none hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-2xl text-gray-900 mb-2 font-heading">
                  {member.name}
                </h3>
                <p className="text-lg font-medium text-primary mb-1 font-body">
                  {member.role}
                </p>
                {member.institution && (
                  <p className="text-base text-gray-600 mb-3 font-body font-light">
                    {member.institution}
                  </p>
                )}
                <p className="text-base text-gray-600 font-body font-light">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
