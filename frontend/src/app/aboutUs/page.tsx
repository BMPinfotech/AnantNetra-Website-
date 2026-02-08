import Hero from './Hero';
import { OurVision } from './BentoGrid';
import { CoreValues } from './CoreValues';
import { OurTimeline } from './OurTimeline';
import Awards from './Awards';
import Footer from '../components/Footer';
import { SectionScrollWrapper } from './ScrollWrapper';

export default function Page() {
  return (
    <div className="overflow-x-hidden w-full mt-12">
      <SectionScrollWrapper>
        <Hero />
      </SectionScrollWrapper>

      <SectionScrollWrapper>
        <OurVision />
      </SectionScrollWrapper>

      <SectionScrollWrapper>
        <CoreValues />
      </SectionScrollWrapper>

      <SectionScrollWrapper>
        <OurTimeline />
      </SectionScrollWrapper>

      <SectionScrollWrapper>
        <Awards />
      </SectionScrollWrapper>

      <SectionScrollWrapper>
        <Footer />
      </SectionScrollWrapper>
    </div>
  );
}
