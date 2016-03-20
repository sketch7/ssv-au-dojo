import {ILog, LogService} from "core/logger/logger";

import consts from "app/app.const";

const id = "LayoutController";

export class LayoutController {

	private _logger: ILog;

	constructor(
		private logService: LogService

	) {

		this._logger = logService.getLogger(id);
		this._logger.info("ctor", "init");
	}
}