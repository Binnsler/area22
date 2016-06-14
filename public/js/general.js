var artists = document.querySelectorAll('.artist');

for(var i = 0; i < artists.length; i++){

  artists[i].addEventListener('mouseover', function(event){
    var children = event.target.childNodes;
    for(var j = 0; j < children.length; j++){
      children[j].style.display = "none";
    }
  });

  artists[i].addEventListener('mouseout', function(event){
    var children = event.target.childNodes;
    for(var j = 0; j < children.length; j++){
      children[j].style.display = "block";
    }
  })
}
