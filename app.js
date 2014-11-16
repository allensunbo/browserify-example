require(['bundle.js'], function (bundle) {
	console.log(bundle.foo('foo'));
	console.log(bundle.bar('bar'));
	console.log(bundle.max([3,8,5]));
});