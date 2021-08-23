# buttonroles

Button roles are a newer way to hand out roles in a server, instead of reactions. The bot generates Discord's new buttons and hands out the specific roles accordingly! [Example Bot](https://github.com/Nuggies-bot/buttonroles-example)

## Methods

#### .addrole()
##### adds the button roles.

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
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| content       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message / MessageEmbed |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |
| channelID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |

<hr>

#### .edit()
##### edits the button roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| content       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message / MessageEmbed |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |

<hr>

#### .delete()
##### deletes the button roles.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**        |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------------:|
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object |
