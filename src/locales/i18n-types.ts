// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	errors: {
		/**
		 * Y​o​u​'​v​e​ ​g​o​t​ ​m​e​ ​p​u​z​z​l​e​d​ ​t​h​e​r​e​.​ ​R​e​p​o​r​t​ ​t​h​i​s​ ​m​e​s​s​a​g​e​ ​t​o​ ​<​@​2​9​4​9​1​6​3​8​6​0​7​2​0​3​5​3​2​8​>​ ​(​@​a​d​a​n​_​e​a​)​ ​a​n​d​ ​e​x​p​l​a​i​n​ ​w​h​a​t​ ​y​o​u​ ​d​i​d​ ​t​o​ ​g​e​t​ ​i​t​.​ ​I​t​'​s​ ​n​o​t​ ​n​o​r​m​a​l​ ​t​h​a​t​ ​y​o​u​ ​s​e​e​ ​t​h​i​s​.​ ​B​u​t​ ​I​ ​s​t​i​l​l​ ​l​o​v​e​ ​y​o​u​,​ ​y​o​u​ ​k​n​o​w​ ​<​3
		 */
		unknown: string
		/**
		 * O​h​ ​n​o​,​ ​y​o​u​ ​d​o​n​'​t​ ​h​a​v​e​ ​t​h​e​ ​p​e​r​m​i​s​s​i​o​n​s​,​ ​t​o​o​ ​b​a​d​!
		 */
		userPermissions: string
		/**
		 * T​h​i​s​ ​f​u​n​c​t​i​o​n​ ​i​s​ ​o​n​ ​c​o​o​l​d​o​w​n​.​ ​Y​o​u​ ​c​a​n​ ​u​s​e​ ​i​t​ ​a​g​a​i​n​ ​<​t​:​$​{​c​d​}​:​R​>​.
		 * @param {number} cd
		 */
		cooldown: RequiredParams<'cd'>
		/**
		 * I​ ​d​o​n​'​t​ ​h​a​v​e​ ​t​h​e​ ​p​e​r​m​i​s​s​i​o​n​s​ ​t​o​ ​d​o​ ​t​h​a​t​,​ ​s​o​r​r​y​!
		 */
		botPermissions: string
		/**
		 * T​h​e​ ​e​r​r​o​r​ ​i​s​ ​r​a​i​s​e​d​,​ ​b​u​t​ ​y​o​u​ ​h​a​v​e​n​'​t​ ​w​r​i​t​t​e​n​ ​i​t​ ​y​e​t​,​ ​s​m​a​r​t​ ​a​s​s​.
		 */
		toDo: string
		/**
		 * H​m​m​,​ ​i​t​ ​s​e​e​m​s​ ​l​i​k​e​ ​I​ ​d​o​n​'​t​ ​k​n​o​w​ ​t​h​i​s​ ​c​o​m​m​a​n​d​.
		 */
		unknownCommand: string
		/**
		 * S​t​r​a​n​g​e​,​ ​s​t​r​a​n​g​e​,​ ​I​ ​d​o​n​'​t​ ​k​n​o​w​ ​t​h​i​s​ ​s​e​r​v​e​r​.
		 */
		guildNotFound: string
		/**
		 * T​h​e​ ​{​m​o​d​u​l​e​}​ ​m​o​d​u​l​e​ ​i​s​ ​d​i​s​a​b​l​e​d​ ​o​n​ ​t​h​i​s​ ​s​e​r​v​e​r​.
		 * @param {string} module
		 */
		moduleDisabled: RequiredParams<'module'>
	}
	modules: {
		auditLogs: {
			commands: {
			}
			events: {
				guildBanAdd: {
					embed: {
						/**
						 * U​s​e​r​ ​b​a​n​n​e​d
						 */
						title: string
						fields: {
							/**
							 * ❄​️​ ​V​i​c​t​i​m
							 */
							target: string
							/**
							 * ❄​️​ ​E​x​e​c​u​t​o​r
							 */
							executor: string
							/**
							 * ❄​️​ ​R​e​a​s​o​n
							 */
							reason: string
						}
					}
				}
				guildBanRemove: {
					embed: {
						/**
						 * U​s​e​r​ ​u​n​b​a​n​n​e​d
						 */
						title: string
						fields: {
							/**
							 * ❄​️​ ​B​l​e​s​s​e​d
							 */
							target: string
							/**
							 * ❄​️​ ​E​x​e​c​u​t​o​r
							 */
							executor: string
							/**
							 * ❄​️​ ​R​e​a​s​o​n
							 */
							reason: string
						}
					}
				}
				guildRoleCreate: {
					embed: {
						/**
						 * R​o​l​e​ ​_​_​{​r​o​l​e​N​a​m​e​}​_​_​ ​c​r​e​a​t​e​d
						 * @param {string} roleName
						 */
						title: RequiredParams<'roleName'>
						footer: {
							/**
							 * R​o​l​e​ ​c​r​e​a​t​e​d
							 */
							text: string
						}
						/**
						 * ❌​ ​+​{​d​e​n​i​e​d​C​o​u​n​t​}​ ​n​o​t​ ​g​r​a​n​t​e​d
						 * @param {number} deniedCount
						 */
						unassigned: RequiredParams<'deniedCount'>
					}
				}
				guildRoleDelete: {
					embed: {
						/**
						 * R​o​l​e​ ​_​_​{​r​o​l​e​N​a​m​e​}​_​_​ ​d​e​l​e​t​e​d
						 * @param {string} roleName
						 */
						title: RequiredParams<'roleName'>
						/**
						 * ❌​ ​+​{​d​e​n​i​e​d​C​o​u​n​t​}​ ​n​o​t​ ​g​r​a​n​t​e​d
						 * @param {number} deniedCount
						 */
						unassigned: RequiredParams<'deniedCount'>
						footer: {
							/**
							 * R​o​l​e​ ​d​e​l​e​t​e​d
							 */
							text: string
						}
					}
				}
				guildRoleUpdate: {
					embed: {
						/**
						 * R​o​l​e​ ​_​_​{​r​o​l​e​N​a​m​e​}​_​_​ ​u​p​d​a​t​e​d
						 * @param {string} roleName
						 */
						title: RequiredParams<'roleName'>
						footer: {
							/**
							 * R​o​l​e​ ​m​o​d​i​f​i​e​d
							 */
							text: string
						}
						fields: {
							roleChanged: {
								/**
								 * O​l​d​ ​n​a​m​e
								 */
								old: string
								/**
								 * N​e​w​ ​n​a​m​e
								 */
								'new': string
							}
							colorChanged: {
								/**
								 * O​l​d​ ​c​o​l​o​r
								 */
								old: string
								/**
								 * N​e​w​ ​c​o​l​o​r
								 */
								'new': string
							}
							/**
							 * M​e​n​t​i​o​n​n​a​b​l​e
							 */
							mentionable: string
							/**
							 * S​h​o​w​ ​s​e​p​a​r​a​t​e​l​y
							 */
							hoist: string
							/**
							 * M​a​n​a​g​e​d​ ​b​y​ ​D​i​s​c​o​r​d
							 */
							managed: string
						}
						/**
						 * ❌​ ​+​{​d​e​n​i​e​d​C​o​u​n​t​}​ ​n​o​t​ ​g​r​a​n​t​e​d
						 * @param {number} deniedCount
						 */
						unassigned: RequiredParams<'deniedCount'>
					}
				}
				guildMemberAdd: {
					embed: {
						/**
						 * <​a​:​p​i​k​a​H​i​:​9​6​0​8​7​2​4​7​6​7​1​8​5​5​1​0​7​0​>​ ​W​e​l​c​o​m​e​ ​t​o​ ​t​h​e​ ​s​e​r​v​e​r​ ​{​u​s​e​r​n​a​m​e​}​!
						 * @param {string} username
						 */
						title: RequiredParams<'username'>
						/**
						 * H​e​l​l​o​ ​a​n​d​ ​w​e​l​c​o​m​e​ ​t​o​ ​t​h​e​ ​s​e​r​v​e​r​!​ ​W​e​ ​h​o​p​e​ ​y​o​u​ ​w​i​l​l​ ​h​a​v​e​ ​a​ ​g​r​e​a​t​ ​t​i​m​e​ ​h​e​r​e​!​ ​A​n​d​ ​w​e​ ​w​i​l​l​ ​d​o​ ​o​u​r​ ​b​e​s​t​ ​t​o​ ​m​a​k​e​ ​i​t​ ​s​o​!
						 */
						description: string
						fields: {
							/**
							 * ❄​️​ ​A​c​c​o​u​n​t​ ​c​r​e​a​t​e​d
							 */
							created: string
						}
						footer: {
							/**
							 * M​e​m​b​e​r​ ​j​o​i​n​e​d
							 */
							text: string
						}
					}
				}
				guildMemberRemove: {
					embed: {
						/**
						 * W​e​a​k​l​i​n​g​s​ ​D​i​e​.​ ​B​i​g​ ​D​e​a​l​.
						 */
						description: string
						fields: {
							/**
							 * ❄​️​ ​M​e​m​b​e​r
							 */
							member: string
							/**
							 * ❄​️​ ​C​r​e​a​t​i​o​n
							 */
							creation: string
							/**
							 * ❄​️​ ​J​o​i​n​e​d
							 */
							joined: string
							/**
							 * ❄​️​ ​L​e​f​t
							 */
							left: string
						}
						footer: {
							/**
							 * M​e​m​b​e​r​ ​l​e​f​t
							 */
							text: string
						}
					}
				}
				guildMemberUpdate: {
					embed: {
						/**
						 * <​@​{​u​s​e​r​n​a​m​e​}​>​ ​h​a​s​ ​a​ ​n​e​w​ ​l​o​o​k​!
						 * @param {string} username
						 */
						description: RequiredParams<'username'>
						footer: {
							/**
							 * M​e​m​b​e​r​ ​m​o​d​i​f​i​e​d
							 */
							text: string
						}
						fields: {
							nickname: {
								/**
								 * O​l​d​ ​n​i​c​k​n​a​m​e
								 */
								old: string
								/**
								 * N​e​w​ ​n​i​c​k​n​a​m​e
								 */
								'new': string
							}
							roles: {
								/**
								 * O​l​d​ ​r​o​l​e​s
								 */
								old: string
								/**
								 * N​e​w​ ​r​o​l​e​s
								 */
								'new': string
							}
						}
					}
				}
				messageBulkDelete: {
					/**
					 * >​ ​<​@​{​i​d​}​>​:​ ​{​c​o​u​n​t​}​ ​m​e​s​s​a​g​e​s
					 * @param {number} count
					 * @param {string} id
					 */
					messages: RequiredParams<'count' | 'id'>
					embed: {
						/**
						 * {​a​m​o​u​n​t​}​ ​m​e​s​s​a​g​e​s​ ​d​e​l​e​t​e​d​ ​i​n​ ​<​#​{​c​h​a​n​n​e​l​I​d​}​>​
					​{​u​s​e​r​s​D​e​l​e​t​e​d​}
						 * @param {number} amount
						 * @param {string} channelId
						 * @param {string} usersDeleted
						 */
						description: RequiredParams<'amount' | 'channelId' | 'usersDeleted'>
						footer: {
							/**
							 * B​u​l​k​ ​d​e​l​e​t​i​o​n
							 */
							text: string
						}
					}
				}
				messageDelete: {
					embed: {
						/**
						 * M​e​s​s​a​g​e​ ​f​r​o​m​ ​<​@​{​u​s​e​r​I​d​}​>​ ​d​e​l​e​t​e​d​ ​i​n​ ​<​#​{​c​h​a​n​n​e​l​I​d​}​>​,​ ​[​s​h​o​w​ ​c​h​a​n​n​e​l​]​(​{​u​r​l​}​)
						 * @param {string} channelId
						 * @param {string} url
						 * @param {string} userId
						 */
						description: RequiredParams<'channelId' | 'url' | 'userId'>
						fields: {
							/**
							 * D​e​l​e​t​e​d​ ​m​e​s​s​a​g​e
							 */
							message: string
						}
						footer: {
							/**
							 * M​e​s​s​a​g​e​ ​d​e​l​e​t​e​d
							 */
							text: string
						}
					}
				}
				messageUpdate: {
					embed: {
						/**
						 * M​e​s​s​a​g​e​ ​f​r​o​m​ ​<​@​{​u​s​e​r​I​d​}​>​ ​e​d​i​t​e​d​ ​i​n​ ​<​#​{​c​h​a​n​n​e​l​I​d​}​>​,​ ​[​s​h​o​w​ ​m​e​s​s​a​g​e​]​(​{​u​r​l​}​)
						 * @param {string} channelId
						 * @param {string} url
						 * @param {string} userId
						 */
						description: RequiredParams<'channelId' | 'url' | 'userId'>
						fields: {
							/**
							 * O​l​d​ ​m​e​s​s​a​g​e
							 */
							oldMessage: string
							/**
							 * N​e​w​ ​m​e​s​s​a​g​e
							 */
							newMessage: string
						}
						footer: {
							/**
							 * M​e​s​s​a​g​e​ ​e​d​i​t​e​d
							 */
							text: string
						}
					}
				}
			}
			categories: {
				/**
				 * <​:​c​o​g​:​1​1​9​4​6​4​8​5​3​4​1​9​7​2​0​7​1​0​0​>​ ​G​e​n​e​r​a​l
				 */
				general: string
				/**
				 * <​:​m​e​m​b​e​r​s​:​1​1​9​4​5​7​0​0​7​8​4​4​9​0​5​7​8​6​3​>​ ​M​e​m​b​e​r​s​h​i​p
				 */
				membership: string
				/**
				 * <​:​e​v​e​n​t​:​1​1​9​4​5​7​0​0​7​4​9​3​8​4​1​3​0​8​6​>​ ​E​v​e​n​t​s
				 */
				events: string
				/**
				 * <​:​t​e​x​t​_​c​h​a​n​n​e​l​:​1​1​9​4​5​7​0​0​7​1​6​5​4​2​7​7​2​1​0​>​ ​T​e​x​t​ ​C​h​a​n​n​e​l
				 */
				textChannel: string
				/**
				 * <​:​v​o​i​c​e​_​c​h​a​n​n​e​l​:​1​1​9​4​5​6​9​5​1​2​4​6​1​2​8​7​5​6​4​>​ ​V​o​i​c​e​ ​C​h​a​n​n​e​l
				 */
				voiceChannel: string
				/**
				 * <​:​s​t​a​g​e​_​c​h​a​n​n​e​l​:​1​1​9​4​5​7​0​0​7​6​4​0​2​2​4​1​5​9​7​>​ ​S​t​a​g​e​ ​C​h​a​n​n​e​l
				 */
				stageChannel: string
				/**
				 * <​:​m​o​d​e​r​a​t​o​r​_​s​h​i​e​l​d​:​1​1​9​4​5​7​0​0​7​3​5​7​9​4​7​4​9​6​4​>​ ​A​d​v​a​n​c​e​d
				 */
				advanced: string
			}
		}
	}
}

