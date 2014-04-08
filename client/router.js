var router = function () {
    var route;

    Session.set("page", "main");
};

// Make internal events use pushState and our router instead of their default
// behavior
$(window).ready(function () {
    $("body").on("click", "a", function (e) {
        var href = $(this).attr("href");

        if (href[0] === "/") {
            window.history.pushState("", "", href);

            router();

            e.preventDefault();
        }
    })
});

// trigger router on popstate
$(window).bind('popstate',  function (event) {
    router();
});
