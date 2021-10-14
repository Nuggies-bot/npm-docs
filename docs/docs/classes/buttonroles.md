# Button Roles

Button roles are a newer way to hand out roles in a server, instead of reactions. The bot generates Discord's new buttons and hands out the specific roles accordingly!

## Methods

#### .addrole()
##### Adds role to button role manager.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description** |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:---------------:|
| color         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | grey        | False        | Button color    |
| label         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Button label    |
| emoji         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Button emoji ID |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID |

<hr>

#### .create()
##### creates the button roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |             | True         | Discord Message object         |
| content       | [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) / [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Message content / MessageEmbed |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |
| channelID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |

<hr>

#### .edit()
##### edits the button roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |             | True         | Discord Message object         |
| content       | [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)/[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Message content / MessageEmbed |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |

<hr>

#### .delete()
##### deletes the button roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**        |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------------:|
| message       | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |             | True         | Discord Message object |

## Properties

#### .roles
##### The roles stored in button roles manager

| **Type** | **Description**                                                    |:--------:|:------------------------------------------------------------------:|
| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | The array of all the roles to be shown in the button roles message |

## Example

#### [Example Bot](https://github.com/Nuggies-bot/buttonroles-example)