import Tier1 from './assets/tier-1.svg';
import Tier2 from './assets/tier-2.svg';
import Tier3 from './assets/tier-3.svg';
import Tier4 from './assets/tier-4.svg';

export const grantTiers = {
  card1: {
    img: Tier1,
    alt: 'early_stage_icon',
    heading: 'Support early-stage ideas or prototypes',
    description: 'Basic proof of concept or clear roadmap required.',
  },
  card2: {
    img: Tier2,
    alt: 'development_icon',
    heading: 'Fund projects in the development phase that have shown potential',
    description:
      'Detailed project plan, technical specifications, and initial traction or community interest.',
  },
  card3: {
    img: Tier3,
    alt: 'large_scale_icon',
    heading: 'Large-scale projects with significant impact potential',
    description:
      'Proven track record, detailed budget, and comprehensive milestones.',
  },
  card4: {
    img: Tier4,
    alt: 'game_changer_icon',
    heading: 'Game changer',
    description:
      'Strategic alignment with AirDAO goals, co-funding, or resource-sharing agreements.',
  },
};
