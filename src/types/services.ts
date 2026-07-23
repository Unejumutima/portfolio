export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  cta: {
    label: string;
    targetSection: string;
  };
}
