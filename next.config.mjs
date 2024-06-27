/** @type {import('next').NextConfig} */

const nextConfig = {
	trailingSlash: true,
	reactStrictMode: true,
	output: 'export',
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
