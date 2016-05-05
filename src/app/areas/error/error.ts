import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "ssv-au-core";

const id = "errorController";

@autoinject
export class ErrorController {

	private logger: ILog;

	constructor(
		private logService: LogService
	) {
		this.logger = logService.getLogger(id);
	}

}