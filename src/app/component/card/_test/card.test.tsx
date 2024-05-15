import React from 'react'
import Card from '../index'
import { fireEvent, render,screen,within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { testData } from 'src/asset/data'
import { CardProvider } from 'src/app/context/CardProvider'

const test_player= testData[0]

const Provider= ({ children }:{ children: React.ReactNode }) => 
  <CardProvider>
    {children}
  </CardProvider>

function checkCssClass(item:HTMLElement,className:string){
  expect(item).toBeTruthy()
  expect(item.className).toMatch(className)
}

//render card with test player
test('renders a card as player-card displayind test player asset,playername,realname as within h1-tags', () => {
	const { container }= render(<Provider children={<Card 
		_typeid= {`player-card`}
		state={false} 
		border={false} 
		asset={test_player.asset}
		playerName={test_player.playerName}
		realName={test_player.realName}
		width={30} 
		uppercase={false}
		showAllText
	/>} />)
  const divElm= container.firstChild as HTMLElement 
	
  const playerNameElm= within(divElm).getByRole('heading', { level:1, name: `${test_player.playerName}` });
  const realNameElm= within(divElm).getByRole('heading', { level:1, name: `${test_player.realName}` });
  const assetElm= within(divElm).getByRole('heading', { level:1, name: `${test_player.asset}` });
 
	// expected behaviour
	checkCssClass(playerNameElm,'card-text')
	checkCssClass(realNameElm,'card-text')
	checkCssClass(assetElm,'card-text')
})

//render card with prop as showAll-false border-false state-false
test('renders a card as player-card with props of showall-false state-false border-false uppercase-false', () => {
	const { container }= render(<Provider children={<Card 
		_typeid= {`player-card`}
		state={false} 
		border={false} 
		asset={test_player.asset}
		playerName={test_player.playerName}
		realName={test_player.realName}
		width={30} 
		uppercase={false}
		showAllText={false}
	/>} />)
  const divElm= container.firstChild as HTMLElement 
	
  
	// expected behaviour
	checkCssClass(divElm,'no-flick')
	checkCssClass(divElm,'radius-5')
	checkCssClass(divElm,'pd-v-1')
	checkCssClass(divElm,'pd-h-2')
	checkCssClass(divElm,'not-selected no-border')
	checkCssClass(divElm,'mg-h-1')
	checkCssClass(divElm,'mg-v-3')
})

	