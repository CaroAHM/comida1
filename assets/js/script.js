var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('#enviarCorreo').click(function () {
    alert("El correo fue enviado correctamente...");
});     

$("h3").on('dblclick', function (event) {
    $(this).css({
        "color": "red",
    });
});  

$('.card-title').on('click', function () {
    $('.card-text').toggle();
    $('.card-img-top').toggle();
});