import {autoinject} from "aurelia-framework";
import {ILog, LoggerFactory} from "@ssv/au-core";

const id = "errorController";

@autoinject
export class ErrorController {

	private logger: ILog;

	constructor(
		private loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get(id);
	}

}