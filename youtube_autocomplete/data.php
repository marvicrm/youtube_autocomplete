<?php

$q = urlencode($_REQUEST['q']);
$limit = $_REQUEST['limit'];

$file = json_decode(file_get_contents("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=$q"));

for($i=1;$i<=count($file)-1;$i++)
{
	foreach($file[$i] as $item)
	{
		printf("<a href='#' onclick='javascript:Youtube_AC.SetValue(this.innerHTML);'>%s</a><br>",$item);
	}
}
?>
