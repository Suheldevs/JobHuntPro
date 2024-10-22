import { FaMoneyBillWave, FaBullhorn, FaPencilRuler, FaCode, FaUsers, FaCar, FaHeadset, FaHeartbeat, FaProjectDiagram } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    name: "Accounting / Finance",
    openPositions: 2,
    icon: <FaMoneyBillWave />,
  },
  {
    id: 2,
    name: "Marketing",
    openPositions: 86,
    icon: <FaBullhorn />, 
  },
  {
    id: 3,
    name: "Design",
    openPositions: 43,
    icon: <FaPencilRuler />, 
  },
  {
    id: 4,
    name: "Development",
    openPositions: 12,
    icon: <FaCode />, 
  },
  {
    id: 5,
    name: "Human Resource",
    openPositions: 55,
    icon: <FaUsers />, 
  },
  {
    id: 6,
    name: "Automotive Jobs",
    openPositions: 2,
    icon: <FaCar />, 
  },
  {
    id: 7,
    name: "Customer Service",
    openPositions: 2,
    icon: <FaHeadset />, 
  },
  {
    id: 8,
    name: "Health and Care",
    openPositions: 25,
    icon: <FaHeartbeat />,
  },
  {
    id: 9,
    name: "Project Management",
    openPositions: 92,
    icon: <FaProjectDiagram />,
  },
];

export default categories;
