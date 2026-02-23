/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { PainPoints } from './components/PainPoints';
import { Process } from './components/Process';
import { Differentiators } from './components/Differentiators';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { FinalCTA } from './components/FinalCTA';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-gold-500 selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PainPoints />
        <Process />
        <Differentiators />
        <CaseStudies />
        <Testimonials />
        <WhoIsThisFor />
        <FinalCTA />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
