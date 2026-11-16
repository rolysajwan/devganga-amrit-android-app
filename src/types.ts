export type ScreenId = 
  | 'splash'
  | 'home'
  | 'story'
  | 'devprayag'
  | 'product'
  | 'rituals'
  | 'coming_soon'
  | 'faq'
  | 'contact'
  | 'about';

export interface RitualItem {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  significance: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  highlight?: boolean;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  purpose?: string;
}
