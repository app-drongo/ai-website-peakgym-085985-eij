import Pageheader4 from '@/components/Pageheader4';
import Contactbooknow from '@/components/Contactbooknow';

export default function BookNowPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader4 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Contactbooknow />
      </section>
    </main>
  );
}