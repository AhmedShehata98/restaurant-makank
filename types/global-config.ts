import { string } from "zod";

interface File {
  __typename: string;
  id: string;
  type: string;
}

interface GlobalConfig {
  id: string;
  description: string;
  restaurant_address: string;
  restaurant_phone: string;
  restaurant_logo: File;
  terms: string;
  social_links: {
    id: string;
    icon_image: {
      id: string;
      type: string;
    };
    url: string;
  }[];
}

export type { GlobalConfig, File };
