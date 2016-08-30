<?php

$q = urlencode($_REQUEST['q']);
$limit = $_REQUEST['limit'];
$c = 1;

$file = json_decode(file_get_contents("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=$q"));

for($i=1;$i<=count($file)-1;$i++)
{
	foreach($file[$i] as $item)
	{
		if($limit>=$c)
		{
			printf("<li class='youtube_ac_item' onclick='javascript:Youtube_AC.SetValue(this.innerText);'><a href='#'>%s</a></li>",$item);
		}
		$c++;
	}
}
?>
