import { View } from "src/app/context/type"
import { ReturnType_Home_BFF } from "src/app/api/type";

export type ContainerProps={
	screen: View,
	width: number
}

export type CardsContainerPropsType={
	data: ReturnType_Home_BFF['players'],
	screen: View
}