// components/Layout.js
import Navbar from './Navbar';
import BotonWhatsapp from './BotonWhatsapp.jsx';
import SocialButtons from "./SocialButtons";
import Footer from './NavInfo';


export default function Layout({ children }) {
    return (
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <BotonWhatsapp />
        <SocialButtons />
        <main className='w-full'>{children}</main>
        <Footer />
      </div>
    );
  }