import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Focus } from './components/Focus';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <Services />
      <Focus />
      <Footer />
    </div>
  );
}

export default App;
