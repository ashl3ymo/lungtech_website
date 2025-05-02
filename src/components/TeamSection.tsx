
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
    name: "Dr. Aisha Johnson",
    role: "Project Lead",
    institution: "MIT Mobile Tech Lab",
    bio: "Leading AI research in respiratory diagnostics with over 10 years of experience in machine learning and healthcare applications.",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "AI Research Lead",
    institution: "SoftBank AI",
    bio: "Specializes in audio signal processing and machine learning models for medical diagnostic applications.",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Dr. Kwame Mensah",
    role: "Clinical Lead",
    institution: "Komfo Anokye Teaching Hospital",
    bio: "Pulmonologist with extensive experience in respiratory disease diagnosis and treatment in resource-limited settings.",
    imgSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 4,
    name: "Sarah Osei",
    role: "Data Scientist",
    bio: "Expert in audio feature extraction and analysis, with a focus on cough sound characteristics across different respiratory conditions.",
    imgSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 5,
    name: "David Park",
    role: "Mobile Developer",
    institution: "MIT Mobile Tech Lab",
    bio: "Develops robust mobile applications for data collection and real-time diagnostic feedback in clinical settings.",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 6,
    name: "Grace Afolabi",
    role: "Research Coordinator",
    institution: "OKB Hope Foundation",
    bio: "Manages field operations and community engagement for data collection across multiple clinical sites.",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 7,
    name: "Dr. James Wong",
    role: "Medical Advisor",
    bio: "Respiratory disease specialist providing clinical insights and validation for AI diagnostic models.",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-gray-50 py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated researchers, clinicians, and engineers working together to revolutionize respiratory disease detection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
                {member.institution && (
                  <p className="text-xs text-gray-600 mb-3">{member.institution}</p>
                )}
                <p className="text-sm text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
