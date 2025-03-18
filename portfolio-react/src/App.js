import { useState } from 'react';
import { Link } from 'react-scroll';
import Header from './components/Header';
import Sections from './components/Sections';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Sections setActiveSection={setActiveSection} />
    </div>
  );
}