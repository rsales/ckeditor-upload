const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin')
const ckeditorSvgLoader = require('./loaders/ckeditor-svg')
const ckeditorCssLoader = require('./loaders/ckeditor-css')


environment.plugins.prepend('CKEditorWebpackPlugin', new CKEditorWebpackPlugin({
  addMainLanguageTranslationsToAllAssets: true,
  buildAllTranslationsToSeparateFiles: true,
  language: 'en',
}))

// The default value for css.exclude is `/\.module\.[a-z]+$/`
const cssLoader = environment.loaders.get('css');
cssLoader.exclude = /(\.module\.[a-z]+$)|(ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css)/
const fileLoader = environment.loaders.get('file');
fileLoader.exclude = /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/

// environment.loaders.get('css').exclude = [
//   /\.module\.[a-z]+$/,
//   /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
// ];
// environment.loaders.get('file').exclude = path.resolve(__dirname, '..', '..', 'node_modules', '@ckeditor');
// environment.loaders.get('moduleCss').exclude = /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/;

environment.loaders.prepend('ckeditor-svg', ckeditorSvgLoader);
environment.loaders.prepend('ckeditor-css', ckeditorCssLoader);

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
