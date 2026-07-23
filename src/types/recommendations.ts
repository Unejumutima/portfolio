export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  relationship: string;
}

export interface RecommendationsContent {
  title: string;
  subtitle: string;
  recommendations: Recommendation[];
}
