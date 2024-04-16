import { Player, View } from "src/app/context/type"

export type ContainerProps={
	screen: View,
	selected: Player['playerName']|null ,
	width: number
}