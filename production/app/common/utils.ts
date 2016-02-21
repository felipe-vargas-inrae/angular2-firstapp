export class Utils{

	
	getRandItem(someArray:any):any{

		if (someArray == null || someArray == undefined) { 
			console.warn('Undefined array');
			return null; 
		}
		var item = someArray[Math.floor(Math.random() * someArray.length)];

		return item;
	}
}
