(function(ext) {

    var _centerX = 64;
    var _centerY = 14;
    var _zoom = 6;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.sett_kart = function(centerX, centerY, Z) {
        _centerX = centerX;
        _centerY = centerY;
        _zoom = Z;
    };

    ext.breddegrad = function(grader) {
        return 141
    };

    ext.lengdegrad = function(grader) {
        return -75
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            [' ', 'sett sentrum bredde: %n lengde: %n zoom: %n', 'do_nothing',
             _centerX, _centerY, _zoom],
            ['r', 'breddegrad %n', 'breddegrad', _centerX],
            ['r', 'lengdegrad %n', 'lengdegrad', _centerY],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Kartverket - Leaflet', descriptor, ext);
})({});
