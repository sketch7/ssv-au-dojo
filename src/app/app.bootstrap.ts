import {autoinject} from "aurelia-framework";
import {ILog, LoggerFactory, RouteBuilder } from "@ssv/au-core";

const id = "bootstrapper";

@autoinject
export class Bootstrapper {

	private logger: ILog;

	constructor(
		private loggerFactory: LoggerFactory,
		private routeBuilder: RouteBuilder
	) {
		this.logger = loggerFactory.get(id);
		this.logger.debug("ctor");
	}

	bootstrap(): void {
		this.buildRoutes();
	}

	private buildRoutes(): void {
		this.logger.debug("buildRoutes", "building routes...");
		this.routeBuilder.map([
			{
				key: "home",
				model: {
					route: ""
				}
			},
			{
				key: "route-builder",
				model: {
					route: "route-builder"
				}
			},
			{
				key: "heroes",
				model: {
					route: "heroes"
				}
			},
			{
				key: "hero-detail",
				parentKey: "heroes",
				model: {
					route: ":hero"
				}
			},

		]);


	}
}