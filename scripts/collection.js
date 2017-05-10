var buildCollectionItemTemplate = function() {
     var template =
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/La_La_Land_soundtrack.jpg"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="album.html"> La La Land </a>'
  + '      <br/>'
  + '      <a href="album.html"> Original Soundtrack </a>'
  + '      <br/>'
  + '      5 songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
  ;
  return $(template);
};

$(window).load(function() {
  var $collectionContainer = $('.album-covers');
  $collectionContainer.empty();

  for (var i = 0; i < 12; i++) {
    var $newThumbnail = buildCollectionItemTemplate();
    $collectionContainer.append($newThumbnail);
  }
});
