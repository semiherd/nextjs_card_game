import { Sorting } from "src/app/api/type";

export const sortBy= async <Obj> (arr:Obj[],key: keyof Obj,dir:Sorting):Promise<{data:Obj[]}> => {
	try{
		const response:{data:Obj[]}= { data: arr }
	
		if(dir==='ascending'){
			response.data= arr.sort(function(a, b) {
        var x = a[key]; 
				var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    	});
		}
		if(dir==='descending'){
			response.data= arr.sort(function(a, b) {
        var x = a[key]; 
				var y = b[key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    	});   
		}
		console.log(response.data[0])
		return response
	}catch(e){
		console.log('sorting error:::::::::',e)
		return { 
			data: arr
		}
	}
}