import { ComponentMeta, ComponentStory } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof CatCard>;

const Template: ComponentStory<typeof CatCard> = (args) => (
  <CatCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCatCardProps.base,
} as ICatCard;
