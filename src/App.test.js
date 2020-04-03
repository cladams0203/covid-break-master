import React from 'react';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import App from './App';
// required imports for testing with redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, cartReducer } from './reducers/cartReducer'


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

function renderWithRedux(
  ui,
  { initialState, store = createStore(cartReducer, initialState) } ={}
) {
  return {
  ...render(<Provider store={store}>{ui}</Provider>),store
  }
}

test('Should render App Header without crashing', () => {
    const {getByTestId} = renderWithRedux(<App />)
    const homeLink = getByTestId('nav1')
    const memoryLink = getByTestId('nav3')
    const storageLink = getByTestId('nav4')
    const casesLink = getByTestId('nav6')
    expect(homeLink).toBeInTheDocument()
    expect(memoryLink).toBeInTheDocument()
    expect(storageLink).toBeInTheDocument()
    expect(casesLink).toBeInTheDocument()
});
test('Should render categories', () => {
  const { getByTestId } = renderWithRedux(<App />)
  const processorCat = getByTestId('cat0')
  const motherboardCat = getByTestId('cat1')
  const memoryCat = getByTestId('cat2')
  const storageCat = getByTestId('cat3')
  const graphicsCat = getByTestId('cat4')
  const casesCat = getByTestId('cat5')
  const coolersCat = getByTestId('cat6')

  expect(processorCat).toBeInTheDocument()
  expect(motherboardCat).toBeInTheDocument()
  expect(memoryCat).toBeInTheDocument()
  expect(storageCat).toBeInTheDocument()
  expect(graphicsCat).toBeInTheDocument()
  expect(casesCat).toBeInTheDocument()
  expect(coolersCat).toBeInTheDocument()
});
test('Fire Event for Processor Category', () => {
  const { getByTestId, getAllByText, getByText } = renderWithRedux(<App />)
  const processorClick = getByTestId('cat0')
  fireEvent.click(processorClick)
  const intel = getAllByText('Intel')
  const amd = getAllByText('AMD')
  const i9 = getByText('528')
  expect(i9).toBeInTheDocument()
  expect(intel).toHaveLength(5)
  expect(amd).toHaveLength(5)
});
test('Fire event on category processor intel i9', () => {
  const { getByTestId, getAllByText, getByText } = renderWithRedux(<App />)
  // const processorClick = getByTestId('cat0')
  // fireEvent.click(processorClick)
  const i9 = getByText('528')
  fireEvent.click(i9)
  const popup = getByText('Cores: 8')
  expect(popup).toBeInTheDocument()
});