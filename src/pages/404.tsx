import { removeTrailingSlash } from 'next/dist/shared/lib/router/utils/remove-trailing-slash';
import { parseRelativeUrl } from 'next/dist/shared/lib/router/utils/parse-relative-url';
import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex';
import { isDynamicRoute } from 'next/dist/shared/lib/router/utils/is-dynamic';
import { getClientBuildManifest } from 'next/dist/client/route-loader';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**
 * Retrieves the list of pages.
 *
 * If the environment is production, it fetches the sorted pages from the client build manifest.
 * If the environment is not production, it checks if the sorted pages are available in the window object.
 *
 * @returns The list of sorted pages.
 */
async function getPageList() {
	if (process.env.NODE_ENV === 'production') {
		const { sortedPages } = await getClientBuildManifest();
		return sortedPages;
	} else {
		if (typeof window !== 'undefined' && window.__BUILD_MANIFEST?.sortedPages) {
			console.log(window.__BUILD_MANIFEST.sortedPages);
			return window.__BUILD_MANIFEST.sortedPages;
		}
	}
	return [];
}

/**
 * Checks if the given location matches any page in the page list.
 *
 * @param location - The location to check.
 * @returns A promise that resolves to true if the location matches a page, false otherwise.
 */
async function getDoesLocationMatchPage(location: string) {
	const pages = await getPageList();

	let parsed = parseRelativeUrl(location);
	let { pathname } = parsed;
	return pathMatchesPage(pathname, pages);
}

/**
 * Determines if a given pathname matches any of the pages in the provided list.
 *
 * @param pathname - The pathname to check for a match.
 * @param pages - The list of pages to compare against.
 * @returns True if the pathname matches a page, false otherwise.
 */
function pathMatchesPage(pathname: string, pages: string[]) {
	const cleanPathname = removeTrailingSlash(pathname);

	if (pages.includes(cleanPathname)) {
		return true;
	}

	const page = pages.find(
		(page) => isDynamicRoute(page) && getRouteRegex(page).re.test(cleanPathname),
	);

	return !!page;
}

/**
 * Determines if the current route needs processing.
 *
 * @param router - The NextRouter object.
 * @returns A boolean indicating if the route needs processing.
 */
function doesNeedsProcessing(router: NextRouter) {
	return router.pathname !== router.asPath;
}

const Custom404 = () => {
	const router = useRouter();

	const [isNotFound, setIsNotFound] = useState<boolean>(false);

	const processLocationAndRedirect = async (router: NextRouter) => {
		if (doesNeedsProcessing(router)) {
			const targetIsValidPage = await getDoesLocationMatchPage(router.asPath);
			if (targetIsValidPage) {
				await router.replace(router.asPath);
				return;
			}
		}
		setIsNotFound(true);
	};

	useEffect(() => {
		if (router.isReady) {
			processLocationAndRedirect(router).then();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady]);

	if (!isNotFound) return null;

	return <h1>Error 404 - Page Not Found</h1>;
};

export default Custom404;