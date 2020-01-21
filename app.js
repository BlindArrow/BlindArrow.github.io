$(document).ready(function () {

  var initLinks = function () {
    $('.nav-link').each(function (j, link) {
      console.log(link);

      $(link).click(function (event) {
        event.preventDefault()
        var ref = $(this).attr("href");
        console.log(ref);

        // inhalt laden
        $.get(ref, function (data) {
          console.log(data)
          $("#content").empty();
          $(data).appendTo("#content");
        })

        // links anpassen
        $('.nav-link').each(function (l, ring) {
          console.log(ring)

          $(ring).removeClass("active")
        })
        $(this).addClass("active")

        return true;
      });
    })
  };

  // initialisierung
  initLinks();

  // start
  $("#home").addClass("active")

  $.get("channel_info.html", function (data) {
    console.log(data)
    $("#content").empty();
    $(data).appendTo("#content");
  })
})