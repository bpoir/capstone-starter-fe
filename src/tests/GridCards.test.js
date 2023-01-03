import { render, screen } from '@testing-library/react';
import GridCards from '../components/gridcards/GridCards';

describe('GridCards component rendering', () => {
  beforeEach(() => {
    render(<GridCards />)
  })
  it('renders the containing div for the cards', () => {
    const containingDiv = screen.queryByTestId('gridContainer')
    expect(containingDiv).toBeInTheDocument()
  })
})