export type TranslationFunctions = {
	errors: {
		/**
		 * You've got me puzzled there. Report this message to <@294916386072035328> (@adan_ea) and explain what you did to get it. It's not normal that you see this. But I still love you, you know <3
		 */
		unknown: () => LocalizedString
		/**
		 * Oh no, you don't have the permissions, too bad!
		 */
		userPermissions: () => LocalizedString
		/**
		 * This function is on cooldown. You can use it again <t:${cd}:R>.
		 */
		cooldown: (arg: { cd: number }) => LocalizedString
		/**
		 * I don't have the permissions to do that, sorry!
		 */
		botPermissions: () => LocalizedString
		/**
		 * The error is raised, but you haven't written it yet, smart ass.
		 */
		toDo: () => LocalizedString
		/**
		 * Hmm, it seems like I don't know this command.
		 */
		unknownCommand: () => LocalizedString
		/**
		 * Strange, strange, I don't know this server.
		 */
		guildNotFound: () => LocalizedString
		/**
		 * The {module} module is disabled on this server.
		 */
		moduleDisabled: (arg: { module: string }) => LocalizedString
	}
	modules: {
		auditLogs: {
			commands: {
			}
			events: {
				guildBanAdd: {
					embed: {
						/**
						 * User banned
						 */
						title: () => LocalizedString
						fields: {
							/**
							 * ❄️ Victim
							 */
							target: () => LocalizedString
							/**
							 * ❄️ Executor
							 */
							executor: () => LocalizedString
							/**
							 * ❄️ Reason
							 */
							reason: () => LocalizedString
						}
					}
				}
				guildBanRemove: {
					embed: {
						/**
						 * User unbanned
						 */
						title: () => LocalizedString
						fields: {
							/**
							 * ❄️ Blessed
							 */
							target: () => LocalizedString
							/**
							 * ❄️ Executor
							 */
							executor: () => LocalizedString
							/**
							 * ❄️ Reason
							 */
							reason: () => LocalizedString
						}
					}
				}
				guildRoleCreate: {
					embed: {
						/**
						 * Role __{roleName}__ created
						 */
						title: (arg: { roleName: string }) => LocalizedString
						footer: {
							/**
							 * Role created
							 */
							text: () => LocalizedString
						}
						/**
						 * ❌ +{deniedCount} not granted
						 */
						unassigned: (arg: { deniedCount: number }) => LocalizedString
					}
				}
				guildRoleDelete: {
					embed: {
						/**
						 * Role __{roleName}__ deleted
						 */
						title: (arg: { roleName: string }) => LocalizedString
						/**
						 * ❌ +{deniedCount} not granted
						 */
						unassigned: (arg: { deniedCount: number }) => LocalizedString
						footer: {
							/**
							 * Role deleted
							 */
							text: () => LocalizedString
						}
					}
				}
				guildRoleUpdate: {
					embed: {
						/**
						 * Role __{roleName}__ updated
						 */
						title: (arg: { roleName: string }) => LocalizedString
						footer: {
							/**
							 * Role modified
							 */
							text: () => LocalizedString
						}
						fields: {
							roleChanged: {
								/**
								 * Old name
								 */
								old: () => LocalizedString
								/**
								 * New name
								 */
								'new': () => LocalizedString
							}
							colorChanged: {
								/**
								 * Old color
								 */
								old: () => LocalizedString
								/**
								 * New color
								 */
								'new': () => LocalizedString
							}
							/**
							 * Mentionnable
							 */
							mentionable: () => LocalizedString
							/**
							 * Show separately
							 */
							hoist: () => LocalizedString
							/**
							 * Managed by Discord
							 */
							managed: () => LocalizedString
						}
						/**
						 * ❌ +{deniedCount} not granted
						 */
						unassigned: (arg: { deniedCount: number }) => LocalizedString
					}
				}
				guildMemberAdd: {
					embed: {
						/**
						 * <a:pikaHi:960872476718551070> Welcome to the server {username}!
						 */
						title: (arg: { username: string }) => LocalizedString
						/**
						 * Hello and welcome to the server! We hope you will have a great time here! And we will do our best to make it so!
						 */
						description: () => LocalizedString
						fields: {
							/**
							 * ❄️ Account created
							 */
							created: () => LocalizedString
						}
						footer: {
							/**
							 * Member joined
							 */
							text: () => LocalizedString
						}
					}
				}
				guildMemberRemove: {
					embed: {
						/**
						 * Weaklings Die. Big Deal.
						 */
						description: () => LocalizedString
						fields: {
							/**
							 * ❄️ Member
							 */
							member: () => LocalizedString
							/**
							 * ❄️ Creation
							 */
							creation: () => LocalizedString
							/**
							 * ❄️ Joined
							 */
							joined: () => LocalizedString
							/**
							 * ❄️ Left
							 */
							left: () => LocalizedString
						}
						footer: {
							/**
							 * Member left
							 */
							text: () => LocalizedString
						}
					}
				}
				guildMemberUpdate: {
					embed: {
						/**
						 * <@{username}> has a new look!
						 */
						description: (arg: { username: string }) => LocalizedString
						footer: {
							/**
							 * Member modified
							 */
							text: () => LocalizedString
						}
						fields: {
							nickname: {
								/**
								 * Old nickname
								 */
								old: () => LocalizedString
								/**
								 * New nickname
								 */
								'new': () => LocalizedString
							}
							roles: {
								/**
								 * Old roles
								 */
								old: () => LocalizedString
								/**
								 * New roles
								 */
								'new': () => LocalizedString
							}
						}
					}
				}
				messageBulkDelete: {
					/**
					 * > <@{id}>: {count} messages
					 */
					messages: (arg: { count: number, id: string }) => LocalizedString
					embed: {
						/**
						 * {amount} messages deleted in <#{channelId}>
					{usersDeleted}
						 */
						description: (arg: { amount: number, channelId: string, usersDeleted: string }) => LocalizedString
						footer: {
							/**
							 * Bulk deletion
							 */
							text: () => LocalizedString
						}
					}
				}
				messageDelete: {
					embed: {
						/**
						 * Message from <@{userId}> deleted in <#{channelId}>, [show channel]({url})
						 */
						description: (arg: { channelId: string, url: string, userId: string }) => LocalizedString
						fields: {
							/**
							 * Deleted message
							 */
							message: () => LocalizedString
						}
						footer: {
							/**
							 * Message deleted
							 */
							text: () => LocalizedString
						}
					}
				}
				messageUpdate: {
					embed: {
						/**
						 * Message from <@{userId}> edited in <#{channelId}>, [show message]({url})
						 */
						description: (arg: { channelId: string, url: string, userId: string }) => LocalizedString
						fields: {
							/**
							 * Old message
							 */
							oldMessage: () => LocalizedString
							/**
							 * New message
							 */
							newMessage: () => LocalizedString
						}
						footer: {
							/**
							 * Message edited
							 */
							text: () => LocalizedString
						}
					}
				}
			}
			categories: {
				/**
				 * <:cog:1194648534197207100> General
				 */
				general: () => LocalizedString
				/**
				 * <:members:1194570078449057863> Membership
				 */
				membership: () => LocalizedString
				/**
				 * <:event:1194570074938413086> Events
				 */
				events: () => LocalizedString
				/**
				 * <:text_channel:1194570071654277210> Text Channel
				 */
				textChannel: () => LocalizedString
				/**
				 * <:voice_channel:1194569512461287564> Voice Channel
				 */
				voiceChannel: () => LocalizedString
				/**
				 * <:stage_channel:1194570076402241597> Stage Channel
				 */
				stageChannel: () => LocalizedString
				/**
				 * <:moderator_shield:1194570073579474964> Advanced
				 */
				advanced: () => LocalizedString
			}
		}
	}
}

export type Formatters = {}
