import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "core/logger/logger";

const id = "errorController";

@autoinject
export class ErrorController {

	private _logger: ILog;

	constructor(
		private logService: LogService
	) {
		this._logger = logService.getLogger(id);
	}

}