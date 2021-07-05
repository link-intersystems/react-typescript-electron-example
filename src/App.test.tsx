import React from 'react';
import { render, screen, configure } from '@testing-library/react';
import App from './App';

configure({ testIdAttribute: 'id' })

test('renders ProgressBar', () => {
  render(<App />);
  const progressBar = screen.getByTestId('progressBar');
  expect(progressBar).toBeInTheDocument();
});

test('renders ProgressCircle', () => {
  render(<App />);
  const progressCircle = screen.getByTestId('progressCircle');
  expect(progressCircle).toBeInTheDocument();
});

test('renders backgroundProgress', () => {
  render(<App />);
  const backgroundProgress = screen.getByTestId('backgroundProgress');
  expect(backgroundProgress).toBeInTheDocument();
});

test('renders Slider', () => {
  render(<App />);
  const slider = screen.getByTestId('slider');
  expect(slider).toBeInTheDocument();
});

test('renders CounterBadge', () => {
  render(<App />);
  const counterBadge = screen.getByTestId('counterBadge');
  expect(counterBadge).toBeInTheDocument();
});

test('renders BoundedRangeForm', () => {
  render(<App />);
  const boundedRangeForm = screen.getByTestId('boundedRangeForm');
  expect(boundedRangeForm).toBeInTheDocument();
});
