import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "core/logger/logger";

const id = "notFoundController";

@autoinject
export class NotFoundController {

	private _logger: ILog;

	constructor(
		private logService: LogService
	) {
		this._logger = logService.getLogger(id);
	}

}