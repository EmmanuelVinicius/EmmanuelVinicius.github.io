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

// Sticky Header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});

//Logo inicial
$(".navbar-brand").click(function () {
    window.location.href = "index.html"
})
//Redes Sociais
$(".redes").click(function () {
    $(this).attr("target", "_blank")
})
//Contato
$(".mensagem").click(function() {
    $(this).html("<i class='fa fa-spinner loader' aria-hidden='true'></i>");
    setTimeout(() => {
        $(".alert").removeClass("d-none");
        $(".alert").addClass("d-block");
        $(this).html("Enviar");
    }, 3000);
})

// Year for copy content
$(function () {
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
});


//===========================================
//============== MÓDULOS ====================
//===========================================


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


//===========================================
//============= PAGAMENTO ===================
//===========================================


$(document.body).on("click", ".contratar", function (ev) {
    $(this).attr("data-toggle", "modal").attr("data-target", "#ModalPagamento");
    var nome = $(this).attr("id");

    switch (nome) {
        // case "basico":
        //     $("option#op1").attr("selected", "true");
        //     console.log($("option#op1").attr("id"));
        //     break;
        case "intermediario":
            $("option#op2").attr("selected", "true");
            console.log($("option#op2").attr("id"));
            break;
        case "profissional":
            $("option#op3").attr("selected", "true");
            console.log($("option#op3").attr("id"));
            break;
        case "modulo":
            $("option#op4").attr("selected", "true");
            console.log($("option#op4").attr("id"));
            break;
        case "usuario":
            $("option#op5").attr("selected", "true");
            console.log($("option#op5").attr("id"));
            break;
        case "anual":
            $("option#op6").attr("selected", "true");
            console.log($("option#op6").attr("id"));
            break;
        case "bianual":
            $("option#op7").attr("selected", "true");
            console.log($("option#op7").attr("id"));
            break;
        default:
            $("option#op1").attr("selected", "true");
            console.log($("option#op1").attr("id"));
            break;
    }
});

$("#checkTodos").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});


/*
var MAX_SELECT;
$("select").change(function (ev) {
    if (($(this).attr("value") == "1") || ($(this).attr("value") == "2")) {
        $(".checkTodos").attr('disabled', 'disabled');
    } else {
        $(".checkTodos").removeAttr('disabled');
    }
    MAX_SELECT = $(this).val();
})

$('select').on('change', function () {
    if ($(this).parent().children(':checked').length >= MAX_SELECT) {
        this.checked = false;
    }
});
*/