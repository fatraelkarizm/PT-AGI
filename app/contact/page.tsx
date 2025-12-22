import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
     title: 'Hubungi Kami - PT AGI',
     description: 'Konsultasikan kebutuhan karier dan pendidikan internasional Anda bersama tim ahli kami.',
};

export default function ContactPage() {
     return (
          <main className="pt-20">
               <Contact />
          </main>
     );
}
