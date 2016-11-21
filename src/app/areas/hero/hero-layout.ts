import { autoinject } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import consts from "app/app.const";

const id = "heroListController";

@autoinject
export class HeroListController {

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get(id);
	}

	configureRouter(config: RouterConfiguration) {
		this.logger.debug("configureRouter");
		config.map([
			{
				route: "",
				title: "Heroes",
				name: consts.routeStates.heroes,
				moduleId: `${consts.basePath}/areas/hero/hero-list`,
				nav: false,
				settings: {}
			},
			{
				route: ":hero",
				title: "Hero",
				name: consts.routeStates.hero,
				moduleId: `${consts.basePath}/areas/hero/hero-detail`,
				nav: false,
				settings: {}
			}
		]);
	}

}