
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DataVizDemo } from './components/DataVizDemo';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ServiceDetail } from './components/ServiceDetail';

function App() {
  // State can be 'home', 'privacy', or 'service-{id}'
  const [currentView, setCurrentView] = useState<string>('home');

  const navigateToHome = () => {
    setCurrentView('home');
    // Small timeout to allow rendering before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleServiceClick = (serviceId: string) => {
    setCurrentView(`service-${serviceId}`);
  };

  const navigateToContact = () => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Render logic based on view state
  if (currentView === 'privacy') {
    return (
      <>
        <Navbar isHome={false} onNavigateHome={navigateToHome} />
        <PrivacyPolicy onBack={navigateToHome} />
        <Footer onOpenPrivacy={() => { window.scrollTo({top:0}); }} />
        <FloatingWhatsapp />
      </>
    );
  }

  if (currentView.startsWith('service-')) {
    const serviceId = currentView.replace('service-', '');
    return (
      <>
        <ServiceDetail 
          serviceId={serviceId} 
          onBack={navigateToHome} 
          onContact={navigateToContact}
        />
        <FloatingWhatsapp />
      </>
    );
  }

  // Default Home View
  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      
      <Navbar 
        isHome={true} 
        onNavigateHome={navigateToHome} 
      />
      
      <main>
        <Hero />
        <About />
        <Services onServiceClick={handleServiceClick} />
        <DataVizDemo />
        <Clients />
        <Contact />
      </main>

      <Footer 
        onOpenPrivacy={() => {
          setCurrentView('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />
      
      <FloatingWhatsapp />
    </div>
  );
}

const FloatingWhatsapp = () => (
  <a 
    href="https://wa.me/573105586071" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-transform hover:scale-110 flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-white stroke-white"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.07 0C5.537 0 .226 5.362.226 11.951c0 2.125.554 4.15 1.532 5.925L0 24l6.335-1.652c1.746.919 3.71 1.441 5.736 1.441 6.533 0 11.844-5.362 11.844-11.951 0-3.192-1.244-6.194-3.499-8.45h.002z"/></svg>
  </a>
);

export default App;
