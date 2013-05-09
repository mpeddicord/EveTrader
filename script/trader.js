$(document).ready(function(){

  $.ajax({url: "http://everest.kaelspencer.com/route/Jita/Rens/"}).done(function(data)
  {
    processStationList(JSON.parse(data));
  });
});

function processStationList(data)
{
  console.log(data);
}