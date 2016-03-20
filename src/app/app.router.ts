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
				name: consts.routeStates.heroes,
				moduleId: `${consts.basePath}/areas/hero/hero-list`,
				nav: true,
				settings: {}
			}, {
				route: "heroes/:hero",
				title: "Hero",
				name: consts.routeStates.hero,
				moduleId: `${consts.basePath}/areas/hero/hero-detail`,
				nav: false,
				settings: {}
			}
		]);
	}
}