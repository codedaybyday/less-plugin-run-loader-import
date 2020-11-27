var getLoaderFileManager = require('./get-loader-file-manager');

function LessPluginRunLoaderImport(options) {
    this.options = options;
}

LessPluginRunLoaderImport.prototype = {
    install: function(less, pluginManager) {
        var LoaderFileManager = getLoaderFileManager(less);
        pluginManager.addFileManager(new LoaderFileManager(this.options));
    },
    printUsage: function () {
        console.log('printUsage', arguments);
    },
    setOptions: function(options) {
        this.options = options;
    },
    minVersion: [2, 1, 1]
};

module.exports = LessPluginRunLoaderImport;