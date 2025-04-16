interface DirectusFile {
  id: string;
  type: string;
}

export interface AboutSection {
  id: string;
  description: string;
  about_image: DirectusFile;
  features: string[];
  primary_action: string;
  secondary_action: string;
}
