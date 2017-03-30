var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        console.log("Ready");
    }
};

function ClickNewTurno(objText)
{
    var stringUri = "http://bahiatransporte.com.ar/turnos/turnero.php?pass=DennisRitchie&id=" + $("#slcSucursal").val() + "&accion=1&valor=";
    $.getJSON(stringUri, function (data) {
        $.each(data, function (i, item) {
            console.log(i);
            if (i == 'turno') {
                objText.fadeOut(100, function () {
                    objText.text(item).fadeIn(100);
                });
            }
        });

    });
}
function ClickResetTurno(objText) {
    var stringUri = "http://bahiatransporte.com.ar/turnos/turnero.php?pass=DennisRitchie&id=" + $("#slcSucursal").val() + "&accion=3&valor=0";
    $.getJSON(stringUri, function (data) {
        $.each(data, function (i, item) {
            console.log(i);
            if (i == 'turno') {
                objText.fadeOut(100, function () {
                    objText.text(item).fadeIn(100);
                });
            }
        });

    });
}
function ClickSubTurno(objText) {
    var stringUri = "http://bahiatransporte.com.ar/turnos/turnero.php?pass=DennisRitchie&id=" + $("#slcSucursal").val() + "&accion=2&valor=";
    $.getJSON(stringUri, function (data) {

        $.each(data, function (i, item) {
            console.log(i);
            if (i == 'turno') {
                objText.fadeOut(100, function () {
                    objText.text(item).fadeIn(100);
                });
            }
        });

    });
}



