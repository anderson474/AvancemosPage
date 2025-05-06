// components/Layout.js
import Navbar from './Navbar';
import BotonWhatsapp from './BotonWhatsapp.jsx';
import SocialButtons from "./SocialButtons";
import Footer from './NavInfo';
import CountdownEcard from './ecardCountdown'


export default function Layout({ children, className = '' }) {
    return (
      <div className={`w-full overflow-x-hidden ${className}`}>
        <Navbar />
        <CountdownEcard/>
        <BotonWhatsapp />
        <SocialButtons />
        <main className='w-full'>{children}</main>
        <Footer />
      </div>
    );
  }