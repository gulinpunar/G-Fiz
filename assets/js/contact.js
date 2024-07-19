$(document).ready(function () {
  (function ($) {
    "use strict";

    // validate contactForm form
    $(function () {
      $("#contactForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 3,
          },
          number: {
            required: true,
            minlength: 10,
          },
          email: {
            required: true,
            email: true,
          },
          message: {
            required: true,
            minlength: 5,
          },
        },
        messages: {
          name: {
            required: "İsim zorunlu",
            minlength: "Minimum 3 harf",
          },
          number: {
            required: "Telefon numarası zorunlu",
            minlength: "Telefon numaranız 10 karakterden kısa olamaz",
          },
          email: {
            required: "Mail zorunlu",
          },
          message: {
            required: "Lütfen kısaca mesajınızı yazınız",
            minlength: "Mesajınız yeterli uzunlukta değil",
          },
        },
        submitHandler: function (form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "contact_process.php",
            success: function () {
              $("#contactForm :input").attr("disabled", "disabled");
              $("#contactForm").fadeTo("slow", 1, function () {
                $(this).find(":input").attr("disabled", "disabled");
                $(this).find("label").css("cursor", "default");
                $("#success").fadeIn();
                $(".modal").modal("hide");
                $("#success").modal("show");
              });
              alert("Form gönderildi");
            },
            error: function () {
              $("#contactForm").fadeTo("slow", 1, function () {
                $("#error").fadeIn();
                $(".modal").modal("hide");
                $("#error").modal("show");
              });
              alert("Şuanda bir problem yaşıyoruz");
            },
          });
        },
      });
    });
  })(jQuery);
});
