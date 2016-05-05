import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "ssv-au-core";
import consts from "app/app.const";

const id = "homeController";

@autoinject
export class HomeController {

	title = consts.name;

	private logger: ILog;

	constructor(
		private logService: LogService
	) {
		this.logger = logService.getLogger(id);
	}

}