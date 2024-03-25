export const CONTEXT_ACTIONS={
	CARD: {
		SELECT: "Select_Card",
		RESET: "Reset_Selected_Card",
	},
	LIST:{
		SORT: 'Sort_List',
		UPDATE: 'Update_List'
	},
	RESPONSE:{
		FAIL: 'fail',
		SUCCESS: 'success'
	}
} as const 

export type CardActionKeys = keyof typeof CONTEXT_ACTIONS['CARD'];
export type CardActionVals = typeof CONTEXT_ACTIONS['CARD'][CardActionKeys];

export type ResponseActionKeys = keyof typeof CONTEXT_ACTIONS['RESPONSE'];
export type ResponseActionVals = typeof CONTEXT_ACTIONS['RESPONSE'][ResponseActionKeys];

export type ListActionKeys = keyof typeof CONTEXT_ACTIONS['LIST'];
export type ListActionVals = typeof CONTEXT_ACTIONS['LIST'][ListActionKeys];
