import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";

import consts from "app/app.const";
import { Hero } from "./hero.model";
import { HeroService } from "./hero.service";

const id = "heroListController";

@autoinject
export class HeroListController {

	title = "Heroes";
	heroes: Hero[];
	heroState = consts.routeStates.hero;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private heroService: HeroService,
	) {
		this.logger = loggerFactory.get(id);
	}

	activate() {
		return this.heroService.getAll()
			.then(x => {
				this.heroes = x;
			});
	}
}