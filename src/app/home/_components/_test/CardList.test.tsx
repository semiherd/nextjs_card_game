import { render,act,within,screen } from '@testing-library/react';
import { ContainerProps } from '../overview/type';
import { DetailContainerWidth, MarginCardsWithTitle } from 'src/asset/constant';
import { CardStateCtx } from 'src/app/context/CardProvider';
import { testData } from 'src/asset/data';
import { CardProviderState, Player } from 'src/app/context/type';
import CardList from '../overview/CardList';
import userEvent from '@testing-library/user-event'
import { BASE_URL } from 'src/asset/constant'

const contextMockedValue:CardProviderState<Player>= {
  list: testData
}
const Provider= ({children}:{children:React.ReactNode}) => 
  <CardStateCtx.Provider value={contextMockedValue}>
    {children}
  </CardStateCtx.Provider>

test('renders CardsList component in home-screen', async () => {
  const marginCardsContainer= 1- MarginCardsWithTitle/100
  const props:ContainerProps={
    width: DetailContainerWidth * marginCardsContainer,
    screen: 'home'
  }
  
  //render within CardContext-Provider
  const { container } = render(<Provider children={<CardList {...props} />} />)

  //expected behaviour
  expect(container.childElementCount).toEqual(contextMockedValue.list.length)
})

test('renders CardsList component in player-screen', async () => {
  const marginCardsContainer= 1- MarginCardsWithTitle/100
  const props:ContainerProps={
    width: DetailContainerWidth * marginCardsContainer,
    screen: 'player'
  }
  
  //render within CardContext-Provider
  const { container } = render(<Provider children={<CardList {...props} />} />)

  //expected behaviour
  expect(container.childElementCount).toEqual(contextMockedValue.list.length)
})

test.only('changes the color of the card on click', async () => {
  
})
