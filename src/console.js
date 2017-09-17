document.getElementById('set').addEventListener('click', function(){
    let x = document.getElementById('x').value || 0;
    let y = document.getElementById('y').value || 0;
    firebase.database().ref('boats/firstBoat').set({
        x: x,
        y: y
    });
    
});