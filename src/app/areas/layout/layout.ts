import {autoinject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";
import {ILog, LogService} from "ssv-au-core";
import {AppRouter} from "app/app.router";

const id = "layoutController";

@autoinject
export class LayoutController {

	router: Router;
	private logger: ILog;

	constructor(
		private logService: LogService,
		private appRouter: AppRouter
	) {

		this.logger = logService.getLogger(id);
		this.logger.debug("ctor", "init");
	}

	configureRouter(config: RouterConfiguration, router: Router) {
		this.logger.debug("configureRouter");
		this.appRouter.configure(config);
		this.router = router;
	}
}