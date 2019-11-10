var fs = require('fs');
var path = require('path');


class LayoutWebpackHtmlPlugin {
    constructor(opt) {
        this.options = opt
    }
    apply(compiler) {
        var that = this;
        compiler.hooks.compilation.tap('LayoutWebpackHtmlPlugin', function(compilation) {

          compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData) {
            htmlPluginData.html = that.addLayout( htmlPluginData.html, that.options);
            const filename = htmlPluginData.plugin.options.filename
            compilation.assets[filename] = {
                filePath() { return htmlPluginData.plugin.options.filename },
                source() { return new Buffer(htmlPluginData.html) },
                size() { return Buffer.byteLength(this.source(), 'utf8') }
            }
          });

        });
    }
    addLayout(html, options) {
        if(options.layout){
            var replace = options.replace || 'content';
            var layout = fs.readFileSync(options.layout, 'utf-8');
            var reg = new RegExp('{{ ?'+ replace +' ?}}');
            html = layout.replace(reg, html);
        }

        return html;
    }
}

module.exports = LayoutWebpackHtmlPlugin;
