export interface NotificationMessage {
	title: string;
	isRead: boolean;
	receivedDate: Date;
}

export interface INotificationService {
	getAllUnreadMessages(): NotificationMessage[];
	getUnreadCount(): number;

	setMessages(messages: NotificationMessage[]): void;
}

export class NotificationService implements INotificationService {
	static id = "notificationService";

	private _messages: NotificationMessage[];

	constructor() {

		const messages: NotificationMessage[] = [
			{ title: "An enemy has been slain.", isRead: false, receivedDate: new Date() },
			{ title: "Password has been changed!", isRead: true, receivedDate: new Date() },
			{ title: "You have leveled up!", isRead: false, receivedDate: new Date() }
		];
		this._messages = messages;
	}

	getAllUnreadMessages() {
		if (!this._messages) {
			return void 0;
		}
		return this._messages.filter((value: NotificationMessage) => {
			return !value.isRead;
		});
	}

	getUnreadCount() {
		const msgs = this.getAllUnreadMessages();
		return msgs ? msgs.length : 0;
	}

	setMessages(messages: NotificationMessage[]) {
		this._messages = messages;
	}
}