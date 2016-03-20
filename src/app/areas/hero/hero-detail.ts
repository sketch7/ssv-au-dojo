import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "core/logger/logger";
import consts from "app/app.const";
import {AppRouteParams} from "app/app.router";

import {Hero} from "./hero.model";
import {HeroService} from "./hero.service";

const id = "heroDetailController";

@autoinject
export class HeroDetailController {

	hero: Hero;
	heroesState = consts.routeStates.heroes;

	private _logger: ILog;

	constructor(
		private logService: LogService,
		private heroService: HeroService
	) {

		this._logger = logService.getLogger(id);
		this._logger.debug("ctor");
	}

	activate(params: AppRouteParams) {
		this.heroService.getByKey(params.hero)
			.then(x => {
				this.hero = x;
			});
	}

}