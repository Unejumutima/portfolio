import { useState, useCallback } from 'react';
import { useSmoothScroll, useHasVisited } from '@/hooks';
import { Hero } from '@/components/home';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Recommendations } from '@/components/recommendations';
import { Contact } from '@/components/contact';
import { Layout, PageContainer, LoadingScreen } from '@/components/layout';

function App() {
  useSmoothScroll();

  const { isFirstVisit, markVisited } = useHasVisited();
  const [showLoader, setShowLoader] = useState(isFirstVisit);

  const handleLoadComplete = useCallback(() => {
    markVisited();
    setShowLoader(false);
  }, [markVisited]);

  return (
    <>
      {showLoader && <LoadingScreen onComplete={handleLoadComplete} />}

      <Layout>
        <PageContainer>
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Services />
            <Projects />
            <Recommendations />
            <Contact />
          </main>
        </PageContainer>
      </Layout>
    </>
  );
}

export default App;
