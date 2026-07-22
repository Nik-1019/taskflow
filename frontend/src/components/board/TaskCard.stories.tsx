import type { Meta, StoryObj } from '@storybook/react';
import { TaskCard } from './TaskCard';

const meta = {
  title: 'Components/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Design new homepage',
      description: 'Create mockups for the new homepage design',
      status: 'in-progress',
      priority: 'high',
      assignee: {
        id: '1',
        name: 'John Doe',
      },
      dueDate: '2024-01-25',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  },
};

export const LowPriority: Story = {
  args: {
    task: {
      id: '2',
      title: 'Update documentation',
      description: 'Review and update API documentation',
      status: 'todo',
      priority: 'low',
      dueDate: '2024-02-01',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  },
};

export const NoAssignee: Story = {
  args: {
    task: {
      id: '3',
      title: 'Fix login bug',
      status: 'todo',
      priority: 'medium',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  },
};
