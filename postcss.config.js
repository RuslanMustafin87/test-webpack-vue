const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = function ({ mode }) {
	if (mode === "development") {
		return {
			plugins: ["mqpacker", postcssPresetEnv()],
		};
	}

	return {
		plugins: [
			"mqpacker",
			postcssPresetEnv(),
			purgecss({
				content: ["./src/**/*.vue"],
				defaultExtractor(content) {
					const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
					return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
				},
				safelist: [
					/-(leave|enter|appear)(|-(to|from|active))$/,
					/^(?!(|.*?:)cursor-move).+-move$/,
					/^router-link(|-exact)-active$/,
					/data-v-.*/,
					"collapsing",
					"show-collapse",
					"active",
				],
			}),
		],
	};
};
