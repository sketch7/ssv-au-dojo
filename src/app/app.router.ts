import {RouterConfiguration} from "aurelia-router";
import consts from "app/app.const";

export interface AppRouteParams {
	hero?: string;
}

export class AppRouter {

	configure(config: RouterConfiguration) {
		config.options.pushState = true;
		config.map([
			{
				route: ["", "home"],
				title: "Home",
				name: consts.routeStates.home,
				moduleId: `${consts.basePath}/areas/home/home`,
				nav: false,
				settings: {}
			}, {
				route: "heroes",
				title: "Heroes",
				name: consts.routeStates.heroesLayout,
				moduleId: `${consts.basePath}/areas/hero/hero-layout`,
				nav: true,
				settings: {}
			}
		]);
		config.mapUnknownRoutes(`${consts.basePath}/areas/error/not-found`);
	}
}