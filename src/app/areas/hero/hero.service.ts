import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "core/logger/logger";
import {Hero} from "./hero.model";
import {Heroes} from "./mock-heroes";
import * as _ from "lodash";

const id = "heroService";

@autoinject
export class HeroService {

	private _logger: ILog;

	constructor(
		private logService: LogService
	) {

		this._logger = logService.getLogger(id);
		this._logger.debug("ctor", "init");
	}


	getAll(): Promise<Hero[]> {
		return Promise.resolve(Heroes);
	}

	getByKey(key: string): Promise<Hero> {

		this._logger.info("getByKey", "finding...", { key: key });

		return this.getAll()
			.then(x => {
				const result = _.find(x, { key: key });
				this._logger.info("getByKey", "find complete.", { key: key, result: result });

				if (!result) {
					throw new Error(`Hero '${key}' not found`);
				}

				return result;
			});
	}

}