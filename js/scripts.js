/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function() {

    $("#sign-up-btn").click(()=> {
        $("#uvc-modal").modal('show');
    })

    $("#login-btn").click(()=> {
        $("#uvc-modal").modal('show');
    })

    $("#close-modal").click(() => {
        $("#uvc-modal").modal("toggle");
    })


});