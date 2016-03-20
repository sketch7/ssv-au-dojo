import {ILog, LogService} from "core/logger/logger";
import consts from "app/app.const";

const id = "home";

export class HomeController {

	title = consts.name;

	private _logger: ILog;

	constructor(
		private logService: LogService
	) {
		this._logger = logService.getLogger(id);
	}

}