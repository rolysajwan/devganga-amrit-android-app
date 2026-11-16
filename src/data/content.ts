import { RitualItem, FaqItem } from '../types';

export const BRAND_INFO = {
  name: 'DEVGANGA AMRIT',
  tagline: 'Sacred Ganga Jal from Devprayag Sangam',
  productName: 'DevGanga Amrit Sacred Ganga Jal',
  volume: '250 ml',
  samplePrice: 299,
  sampleMrp: 349,
  status: 'COMING SOON',
  email: 'devgangaamrit@gmail.com',
  phone: '+91 96433 45474',
  phoneClean: '+919643345474',
  whatsappNumber: '919643345474',
  location: {
    town: 'Devprayag',
    district: 'Tehri Garhwal',
    state: 'Uttarakhand',
    country: 'India',
    elevation: '830 m (2,723 ft)',
    confluence: 'Alaknanda & Bhagirathi Rivers'
  },
  mandatoryNotice: {
    primary: 'FOR RELIGIOUS & RITUAL USE ONLY',
    secondary: 'NOT FOR DRINKING'
  }
};

export const RITUAL_ITEMS: RitualItem[] = [
  {
    id: 'puja',
    name: 'Puja',
    sanskritName: 'पूजा',
    description: 'Purification of sanctum, sacred vessels, and daily offerings before the divine altar.',
    significance: 'Imparts pristine sanctity to the daily spiritual space and invocations.',
    iconName: 'Sparkles'
  },
  {
    id: 'abhishek',
    name: 'Abhishek',
    sanskritName: 'अभिषेक',
    description: 'Ceremonial holy bathing of Shiva Lingam, Shaligram, and consecrated deities.',
    significance: 'Traditional offering symbolising deep devotion, calm focus, and mental clarity.',
    iconName: 'Droplets'
  },
  {
    id: 'havan',
    name: 'Havan & Yajna',
    sanskritName: 'हवन एवं यज्ञ',
    description: 'Achamana (ritual sip/sanctification) and boundary purification before sacrificial fire.',
    significance: 'Prepares the ceremonial space with ritual purity in accordance with Vedic custom.',
    iconName: 'Flame'
  },
  {
    id: 'tarpan',
    name: 'Tarpan',
    sanskritName: 'तर्पण',
    description: 'Offering sacred water through the fingers to honor pitras, rishis, and divine guardians.',
    significance: 'An ancient Vedic ritual of expressing deep gratitude across ancestral lineages.',
    iconName: 'Sun'
  },
  {
    id: 'shraddh',
    name: 'Shraddh',
    sanskritName: 'श्राद्ध',
    description: 'Essential memorial rites and purification rituals honoring departed ancestors.',
    significance: 'Brings peace and spiritual solemnity during annual remembrance observances.',
    iconName: 'Feather'
  },
  {
    id: 'festivals',
    name: 'Festivals & Auspicious Occasions',
    sanskritName: 'उत्सव एवं शुभ कार्य',
    description: 'Griha Pravesh, Diwali, Navratri, Maha Shivratri, Ganga Dussehra, and sanctifying new beginnings.',
    significance: 'Ensures the home and altar are sanctified with genuine Devprayag Sangam Jal.',
    iconName: 'Calendar'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is DevGanga Amrit?',
    answer: 'DevGanga Amrit is a premium spiritual heritage presentation of sacred Ganga Jal sourced directly from the divine confluence (Sangam) of Devprayag in Uttarakhand, India. It is specially packed for traditional religious and ritual observances.'
  },
  {
    question: 'Where is it associated with?',
    answer: 'It is associated with Devprayag in the Tehri Garhwal district of Uttarakhand, where the two sacred Himalayan rivers—the turquoise Bhagirathi and the serene Alaknanda—meet to formally become the Ganga.'
  },
  {
    question: 'What is the bottle size?',
    answer: 'DevGanga Amrit is offered in an elegantly crafted 250 ml sacred bottle, designed to preserve the sanctity, freshness, and dignity of the holy water during ceremonial use.'
  },
  {
    question: 'What is it intended for?',
    answer: 'It is intended strictly for sacred Hindu rites and ceremonies, including daily Puja, Shiva Abhishek, Havan, Tarpan, Shraddh, and festive house blessings (Griha Pravesh).'
  },
  {
    question: 'Is it for drinking?',
    answer: 'No. DevGanga Amrit is intended for religious and ritual use only. It is not sold as packaged drinking water or for beverage consumption.',
    highlight: true
  },
  {
    question: 'When will it launch?',
    answer: 'DevGanga Amrit is currently in pre-launch stage ("Coming Soon"). You can register your interest via the "Notify Me" feature in the app to be among the first informed when orders open.'
  }
];
