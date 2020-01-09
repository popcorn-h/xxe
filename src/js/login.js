export default ()=>{
	var h=$("body>div>.container").height();
	$(".posi,.sg").height(h);
	$(".log").click(function(){
		$(".sg,.posi").show();
	})
}
