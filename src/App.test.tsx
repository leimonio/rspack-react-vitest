import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.tsx'

test('Link changes the state when hovered', async () => {
  render(
    <App />,
  )

  const link = screen.getByText('Rspack + React + TypeScript')

  expect(link).toBeInTheDocument();
})