document.getElementById('print').onclick = function() {
    var num = document.getElementById('num').value;

    switch (num) {
        case '1':
            document.getElementById('out').innerHTML = 'one';
            break;
        case '2':
            document.getElementById('out').innerHTML = 'two';
            break;
        case '3':
            document.getElementById('out').innerHTML = 'three';
            break;
    };
};