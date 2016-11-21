import { RouterConfiguration } from "aurelia-router";
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
			}, {
				route: "basic-form",
				title: "Basic Form",
				name: consts.routeStates.basicForm,
				moduleId: `${consts.basePath}/areas/basic-form/basic-form`,
				nav: true,
				settings: {}
			}, {
				route: "route-builder",
				title: "Route builder lab",
				name: consts.routeStates.routeBuilder,
				moduleId: `${consts.basePath}/areas/route-builder/route-builder.component`,
				nav: true,
				settings: {}
			}
		]);
		config.mapUnknownRoutes(`${consts.basePath}/areas/error/not-found`);
	}
}