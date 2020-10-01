document.addEventListener('DOMContentLoaded', function () {

    add1 = document.getElementById('add1');
    add2 = document.getElementById('add2');
    multi1 = document.getElementById('multi1');
    multi2 = document.getElementById('multi2');

    res1 = document.getElementById('res1');
    res2 = document.getElementById('res2');

    var adds = document.getElementsByClassName('add');
    for (let i = 0; i < adds.length; i++) {
        adds[i].addEventListener('mouseup', addfun);
    }

    var multis = document.getElementsByClassName('multi');
    for (let i = 0; i < multis.length; i++) {
			multis[i].addEventListener('mouseup', mulfun);
		}


    // res1.onmouseover = function () {
    //     res1.innerHTML='ticktok'
    // }

    // var rez = document.getElementById('res1');
    // rez.innerText = 'hello';

});





function addfun() {
    // alert('hello')
    res1.innerHTML = Number(add1.value) + Number(add2.value);
}

function mulfun() {
	// alert('hello')
	res2.innerHTML = Number(multi1.value) * Number(multi2.value);
}
