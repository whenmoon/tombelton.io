const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

const pluginAntdLess = withAntdLess({
	modifyVars: {
		hack: `true;@import "${require.resolve(
			"./styles/vendor-theme/less/theme.less"
		)}";`,
	},
	lessVarsFilePath: "./styles/vendor-theme/less/variables.less",
});

module.exports = withPlugins([[pluginAntdLess]], {
	images: {
		formats: ["image/avif", "image/webp"],
	},
});