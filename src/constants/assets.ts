// High-fidelity image assets generated for BuySupps
import heroTrainingImg from '../assets/images/hero_fitness_training_1790251563042.jpg';
import proteinCreatineImg from '../assets/images/category_protein_creatine_1790251579150.jpg';
import preworkoutHydrationImg from '../assets/images/category_preworkout_energy_1790251594752.jpg';
import purityLabImg from '../assets/images/quality_lab_testing_1790251610243.jpg';

export const ASSETS = {
  heroBanner: heroTrainingImg,
  proteinCreatine: proteinCreatineImg,
  preworkoutEnergy: preworkoutHydrationImg,
  labTesting: purityLabImg
};

export const INSTAGRAM_URL = 'https://www.instagram.com/buysupps_/';
export const INSTAGRAM_HANDLE = '@buysupps_';

export const WHATSAPP_URL = 'https://wa.me/918130748666?text=Hi%20Mukul%20Chaudhary%2C%20I%20want%20to%20inquire%20about%20BuySupps%20pure%20components';
export const WHATSAPP_CONSULTATION_URL = 'https://wa.me/918130748666?text=Hi%20Mukul%20Chaudhary%2C%20I%20would%20like%20to%20book%20my%20Free%20Consultation%20Call';
export const WHATSAPP_PERSONAL_TRAINING_URL = 'https://wa.me/918130748666?text=Hi%20Mukul%20Chaudhary%2C%20I%20want%20to%20inquire%20about%201-on-1%20Personal%20Training%20and%20Coaching';
export const WHATSAPP_SALE_URL = 'https://wa.me/918130748666?text=Hi%20Mukul%20Chaudhary%2C%20I%20want%20to%20claim%20the%20Flash%20Sale%20offer%20on%20BuySupps%20components';

export const getWhatsAppUrlForComponent = (componentName?: string) => {
  if (!componentName) return WHATSAPP_URL;
  return `https://wa.me/918130748666?text=Hi%20Mukul%20Chaudhary%2C%20I%20want%20to%20inquire%20about%20BuySupps%20${encodeURIComponent(componentName)}%20component`;
};
