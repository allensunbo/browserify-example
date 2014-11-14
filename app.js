require(['bundle.js'], function (bundle) {
	console.log(bundle.foo('foo'));
	console.log(bundle.bar('bar'));
});