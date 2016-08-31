// Author : Marvic R. Macalintal
// Contact: vicmacalintal@yahoo.com
// FB: marvic.macalintal

var Youtube_AC = {
	
	Init: function(limit=8,minchar=3)
	{
		
		var k = 0;
		
		document.addEventListener('DOMContentLoaded', init);
		
		// 1. Initialize
		function init()
		{
			this.textbox = document.querySelector('#youtube_ac');	
			this.textbox.addEventListener('keydown', key_down);
		}
		// 2. Get the input
		function key_down(e)
		{
			this.query = document.querySelector('#youtube_ac').value;	
			var xhttp = new XMLHttpRequest();
			
			// If ENTER, arrow keys is pressed, don't fire the ajax autocomplete event
			if((e.keyCode<37 || e.keyCode>40)&&e.keyCode!=13)
			{
			
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
			
			// Up Arrow
			if(e.keyCode==38)
			{
				
				this.len = document.querySelectorAll(".youtube_ac_item").length;
				
				for(var i=0;i<=this.len-1;i++)
				{
					document.querySelectorAll(".youtube_ac_item")[i].style.background = 'none';
					document.querySelectorAll(".youtube_ac_item a")[i].style.color = '#000';
				}
				
				k = k - 1;
				
				if(k<0)
				{
					k = this.len-1;
				}
				
				document.querySelectorAll(".youtube_ac_item")[k].style.background = '#3399ff';
				document.querySelectorAll(".youtube_ac_item a")[k].style.color="#fff";
				
				document.querySelector('#youtube_ac').value = document.querySelectorAll(".youtube_ac_item")[k].innerText;
				
					
				
			}
			// Down Arrow
			else if(e.keyCode==40)
			{
				this.len = document.querySelectorAll(".youtube_ac_item").length;
				
				for(var i=0;i<=this.len-1;i++)
				{
					 document.querySelectorAll(".youtube_ac_item")[i].style.background = 'none';
					 document.querySelectorAll(".youtube_ac_item a")[k].style.color = '#000';
				}
				
				k = (k + 1) % this.len;
				
				document.querySelectorAll(".youtube_ac_item")[k].style.background = '#3399ff';
				document.querySelectorAll(".youtube_ac_item a")[k].style.color = '#fff';
				
				document.querySelector('#youtube_ac').value = document.querySelectorAll(".youtube_ac_item")[k].innerText;
			
			}
			// Enter 
			else if(e.keyCode==13)
			{
				document.querySelector('#youtube_ac_result').style.display = 'none';
				document.querySelector('#youtube_ac').value = document.querySelectorAll(".youtube_ac_item")[k].innerText;
			}
				
			
		}
		// 3. Show the result
		function show_result(data)
		{
			
			this.ex = document.querySelector('#youtube_ac_result');
			
			if(!this.ex)
			{
				this.result_container = document.createElement("div");
				this.result_container.setAttribute("id","youtube_ac_result");
				this.result_container.style.width = document.querySelector("#youtube_ac").clientWidth + "px";
			}
			else 
			{
				this.result_container.style.width = document.querySelector("#youtube_ac").clientWidth + "px";
				this.result_container.style.display = '';
				this.result_container.innerHTML = '';
				this.result_container = ex;
			}
			
			// Append the search result below the text box
			insertAfter(this.result_container,document.querySelector('#youtube_ac'));
			
			// Append result
			this.result_container.innerHTML = data;
			
		}
		
		function insertAfter(newNode, referenceNode) 
		{
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}
		

	},
	SetValue: function(value)
	{
		document.querySelector('#youtube_ac').value = value;
		document.querySelector('#youtube_ac_result').style.display = 'none';
	}
	
}
