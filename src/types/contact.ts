export interface ContactInfo {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface ContactSocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface FooterLink {
  id: string;
  label: string;
  sectionId: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: ContactInfo[];
  socialLinks: ContactSocialLink[];
  availability: {
    status: string;
    label: string;
  };
}

export interface FooterContent {
  name: string;
  tagline: string;
  description: string;
  quickLinks: FooterLink[];
  copyright: string;
}
