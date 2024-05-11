import { ConfigSchemaV37Json } from './types/ConfigSchemaV37Json'

/**
 * Возращает объект конфигурации docker-compose для разработки, проверки развёртывания на сервере и для сервера
 * @param env — тип конфигурации
 */
export function createDockerConfig(env: 'dev' | 'serverCheck' | 'server'): ConfigSchemaV37Json {
	const domain = 'explainit.ru'

	// Общие переменные окружения для всех сервисов
	const commonEnvVars = {
		AUTH_LOGIN: 'thnadz45$%',
		AUTH_PASSWORD: 'kwcGT09%$#',
	}

	return {
		version: '3.8',

		services: {
			nginx: {
				image: 'nginx:1.19.7-alpine',
				container_name: 'explain-nginx',
				depends_on: ['api', 'face'],
				ports: env === 'server' ? undefined : ['80:80'],
				volumes: ['./nginx/nginx.conf.dev:/etc/nginx/nginx.conf'],
				environment:
					env === 'server'
						? {
								VIRTUAL_HOST: `${domain},www.${domain}`,
								LETSENCRYPT_HOST: `${domain},www.${domain}`,
							}
						: undefined,
			},
			api: {
				build: {
					context: 'api/',
					dockerfile: env === 'dev' ? 'Dockerfile.dev' : 'Dockerfile.server',
				},
				restart: 'unless-stopped',
				volumes: ['./api/src:/app/src'],
				command: env === 'dev' ? 'npm run start:dev' : 'npm run start:prod',
				container_name: 'explain-api',
				environment: commonEnvVars,
			},
			face: {
				build: {
					context: 'face/',
					dockerfile: env === 'dev' ? 'Dockerfile.dev' : 'Dockerfile.server',
				},
				restart: 'unless-stopped',
				volumes: env === 'dev' ? ['./face:/app'] : undefined,
				command: env === 'dev' ? 'npm run dev' : 'npm run start',
				container_name: 'explain-face',
				environment: commonEnvVars,
			},
		},
		networks: env === 'server' ? getServerNetworks() : undefined,
	}
}

function getServerNetworks() {
	return {
		default: {
			external: {
				name: 'nginx-proxy',
			},
		},
	}
}
