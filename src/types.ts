export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  industries: string[];
  iconName: string;
  image: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: string;
  hours: number;
  description: string;
  benefits: string[];
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'inspection' | 'training' | 'equipment' | 'field';
  title: string;
  url: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
