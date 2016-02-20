var path = require("path");
var fs = require("fs");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const srcRoot = "src";
const outRoot = "wwwroot";
const tsdMainFile = "typings/browser.d.ts";

module.exports = {
	output: {
		root: outRoot,
		dist: `${outRoot}/dist`
	},
	src: {
		root: srcRoot,
		tsd: tsdMainFile,
		ts: `./${srcRoot}/**/*.ts`,
		html: `./${srcRoot}/app/**/*.html`,
		sass: `./${srcRoot}/assets/**/*.scss`,
		imgs: `./${srcRoot}/assets/**/*.{png,jpeg,jpg}`,
		indexHtml: `./${srcRoot}/index.html`
	},
	doc: "./doc",
	packageName: pkg.name
};