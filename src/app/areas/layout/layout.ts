import {autoinject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";
import {ILog, LogService} from "core/logger/logger";
import {AppRouter} from "app/app.router";
import consts from "app/app.const";

const id = "LayoutController";

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