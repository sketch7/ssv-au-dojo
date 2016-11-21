import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";

import consts from "app/app.const";
import { AppRouteParams } from "app/app.router";
import { Hero } from "./hero.model";
import { HeroService } from "./hero.service";

const id = "heroDetailController";

@autoinject
export class HeroDetailController {

	hero: Hero;
	heroesState = consts.routeStates.heroes;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private heroService: HeroService
	) {

		this.logger = loggerFactory.get(id);
		this.logger.debug("ctor");
	}

	activate(params: AppRouteParams) {
		return this.heroService.getByKey(params.hero!)
			.then(x => {
				this.hero = x;
			});
	}

}