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
				moduleId: `${consts.basePath}/areas/home/home`,
				nav: false,
				settings: {}
			}, {
				route: "heroes",
				title: "Heroes",
				moduleId: `${consts.basePath}/areas/hero/hero-list`,
				nav: true,
				settings: {}
			}, {
				route: "heroes/:hero",
				title: "Hero",
				moduleId: `${consts.basePath}/areas/hero/hero-detail`,
				nav: false,
				settings: {}
			}
		]);
	}
}