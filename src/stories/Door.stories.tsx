import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Door from '../components/Door';
export default {
  title: "MyDoor",
  component: Door,
  argTypes: {
    name: {
      options: ['나미', '상훈'],
      control: { type: 'radio' }
    },
    backgroundColor: { control: 'color' },
    displayArgs: {
      "justify-content": {
        options: ['space-between', 'flex-end', 'flex-start'],
        control:{type:'radio'},
      }
    }
  }
} as ComponentMeta<typeof Door>;

const Template: ComponentStory<typeof Door> = (args) => <Door {...args} />



export const Primary = Template.bind({});
Primary.args = { backgroundColor:'red', name: 'Button' };

export const Young = Template.bind({});
Young.args = {
  age: 19,
  backgroundColor:'black',
  color: 'white',
  displayArgs: {
    display: 'flex',
    "justify-content": 'flex-end',
  } 
};

export const Old = Template.bind({});
Old.args = {
  age: 100,
};

