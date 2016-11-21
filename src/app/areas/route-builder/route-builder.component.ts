import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory, RouteBuilder } from "@ssv/au-core";

const id = "routeBuilderController";

@autoinject
export class RouteBuilderController {

	title = "Route Builder";
	heroesUrl: string;
	azmodanHeroUrl: string;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private routeBuilder: RouteBuilder
	) {
		this.logger = loggerFactory.get(id);
	}

	activate(): void {

		this.heroesUrl = this.routeBuilder.generateUrl("heroes");
		this.azmodanHeroUrl = this.routeBuilder.generateUrl("hero-detail", {
			hero: "azmodan"
		});
	}


}