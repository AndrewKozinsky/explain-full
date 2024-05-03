import { UserServiceModel } from '../models/service/users.service.model'

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			// JWT_SECRET: 'dev' | 'test'
		}
	}

	namespace Express {
		export interface Request {
			// user: null | UserServiceModel
			// deviceRefreshToken: undefined | null | DBTypes.DeviceToken
		}
	}
}
