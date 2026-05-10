export type ChapterId =
  | 'opening'
  | 'scale'
  | 'retail'
  | 'luxury'
  | 'dining'
  | 'entertainment'
  | 'events';

export type MediaItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  videoUrl: string;
  poster: string;
  accent: string;
  stats: readonly string[];
};

export type Chapter = {
  id: ChapterId;
  label: string;
  title: string;
  copy: string;
};

export type ModuleCard = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  details: string[];
  cta: string;
  accent: string;
};