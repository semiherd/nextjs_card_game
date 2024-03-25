function capitalizeFirstCh(str:string) {
	let newStr:string[]=[]; 
	if(str && str.length>0){
		 str.split(' ').map((item) => {
			  newStr.push(item.charAt(0).toUpperCase() + item.slice(1));
		 })
		 return newStr.join(' ');
	}else return null
}

export { capitalizeFirstCh }