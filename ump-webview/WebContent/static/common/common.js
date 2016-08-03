$(".tree a").on("click", "img", function() {
	//alert(this.src);
	if (this.src.indexOf("open") > -1) {
		this.src = "../static/image/plus.gif";
		$(this).parent().next().hide();
	} else if (this.src.indexOf("plus") > -1) {
		this.src = "../static/image/open.gif";
		$(this).parent().next().show();
	} else
		;
});

//提示title
$(function() {
	$('[data-toggle="tooltip"]').tooltip()
});	