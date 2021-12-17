module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
          @import "@/style/_mixin.scss";
          @import "@/style/_style.scss";
          @import "@/style/_variable.scss";
        `,
			},
		},
	},
};
