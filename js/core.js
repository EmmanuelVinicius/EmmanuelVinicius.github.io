//Remover acentos
function removerAcentos(newStringComAcento) {
    var string = newStringComAcento;
    var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        A: /[\xC0-\xC6]/g,
        e: /[\xE8-\xEB]/g,
        E: /[\xC8-\xCB]/g,
        i: /[\xEC-\xEF]/g,
        I: /[\xCC-\xCF]/g,
        o: /[\xF2-\xF6]/g,
        O: /[\xD2-\xD6]/g,
        u: /[\xF9-\xFC]/g,
        U: /[\xD9-\xDC]/g,
        c: /\xE7/g,
        C: /\xC7/g,
        n: /\xF1/g,
        N: /\xD1/g,
    };

    for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace(expressaoRegular, letra);
    }

    return string;
}
// Array de Pacotes
$(document).ready(function () {

    var Pacotes = ["Basico", "Intermediario", "Profissional", "Modulo", "Anual", "Bianual"]

    var tipos = $(".tipos");
    Pacotes.forEach(element => {
        tipos.html(
            "<div class= 'form-group'>" +
            "<input type = 'checkbox' name = 'fancy-checkbox-info1' id = 'fancy-checkbox-info1' autocomplete = 'off' />" +
            "<div class= 'btn-group'>" +
            "<label for= 'fancy-checkbox-info1' class= 'btn btn-info'>" +
            "<span class= 'glyphicon glyphicon-ok'></span>" +
            "<span > <i class='fa fa-check'></i></span>" +
            "</label>" +
            "<label for= 'fancy-checkbox-info1' class= 'btn btn-default'>" +
            element +
            "</label>" +
            "</div>" +
            "</div>"
        )
        for (let i = 0; i < Pacotes.length; i++) {
            const element= array[i];
            
        }
    })
})


// Sticky Header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});


$(document.body).on("click", ".col-lg-4", function (ev) {
    $(this).attr("data-toggle", "modal").attr("data-target", "#exampleModal");
    var servico = $(ev.target);
    var valorServico = servico.children("h3");
    var nomeServico = valorServico.text();
    if (nomeServico == "") {
        valorServico = servico.siblings("h3");
    }
    nomeServico = valorServico.text();

    $(".modal-title").text(nomeServico);
    var tituloAjax = removerAcentos(nomeServico).replace(/\s/g, '');

    $.ajax({
        url: "ajax/" + tituloAjax + ".html",
        type: "GET",
        dataType: "text",
        success: function (result) {
            $(".modal-body").html(result);
        }
    })
})

$(document.body).on("click", ".contratar", function (ev) {
    $(this).attr("data-toggle", "modal").attr("data-target", "#ModalPagamento");
    /*var nome = $(this).attr();
    
    $.ajax({
        url: "pagamento.html",
        type: "GET",
        dataType: "html",
        success: function (result) {
            $(".modal-header").html(result);
        }
    })*/
    var nomeDoTipo = $(ev.target).attr("id")

});
/*
switch ($(ev.target).attr("id")) {
    case "Basico":
        console.log($(ev.target).attr("id"))
        break;
    case "Intermediario":
        console.log($(ev.target).attr("id"))
        break;
    case "Profissional":
        console.log($(ev.target).attr("id"))
        break;
    case "Anual":
        console.log($(ev.target).attr("id"))
        break;
    case "Bianual":
        console.log($(ev.target).attr("id"))
        break;
    case "Modulo":

        break;
    default:
        console.log($(ev.target).attr("id"))
        break;
}
*/



$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// Year for copy content
$(function () {
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
});
