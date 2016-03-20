import consts from "app/app.const";
import {Hero} from "./hero.model";
import {HeroService} from "./hero.service";

const id = "heroListController";

export class HeroListController {

	title = "Heroes";
	heroes: Hero[];
	heroState = consts.routeStates.hero;

	constructor(
		private heroService: HeroService
	) {

	}

	activate() {
		this.heroService.getAll()
			.then(x => {
				this.heroes = x;
			});
	}

}