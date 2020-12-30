function eventTest(){
    const event = window.event||arguments[0];
    //target 就是这个对象
    const target = event.srcElement||event.target;
	console.log(111)
	console.log(target)
}
export {eventTest}