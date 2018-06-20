(function ($) {
  'use strict';

  /**
   * All of the code for your admin-facing JavaScript source
   * should reside in this file.
   *
   * Note: It has been assumed you will write jQuery code here, so the
   * $ function reference has been prepared for usage within the scope
   * of this function.
   *
   * This enables you to define handlers, for when the DOM is ready:
   *
   * $(function() {
	 *
	 * });
   *
   * When the window is loaded:
   *
   * $( window ).load(function() {
	 *
	 * });
   *
   * ...and/or other possibilities.
   *
   * Ideally, it is not considered best practise to attach more than a
   * single DOM-ready or window-load handler for a particular page.
   * Although scripts in the WordPress core, Plugins and Themes may be
   * practising this, we should strive to set a better example in our own work.
   */
  $(document).ready(function () {
    var pluginName = $('.form-marker-btn').data('plugin-name');
    $('.form-marker-btn').click(function () {
      var markerIndex = $('.form-marker').length + 1;
      $('.form-markers').append('  <div data-id=' + markerIndex + ' class="form-marker-container">' +
        '                         <h5>Point ' + markerIndex + '</h5>' +
        '                         <div class="btn btn-danger delete-marker">x</div>' +
        '                         <div class="form-marker">\n' +
        '                         <div class="form-group">\n' +
        '                            <label for="marker[index]-popup-name">Popup Name</label>\n' +
        '                            <input type="text" class="form-control"\n' +
        '                                   id="' + pluginName + '-markers[' + indexedDB + ']-popup_name"\n' +
        '                                   name="' + pluginName + '[markers][' + markerIndex + '][popup_name]"\n' +
        '                                   value=""\n' +
        '                                   aria-describedby="Popup Name" placeholder="Popup Name"\n' +
        '                                   required>\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="marker-lat">Latitude</label>\n' +
        '                            <input type="number" step="0.0000001" class="form-control"\n' +
        '                                   id="' + pluginName + '-markers[' + markerIndex + ']-marker_lat"\n' +
        '                                   name="' + pluginName + '[markers][' + markerIndex + '][lat]"\n' +
        '                                   value=""\n' +
        '                                   aria-describedby="Latitude" placeholder="Latitude" required>\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="marker-lng">Longitude</label>\n' +
        '                            <input type="number" step="0.0000001" class="form-control"\n' +
        '                                   id="' + pluginName + '-markers[' + markerIndex + ']-marker_lng"\n' +
        '                                   name="' + pluginName + '[markers][' + markerIndex + '][lng]"\n' +
        '                                   value=""\n' +
        '                                   aria-describedby="Longitude" placeholder="Longitude" required>\n' +
        '                        </div> ' +
        '</div>'
      )
    })

    $('.delete-marker').live('click', function (e) {
      $(this).parent().remove()
    })
  });

})(jQuery);
