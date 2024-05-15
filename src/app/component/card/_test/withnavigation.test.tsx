'use client'
import { render, waitFor, fireEvent, within } from "@testing-library/react"
import { useRouter } from "next/router"
import { withNavigation } from "../WithNavigation";
import Card from "../index";
import { testData } from 'src/asset/data'
import { formatText } from '../fn/formatText'
import { Sorting, View } from "src/app/api/type";

const test_player= testData[0]



function renderTestCard({state,sort,showAll,view}:{state:boolean,sort:Sorting,showAll:boolean,view:View}){
  const TestComp= withNavigation(Card)
	const cardsInEachRow= 3
	const mockedWidth= window.innerWidth * 0.3
  const { playerName,realName }= test_player
  const formattedPName= formatText(playerName,10,false,true)
  const formattedRName= formatText(realName,10,false,true)
  
  const { container } = render(<TestComp
    key={`${playerName}`}
    type={`player-card`}
    params= {{ sort }}
    view= {view}
    item={{
      ...test_player,
      _typeid: "player-card",
      state,
      border: true,
      showAllText: showAll,
      uppercase: true,
      width: (mockedWidth/cardsInEachRow)*(1- (cardsInEachRow*0.05)),
    }}  
  />)
  const pNameText = within(container).getByRole ('heading', { level:1, name: formattedPName })
  const rNameText = within(container).getByRole ('heading', { level:1, name: formattedRName })
  
  return {
    container,
    pNameText,
    rNameText
  }
}

describe("navigates to the player page", () => {
  jest.mock('next/router');

let eventName;
let routeChangeHandler;

(useRouter as jest.Mock).mockImplementation(() => {
  return {
    events: {
      on: jest.fn((event, callback) => {
        eventName = event;
        routeChangeHandler = callback;
      }),
      off: jest.fn((event, callback) => {
        eventName = event;
        routeChangeHandler = callback;
      }),
    },
  };
});
  // const mockPush = jest.fn(() => Promise.resolve(true));
  // const router = { push: jest.fn().mockImplementation(() => Promise.resolve()) };
  // beforeAll(() => {

  //   jest.mock("next/router", () => ({
  //     useRouter: jest.fn(),
  //   }));
    // jest.mock('next/dist/client/router', () => ({
    //   __esModule: true,
    //   useRouter: () => ({
    //     query: {},
    //     pathname: '/',
    //     asPath: '/',
    //     events: {
    //       emit: jest.fn(),
    //       on: jest.fn(),
    //       off: jest.fn(),
    //     },
    //     push: jest.fn(() => Promise.resolve(true)),
    //     prefetch: jest.fn(() => Promise.resolve(true)),
    //     replace: jest.fn(() => Promise.resolve(true)),
    //   }),
    // }))
    // (useRouter as jest.Mock).mockReturnValue({
    //   asPath: "/",
    //   query: { sort:'ascending'},
    //   push: mockPush,
    //   prefetch: () => Promise.resolve(true)
    // })
  // })

  test("should navigate player-route", async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({push}));

    const { container, pNameText, rNameText } = renderTestCard({state:false, sort:'ascending', showAll: false, view:'home'})
    const routeParam= test_player.playerName.split(' ').join('-')
    const path= `player/${routeParam}?sort=ascending`
    
    useRouter.mockImplementation(() => ({
      push,
      pathname: "/",
      route: "/",
      asPath: "/",
      query: "",
    }));

    fireEvent.click(pNameText);
    expect(useRouter).toHaveBeenCalledTimes(1);
    // await waitFor(() => {
      //expect(router.push).toHaveBeenCalledWith(path, path, expect.anything());
      // expect(mockPush).toHaveBeenCalledWith(path, path, expect.anything())
    // });
  })
})

