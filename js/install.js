if ('serviceWorker' in navigator) {
	window.addEventListener('load',function(){
		navigator.serviceWorker.register('service-worker.js', {
    scope: './'}).then(function(registration){
			//Registration was successful
			console.log('serviceWorker registration successful with scope:', registration.scope);
		}, function(err){
			//Registration failed
			console.log('serviceWorker registration failed', err);
		})
	})
   
}