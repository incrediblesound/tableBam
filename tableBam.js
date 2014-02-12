window.tableBam = function (id,name,data) {
  data = data.split('/');
  if(data[0][0] === 'b') {
      var table = $('<table id="'+name+'" border = '+data[0][1]+'>');
    } else {
      var table = $('<table id="'+name+'">');
    }
    $(id).append(table)
  for(var i=1;i<data.length;++i) {
    if(data[i][0] === 'h') {
      var a = data[i].split('.');
      a.splice(0,1);
      a.forEach(function(formH) {
        $('#'+name).append('<th>'+formH+'</th>');
      });
    }
    else if(data[i][0] === 'd') {
      $('#'+name).append("<tr class='row"+i+"'>")
      var b = data[i].split('.');
      b.splice(0,1);
      b.forEach(function(formD) {
        $('.row'+i).append('<td>'+formD+'</td>');
      });
    }
  }
}
