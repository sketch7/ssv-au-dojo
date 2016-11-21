import {autoinject} from "aurelia-framework";
import {ILog, LoggerFactory} from "@ssv/au-core";

const id = "notFoundController";

@autoinject
export class NotFoundController {

	private logger: ILog;

	constructor(
		private loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get(id);
	}

}