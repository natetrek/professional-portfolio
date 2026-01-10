
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/work";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/img/404.svg" | "/img/flexio-logo.png" | "/img/flexio-web-300.jpg" | "/img/flexio-web-400.jpg" | "/img/flexio-web-500.jpg" | "/img/flexio-web-600.jpg" | "/img/flexio-web-700.jpg" | "/img/flexio-web-800.jpg" | "/img/flexio-work-01.png" | "/img/flexio-work-02.png" | "/img/goldprairie-web-300.jpg" | "/img/goldprairie-web-400.jpg" | "/img/goldprairie-web-500.jpg" | "/img/goldprairie-web-600.jpg" | "/img/goldprairie-web-700.jpg" | "/img/goldprairie-web-800.jpg" | "/img/gp-logo.png" | "/img/gp-work-01.png" | "/img/gp-work-02.png" | "/img/kirix-logo.png" | "/img/kirix-work-01.png" | "/img/landing-page-300.jpg" | "/img/landing-page-400.jpg" | "/img/landing-page-500.jpg" | "/img/landing-page-600.jpg" | "/img/landing-page-700.jpg" | "/img/landing-page-800.jpg" | "/img/logos/adobe-illustrator-logo.svg" | "/img/logos/adobe-photoshop-logo.svg" | "/img/logos/affinity-designer-logo.svg" | "/img/logos/american-red-cross-logo.svg" | "/img/logos/astellas-logo.svg" | "/img/logos/conde-nast-logo.svg" | "/img/logos/css3-logo.svg" | "/img/logos/figma-logo.svg" | "/img/logos/git-logo.svg" | "/img/logos/google-firebase-logo.svg" | "/img/logos/grainger-logo.svg" | "/img/logos/jamstack-logo.svg" | "/img/logos/javascript-logo.svg" | "/img/logos/medline-logo.svg" | "/img/logos/mysql-logo.svg" | "/img/logos/nodejs-logo.svg" | "/img/logos/postgresql-logo.svg" | "/img/logos/python-logo.svg" | "/img/logos/sql-logo.svg" | "/img/logos/tailwindcss-logo.svg" | "/img/logos/typescript-logo.svg" | "/img/logos/vite-logo.svg" | "/img/logos/vue-logo.svg" | "/img/nate-williams-logo-180.svg" | "/img/nate-williams-logo-200.svg" | "/img/product-highlights-300.jpg" | "/img/product-highlights-400.jpg" | "/img/product-highlights-500.jpg" | "/img/product-highlights-600.jpg" | "/img/product-highlights-700.jpg" | "/img/product-highlights-800.jpg" | "/img/rocket-in-clouds.svg" | "/img/trekking-in-mountains.png" | "/img/trekking-in-mountains.svg" | "/logos/adobe-illustrator-logo.svg" | "/logos/adobe-photoshop-logo.svg" | "/logos/affinity-designer-logo.svg" | "/logos/american-red-cross-logo.svg" | "/logos/astellas-logo.svg" | "/logos/conde-nast-logo.svg" | "/logos/css3-logo.svg" | "/logos/figma-logo.svg" | "/logos/git-logo.svg" | "/logos/google-firebase-logo.svg" | "/logos/grainger-logo.svg" | "/logos/jamstack-logo.svg" | "/logos/javascript-logo.svg" | "/logos/medline-logo.svg" | "/logos/mysql-logo.svg" | "/logos/nodejs-logo.svg" | "/logos/postgresql-logo.svg" | "/logos/python-logo.svg" | "/logos/sql-logo.svg" | "/logos/tailwindcss-logo.svg" | "/logos/typescript-logo.svg" | "/logos/vite-logo.svg" | "/logos/vue-logo.svg" | string & {};
	}
}