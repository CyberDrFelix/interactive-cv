// src/components/InteractiveCV.jsx
import React, { useState } from 'react';
import { BookOpen, Briefcase, GraduationCap, Users, Award, Code } from 'lucide-react';

const Card = ({ children, className, onClick }) => (
  <div 
    className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

const InteractiveCV = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeDetail, setActiveDetail] = useState(null);

  const sections = {
    earlyCareer: {
      title: "Early Career (2009-2011)",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-100",
      details: [
        {
          title: "Sales Consultant",
          org: "UNICREDIT Bank, Grawe",
          period: "2009-2011",
          highlights: [
            "Best Seller Award in region",
            "Direct sales and consulting experience"
          ]
        },
        {
          title: "Associate Professor",
          org: "University of Pitesti",
          period: "2010-2011",
          highlights: [
            "Excellence Award",
            "Published 1 book & 20+ indexed journal articles",
            "Started Ph.D. journey"
          ]
        }
      ]
    },
    shiftingPaths: {
      title: "Shifting Paths (2011-2018)",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-green-100",
      details: [
        {
          title: "FP&A Analyst to Finance Manager",
          org: "IBM",
          period: "2011-2018",
          highlights: [
            "Led IT cost saving initiatives ($20M+ savings)",
            "Developed Global Finance Model for CIO office",
            "Managed 20-person team across EMEA",
            "Completed Ph.D. in Economics (Magna cum Laude, 2014)"
          ]
        }
      ]
    },
    currentPathway: {
      title: "Current Pathway (2018-Present)",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-purple-100",
      details: [
        {
          title: "AI and Edge Business Ops Lead",
          org: "Dell Technologies",
          period: "2024-Present",
          highlights: [
            "Co-leading finance & ops for 2 new businesses",
            "2x growth in AI enterprise pipeline",
            "NativeEdge pipeline growth from $0 to $300M"
          ]
        },
        {
          title: "Global Controller - Networking",
          org: "Dell Technologies",
          period: "2020-2024",
          highlights: [
            "Implemented global automated RTB governance",
            "2x Revenue growth in 3 years",
            "Most profitable Line of Business transformation"
          ]
        },
        {
          title: "DTS Business Operations Controller",
          org: "Dell Technologies",
          period: "2018-2020",
          highlights: [
            "Global quota/planner for $3B+ business",
            "Controller for top DTS accounts in EMEA",
            "Steered $200M+ deal win in APJ market"
          ]
        }
      ]
    },
    skills: {
      title: "Key Skills",
      icon: <Code className="w-8 h-8" />,
      color: "bg-yellow-100",
      details: [
        {
          title: "Technical Skills",
          highlights: [
            "GenAI tools",
            "PowerBI, Salesforce, Cognos",
            "Hyperion, Watson Analytics",
            "SQL, Office Suite"
          ]
        },
        {
          title: "Business Skills",
          highlights: [
            "Business Agility",
            "Design Thinking",
            "Change Management",
            "Cross-cultural communication",
            "Negotiation"
          ]
        }
      ]
    },
    extracurriculars: {
      title: "Extra-curriculars",
      icon: <Users className="w-8 h-8" />,
      color: "bg-red-100",
      details: [
        {
          title: "Leadership & Mentoring",
          highlights: [
            "EIT Jumpstarter (EU program) Mentor",
            "STU INQB Start-up Program Mentor",
            "STEM Aspire Program Mentor",
            "Leading Agile Guild at Dell Bratislava",
            "Leading CFO Career Enrichment at Dell EMEA"
          ]
        },
        {
          title: "Awards & Recognition",
          highlights: [
            "Game Changer Award - Dell Technologies (2024)",
            "RockstarsX - Dell Bratislava (2020)",
            "Magna cum Laude - Ph.D. Thesis (2014)",
            "Individual Excellence - IBM (2012)"
          ]
        }
      ]
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Interactive Career Journey</h1>
      
      {/* Main sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(sections).map(([key, section]) => (
          <Card 
            key={key}
            className={`cursor-pointer ${
              activeSection === key ? 'ring-2 ring-blue-500' : ''
            } ${section.color}`}
            onClick={() => {
              setActiveSection(activeSection === key ? null : key);
              setActiveDetail(null);
            }}
          >
            <div className="flex flex-col items-center text-center">
              {section.icon}
              <h2 className="text-lg font-semibold mt-4">{section.title}</h2>
            </div>
          </Card>
        ))}
      </div>

      {/* Detail view */}
      {activeSection && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">{sections[activeSection].title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections[activeSection].details.map((detail, index) => (
              <Card 
                key={index}
                className={`cursor-pointer ${
                  activeDetail === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveDetail(activeDetail === index ? null : index)}
              >
                <h4 className="text-xl font-semibold">{detail.title}</h4>
                {detail.org && <p className="text-gray-600">{detail.org}</p>}
                {detail.period && <p className="text-gray-500 text-sm">{detail.period}</p>}
                
                {activeDetail === index && (
                  <ul className="mt-4 space-y-2">
                    {detail.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <Award className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveCV;
