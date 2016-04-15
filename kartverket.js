(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.do_nothing = function(centerX, centerY, Z) {
        // Code that gets executed when the block is run
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
             64, 14, 6],
            ['r', 'breddegrad %n', 'breddegrad'],
            ['r', 'lengdegrad %n', 'lengdegrad'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Kartverket - Leaflet', descriptor, ext);
})({});
