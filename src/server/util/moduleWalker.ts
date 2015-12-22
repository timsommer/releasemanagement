'use strict';

import fs = require('fs');
import path = require('path');

// recursively walk modules path and callback for each file
export function walk (modulesPath : string, excludeDir: string, callback: (newPath: string) => void) {
    fs.readdirSync(modulesPath).forEach(function(file) {
        var newPath = path.join(modulesPath, file);
        var stat = fs.statSync(newPath);
        if (stat.isFile() && /(.*)\.(js|coffee)$/.test(file)) {
            callback(newPath);
        } else if (stat.isDirectory() && file !== excludeDir) {
            walk(newPath, excludeDir, callback);
        }
    });
};