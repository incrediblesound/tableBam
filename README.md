tableBam.js
===========

I've always had a deep hatred and aversion to the HTML table. I figured that if I ever had to write out a table in HTML, it would be much better just to be able to write a string and have a JavaScript function parse it into HTML for me with the help of jQuery. Thus, when tableBam and jQuery are loaded, the following code will produce a table:

<body>

	<div class="table"></div>
	<script>
	tableBam('#table','students','b1/h.name.age.sex/d.john.12.male/d.mary.13.female/d.josh.12.male');
	</script>
	
</body>

Function Syntax
---------------

The tableBam function takes three arguments: 

1. Identifies where the table will be appended
2. The id property of the newly rendered table
3. A string which is parsed into Chunks separated by forward slashes

Chunks Syntax
-------------
* The first Chunk is a lowercase b followed by table border width; leave this off entirely for borderless tables
* Headers are prefaced by a lowercase h which is followed by a period and a list of headings separated by periods
* Table data is prefaced by a lowercase d and likewise separated by periods

