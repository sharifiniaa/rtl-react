import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemsElement = screen.getAllByRole('listitem');
    expect(listItemsElement).toHaveLength(skills.length);
  });

  test('render login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('not render learning button', () => {
    render(<Skills skills={skills} />);
    const learningButton = screen.queryByRole('button', {
        name: 'Start learning'
    });
    expect(learningButton).not.toBeInTheDocument();
  });

  test('Start Learning button eventually displayed', async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole('button', {
        name: 'Start learning'
    }, {
        timeout: 2000
    });
    expect(startLearningButton).toBeInTheDocument();
  })
});
