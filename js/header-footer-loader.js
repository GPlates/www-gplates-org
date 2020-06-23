function load_header_footer(){
//    console.log("Loading header and footer...");
    var page_id = $('meta[name=page-id]').attr("content");
    $('body').append("<div id='footer'></div>");
    $('body').prepend("<div id='header'></div>");
    $("#header").load("header.html", function(){
        $('.nav-items #active').removeAttr('id');
        $('.'+page_id).attr('id', 'active');
    });
    $("#footer").load("footer.html");
}

function google_anylytics_tracking_code(){
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55273523-2', 'auto');
  ga('send', 'pageview');
}

$(document).ready(function(){
    load_header_footer();
	google_anylytics_tracking_code();
});

