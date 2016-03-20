import {autoinject} from "aurelia-framework";
import {ILog, LogService} from "core/logger/logger";

import {INotificationService} from "modules/notification/notification";
import {IUserInfo} from "modules/user/user";
import consts from "app/app.const";

const id = "navController";

@autoinject
export class NavController {

	heroesState = consts.routeStates.heroes;
	unreadNotificationsCount = 0;

	get appTitle() {
		return consts.name;
	}

	get appVersion() {
		return consts.version;
	}

	get user() {
		return this.userInfo.alias;
	}

	items = [{
		title: "Heroes",
		state: consts.routeStates.heroes
	}, {
			title: "Basic form",
			state: consts.routeStates.basicForm
		}, {
			title: "Command lab",
			state: "#"
		},
	];

	private _logger: ILog;

	constructor(
		private logService: LogService,
		private notificationService: INotificationService,
		private userInfo: IUserInfo
	) {
		this._logger = logService.getLogger(id);
		this._logger.info("ctor", "init");
		this.unreadNotificationsCount = this.notificationService.getUnreadCount();
	}
}