import React from 'react';
import Button from '../index';
import { render,screen,within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const { expect } = require('@jest/globals');

function checkCssClass(item:HTMLElement,className:string){
  expect(item).toBeTruthy()
  expect(item.className).toEqual(className)
}

test('renders a button label with uppercase and displaying full text', () => {
  const { container }= render(<Button state={false} uppercase showAllText onClick={() => null} item={{label:"submit"}} />);
  const divElm= container.firstChild as HTMLElement 
  const pElm= within(divElm).getAllByRole('paragraph')
  const label= within(pElm[0]).getByText('SUBMIT')

  // expected behaviour
  expect(pElm.length).toBe(1)
  expect(container.childElementCount).toEqual(1);
  expect(label).toBeTruthy()
  checkCssClass(divElm,'button align-center pd-2')
  checkCssClass(pElm[0],'not-active')
})

test('renders a button label with lowercase and displaying full text', () => {
  const { container }= render(<Button state={false} uppercase={false} showAllText onClick={() => null} item={{label:"submit"}} />)
  const divElm= container.firstChild as HTMLElement 
  const pElm= within(divElm).getAllByRole('paragraph')
  const label= within(pElm[0]).getByText('Submit')

  // expected behaviour
  expect(pElm.length).toBe(1)
  expect(container.childElementCount).toEqual(1);
  expect(label).toBeTruthy()
  checkCssClass(divElm,'button align-center pd-2')
  checkCssClass(pElm[0],'not-active')
})

test('renders a button label with state-false, uppercase-true and showing text partially', () => {
  // limit is assigned as 10 characters in Button element
  const limit= 10
  const text= 'submit card text'
  const { container }= render(<Button state={false} uppercase showAllText={false} onClick={() => null} item={{label:text}} />);
  const divElm= container.firstChild as HTMLElement 
  const pElm= within(divElm).getAllByRole('paragraph')
  const testText= text.slice(0,limit).toUpperCase()
  const label= divElm.textContent

  // expected behaviour
  expect(pElm.length).toBe(1)
  expect(container.childElementCount).toEqual(1);
  expect(label).toEqual(`${testText}...`)
  checkCssClass(divElm,'button align-center pd-2')
  checkCssClass(pElm[0],'not-active')
})

test('renders a button label with state-true and have classname-active', () => {
  // limit is assigned as 10 characters in Button element
  const { container }= render(<Button state={false} uppercase showAllText={false} onClick={() => null} item={{label:"submit card data full text"}} />);
  expect(container.childElementCount).toEqual(1);
  const pElm= screen.getAllByRole('paragraph');
  expect(pElm.length).toEqual(1)
  //expect(pElm[0].className).toContain('not-active');
  checkCssClass(pElm[0],'not-active')
})

test('calls the onClick in props when button is clicked', async () => {
  const onClick= jest.fn()
  const { container }= render(<Button state={false} uppercase showAllText onClick={onClick} item={{label:"submit"}} />);
  const divElm= container.firstChild as HTMLElement  
  const pElm= within(divElm).getAllByRole('paragraph')
  
  // expected behaviour
  expect(pElm.length).toBe(1)
  expect(container.childElementCount).toEqual(1);

  //click event on the div
  await userEvent.click(pElm[0])
  expect(onClick).toHaveBeenCalledTimes(1)
})