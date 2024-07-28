'use client'

import React from 'react';
import { User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define TypeScript interfaces for the props
interface TeamMemberProps {
  name: string;
  role: string;
  skills: string[];
}

interface OpenRoleProps {
  role: string;
  skills: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, skills }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`p-2 rounded-full ${getColorClass(role)}`}>
            <User className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const OpenRole: React.FC<OpenRoleProps> = ({ role, skills }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-2 rounded-full bg-blue-100">
            <Briefcase className="text-blue-500" size={24} />
          </div>
          <h3 className="font-semibold text-lg">{role}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline">{skill}</Badge>
          ))}
        </div>
        <Button className="w-full">Apply</Button>
      </CardContent>
    </Card>
  </motion.div>
);

const getColorClass = (role: string): string => {
  const colors: { [key: string]: string } = {
    'Project Owner': 'bg-blue-500',
    'Designer': 'bg-purple-500',
    'Frontend Developer': 'bg-green-500',
    'Marketer': 'bg-red-500',
    'Backend Developer': 'bg-gray-800',
    'Floater': 'bg-orange-500'
  };
  return colors[role] || 'bg-gray-500';
};

const TeamCard: React.FC = () => {
  const teamMembers = [
    { name: "Alice Johnson", role: 'Project Owner', skills: ['Leadership', 'Agile', 'Scrum'] },
    { name: "Bob Smith", role: 'Designer', skills: ['UI/UX', 'Figma', 'Prototyping'] },
    { name: "Charlie Brown", role: 'Frontend Developer', skills: ['React', 'TypeScript', 'Tailwind'] },
    { name: "Diana Prince", role: 'Marketer', skills: ['SEO', 'Content Strategy', 'Analytics'] },
    { name: "Ethan Hunt", role: 'Backend Developer', skills: ['Node.js', 'Python', 'MongoDB'] },
    { name: "Fiona Apple", role: 'Floater', skills: ['Versatile', 'Quick Learner', 'Adaptable'] },
  ];

  const openRoles = [
    { role: 'DATA SCIENTIST', skills: ['Python', 'Machine Learning', 'SQL'] },
    { role: 'AI Engineer', skills: ['TensorFlow', 'PyTorch', 'NLP'] },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Best match</CardTitle>
        <p className="text-center text-gray-500 mt-2">Select closely matched team members</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Open Positions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openRoles.map((role, index) => (
            <OpenRole key={index} {...role} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;