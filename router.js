function route(handle, pathname){
	console.log("On my way to route for " + pathname);
	if (typeof handle[pathname] === 'function') {
    	return handle[pathname]();
  	} else {
    	console.log("No se encontro manipulador para " + pathname);
    	return "404 No Encontrado";
  	}
}
exports.route = route;