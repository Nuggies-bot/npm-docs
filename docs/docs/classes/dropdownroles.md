# Dropdown Roles

dropdown roles are a newer way to hand out roles in a server, instead of reactions, the bot generates discord's new dropdown menus and hands out the specific roles accordingly!

## Methods

#### .addrole()
##### adds the dropdown roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description** |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:---------------:|
| label         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Button label    |
| emoji         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Button emoji ID |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID |

<hr>

#### .create()
##### creates the dropdown roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client       | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client object         |
| content      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)/[MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) |             | True         | Discord MessageEmbed object or string |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |
| channelID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |
| type     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Type of drop-down roles, "single" or "multiple" |
| min     | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Min values per drop-down menu |
| max     | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Max values per drop-down menu  |

## Properties

#### .roles
##### The roles stored in drop-down roles manager

| **Type** | **Description**                                                    |:--------:|:------------------------------------------------------------------:|
| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | The array of all the roles to be shown in the button roles message |

## Example

#### [Example Bot](https://github.com/Nuggies-bot/dropdown-roles-example)