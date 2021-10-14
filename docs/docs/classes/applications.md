# Applications

Applications help you make your life easier with different types of applications you might have to handle!


## Methods

#### .addApplication()
##### Creates an application for which anyone can make a response.

| **Parameter**     | **Type**                                                                                          | **Default** | **Required** | **Description**          |
|:-----------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------:|
| guildID           | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Guild ID         |
| questions         | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)   |             | True         | Questions array          |
| name              | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Application name         |
| emoji             | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | null        | False        | Dropdown emoji ID        |
| channel           | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID       |
| description       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Dropdown description     |
| label             | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Dropdown label           |
| maxApps           | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Amount of responses      |
| cooldown          | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Cooldown for re-applying |
| responseChannelID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID       |

<hr>

#### .deleteapplication()
##### Deletes an application for the guild.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**  |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------:|
| guildID       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Guild ID |
| name       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Name of application |

<hr>

#### .getDropdownComponent()
##### Returns the dropdown menu with each and every application set in the guild.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**  |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------:|
| guildID       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Guild ID |


#### .create()
##### Creates/Initializes the application system for the guild.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| guildID       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Guild ID               |
| content       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message / MessageEmbed |
| client        | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client                 |

<hr>

#### .getDataByGuild()
##### Returns the data for the guild.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**  |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------:|
| guildID       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Guild ID |

<hr>

#### .setup()
##### A pre-made setup template for setting up applications

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**        |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------------:|
| message       | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |             | True         | Discord Message object |

## Example

#### [Example Bot](https://github.com/Nuggies-bot/applications-example)