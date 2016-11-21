import {autoinject} from "aurelia-framework";
import {ILog, LoggerFactory} from "@ssv/au-core";
import {UserInfo} from "app/modules/user/user";

const id = "basicFormController";

@autoinject
export class BasicFormController {

	title = "Basic Form";
	alias: string;

	private logger: ILog;

	constructor(
		private loggerFactory: LoggerFactory,
		private userInfo: UserInfo
	) {
		this.logger = loggerFactory.get(id);
	}

	activate() {
		this.alias = this.userInfo.alias;
	}

	save(): void {
		this.logger.info("save", "yay!", { alias: this.alias });
		this.userInfo.alias = this.alias;
	}
}