# dropdownroles

dropdown roles are a newer way to hand out roles in a server, instead of reactions, the bot generates discord's new dropdown menus and hands out the specific roles accordingly! [Example Bot](https://github.com/Nuggies-bot/dropdown-roles-example)

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
| client        | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| content       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message / MessageEmbed |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |
| channelID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |
