import { Player, View } from "src/app/context/type"

export type Props={
	screen: View,
	selected: Player['playerName']|null ,
	width: number
}