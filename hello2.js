(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.do_nothing = function() {
        // Code that gets executed when the block is run
    };


    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            [' ', 'geirArne slapper av', 'do_nothing'],
            ['r', '%n ^ %n', 'power', 2, 3],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Kartverket - Leaflet', descriptor, ext);
})({});
