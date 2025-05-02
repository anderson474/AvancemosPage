import { FaWhatsapp } from 'react-icons/fa';

const BotonWhatsapp = () => {
    return(
    <a
        href="https://wa.me/573044924495"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="WhatsApp"
    >
    <FaWhatsapp className="text-3xl text-white" />
    </a>
    
    );  
    
}

export default BotonWhatsapp;