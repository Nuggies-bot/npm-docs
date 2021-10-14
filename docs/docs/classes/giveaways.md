# Giveaways

Giveaways are a nice way to get your server hyped up! But with buttons?!! Here's how you can implement it!! [Example Bot](https://github.com/Nuggies-bot/giveaways-example)

## Methods

#### .create()
##### creates a giveaway with buttons.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client       | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client object        |
| prize         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Prize                 |
| host          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord User ID                |
| winners       | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Giveaway Winners               |
| endAfter      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Ending Time           |
| requirements  | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway requirements          |
| channelID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |

<hr>

#### .startTimer()
##### starts the giveaway timer.

| **Parameter** | **Type**                                                                                            | **Default** | **Required** | **Description**                |
|:-------------:|:---------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Message](https://discord.js.org/#/docs/main/stable/class/Message)   |             | True         | Discord Message object         |
| data          | [Document](https://mongoosejs.com/docs/api/document.html)   |             | True         | Mongoose Document              |
| instant       | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | false       | False        | Instant giveaway start         |

<hr>

#### .gotoGiveaway()
##### sends the giveaway message link.

| **Parameter** | **Type**                                                                                            | **Default** | **Required** | **Description**                |
|:-------------:|:---------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| data          | [Document](https://mongoosejs.com/docs/api/document.html)   |             | True         | Mongoose Document              |

<hr>

#### .endByButton()
##### ends the giveaway with button.

| **Parameter** | **Type**                                                                                            | **Default** | **Required** | **Description**                |
|:-------------:|:---------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Client](https://discord.js.org/#/docs/main/stable/class/Client)   |             | True         | Discord Client                 |
| messageID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   |             | True         | Discord message ID             |
| button        | [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction)   |             | True         | Discord Button interaction     |

<hr>

#### .end()
##### Ends the giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |             | True         | Discord Message object         |
| data          | [Document](https://mongoosejs.com/docs/api/document.html) |             | True         | Mongoose Document              |
| giveawaymsg   | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |             | True         | Discord Message object         |

<hr>

#### .reroll()
##### picks a new winner for the giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client                 |
| messageID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord message ID             |

<hr>

#### .getByMessageID()
##### get the giveaway from mongoose by message id.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| messageID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord message ID             |

<hr>

#### .startAgain()
##### starts the giveaway again.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client                 |

<hr>

#### .drop()
##### creates a drop giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client object          |
| channelID       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |
| prize         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Prize                 |
| host          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord User ID                |

<hr>