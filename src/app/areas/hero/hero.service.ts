import * as _ from "lodash";
import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { Hero } from "./hero.model";
import { HEROES } from "./mock-heroes";

const id = "heroService";

@autoinject
export class HeroService {

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get(id);
		this.logger.debug("ctor", "init");
	}

	getAll(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getByKey(key: string): Promise<Hero> {
		this.logger.info("getByKey", "finding...", { key: key });

		return this.getAll()
			.then(x => {
				const result = _.find(x, { key: key });
				this.logger.info("getByKey", "find complete.", { key: key, result: result });

				if (!result) {
					throw new Error(`Hero '${key}' not found`);
				}
				return result;
			});
	}

}