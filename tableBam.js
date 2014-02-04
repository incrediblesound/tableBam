var tableBam = function (id,name,data) {
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
      forEach(a, function(formH) {
        $('#'+name).append('<th>'+formH+'</th>');
      });
    }
    else if(data[i][0] === 'd') {
      $('#'+name).append("<tr class='row"+i+"'>")
      var b = data[i].split('.');
      forEach(b, function(formD) {
        $('.row'+i).append('<td>'+formD+'</td>');
      });
    }
  }
  return;
};

var forEach = function (array, fn) {
  for(i=1;i<array.length;++i)
    fn(array[i]);
};
