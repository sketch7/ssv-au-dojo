export interface IUserInfo {
	alias: string;
}

export class UserInfo implements IUserInfo {
	static id = "userInfo";

	alias = "Chiko";

	constructor(
	) {

	}

}