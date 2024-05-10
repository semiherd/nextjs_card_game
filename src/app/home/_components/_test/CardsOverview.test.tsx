import { render,screen,waitFor,act,within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { testData } from 'src/asset/data';
import { CardsContainerPropsType } from '../overview/type';
import CardsOverview from '../overview/CardsOverview'
import { CardProvider } from 'src/app/context/CardProvider';

function checkCssClass(item:HTMLElement,className:string){
  expect(item).toBeTruthy()
  expect(item.className).toEqual(className)
}

const Provider= ({children}:{children:React.ReactNode}) => 
  <CardProvider>
    {children}
  </CardProvider>

test('renders CardsContainer with players of testData of 6 players in home-screen', async () => {
  const props:CardsContainerPropsType={
    data: testData,
    screen: 'home'
  }
  
  const { container } = render(<Provider children={<CardsOverview {...props} />} />)
  const divElm= container.firstChild as HTMLElement

  //expected behaviour
  checkCssClass(divElm,'move-left')
  expect(container.childElementCount).toEqual(1);
})
test('renders CardsContainer with 6 players of testData in player-screen', async () => {
  const props:CardsContainerPropsType={
    data: testData,
    screen: 'player'
  }
  
  const { container } = render(<Provider children={<CardsOverview {...props} />} />)
  const divElm= container.firstChild as HTMLElement
  //expected behaviour
  expect(divElm.className).not.toEqual('move-left')
  expect(container.childElementCount).toEqual(1);
})
