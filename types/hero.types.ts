interface File {
    id: string;
    type: string;
    __typename: string;
  }
  
interface HeroSection {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    action: string;
    image: File;
    pattern_image: File;
}

interface HeroCard {
    id: string;
    title: string;
    description: string;
    action: string;
    image: File;
    action_image: File;
  }

  interface HeroCardByIdQueryResult {
    hero_cards_by_id: HeroCard;
  }
  
export type { HeroSection,HeroCard ,HeroCardByIdQueryResult};