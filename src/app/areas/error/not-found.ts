import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "ssv-au-core";

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