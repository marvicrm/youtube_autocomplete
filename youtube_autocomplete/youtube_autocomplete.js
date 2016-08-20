var Youtube_AC = {
	
	Init: function(limit=8,minchar=3)
	{
		var textbox = '';
		var query = '';
		var result_container = '';
		
		document.addEventListener('DOMContentLoaded', init);
		
		// 1. Initialize
		function init()
		{
			this.textbox = document.getElementById('youtube_ac');	
			this.textbox.addEventListener('keydown', key_down);
		}
		// 2. Get the input
		function key_down()
		{
			this.query = document.getElementById('youtube_ac').value;	
			var xhttp = new XMLHttpRequest();
			
			if(this.query.length>=minchar)
			{
				xhttp.open('POST', 'data.php', true);
				xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhttp.send('q='+this.query+'&limit='+limit);		
				
				xhttp.onreadystatechange = function() 
				{
					if (xhttp.readyState == 4 && xhttp.status == 200) 
					{
					  show_result(xhttp.responseText);
					}
				};
			}
		}
		// 3. Show the result
		function show_result(data)
		{
			this.result_container = document.getElementById('youtube_ac_result');
			this.result_container.innerHTML = data;
		}
	},
	SetValue: function(value)
	{
		document.getElementById('youtube_ac').value = value;
		document.getElementById('youtube_ac_result').innerHTML = '';
	}
	
}
