
function myInfo() {
	$("#info").leanModal();		
    //alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, sem sit amet consequat porta, felis justo ullamcorper justo, et rhoncus neque neque quis dolor. Curabitur malesuada neque nec nunc maximus, vitae bibendum dui consequat. Fusce viverra metus sit amet nibh tempus suscipit. Proin lobortis nulla sem, vitae interdum arcu mollis id. Aliquam sit amet elit et lacus tincidunt commodo. Donec id pellentesque turpis, et sollicitudin turpis. Donec placerat enim in nulla ultrices placerat. Praesent dapibus lectus nisl, feugiat faucibus eros accumsan ac.");
}

$.ajax({
    url: '../../../../data/config.json',
    header: ('Content-Type: application/json; charset=utf-8'),
    method: 'GET'
}).then(function(data) {
    linebreak= document.createElement("br")
    console.log(data,'moi');
    //console.log("danger");
    document.querySelectorAll(".infoT")[0].setAttribute("style", 'background-color:purple;color:white;');
    document.querySelectorAll("#infocontnet")[0].innerHTML = data.message1;
    document.querySelectorAll("#infosv")[0].innerHTML = data.message2;
    document.querySelectorAll("#infoeng")[0].innerHTML = data.message3;
});