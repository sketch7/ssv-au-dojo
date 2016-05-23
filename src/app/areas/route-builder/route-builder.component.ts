import {autoinject} from "aurelia-framework";
import {ILog, LogService, RouteBuilder } from "ssv-au-core";

const id = "routeBuilderController";

@autoinject
export class RouteBuilderController {

	title = "Route Builder";
	heroesUrl: string;
	azmodanHeroUrl: string;

	private logger: ILog;

	constructor(
		private logService: LogService,
		private routeBuilder: RouteBuilder
	) {
		this.logger = logService.getLogger(id);
	}

	activate(): void {

		this.heroesUrl = this.routeBuilder.generateUrl("heroes");
		this.azmodanHeroUrl = this.routeBuilder.generateUrl("hero-detail", {
			hero: "azmodan"
		});
	}


}