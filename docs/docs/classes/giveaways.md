# giveaways

Giveaways are a nice way to get your server hyped up! But with buttons?!! Here's how you can implement it!! [Example Bot](https://github.com/Nuggies-bot/giveaways-example)

## Methods

#### .Messages()
##### Setup custom messages in giveaways.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Client](https://discord.js.org/#/docs/main/stable/class/Client)                                  |             | null         | The discord.js Client object   |

<hr>

#### .create()
##### creates a giveaway with buttons.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| prize         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Prize                 |
| host          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord User ID                |
| winners       | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Giveaway Winners               |
| endAfter      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Ending Time           |
| requirements  | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Giveaway requirements          |
| channelID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID            |

<hr>

#### .gotoGiveaway()
##### sends the giveaway message link.

| **Parameter** | **Type**                                                                                            | **Default** | **Required** | **Description**                |
|:-------------:|:---------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| data          | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)   |             | True         | Mongoose Document              |

<hr>

#### .endByButton()
##### ends the giveaway with button.

| **Parameter** | **Type**                                                                                            | **Default** | **Required** | **Description**                |
|:-------------:|:---------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)   |             | True         | Discord Client                 |
| messageID     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   |             | True         | Discord message ID             |
| button        | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)   |             | True         | Discord Button interaction     |

<hr>

#### .end()
##### ends the giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| data          | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Mongoose Document              |
| giveawaymsg   | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |

<hr>

#### .reroll()
##### picks a new winner for the giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Client                 |
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
| client        | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Client                 |

<hr>

#### .drop()
##### creates a drop giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client        | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| channel       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |
| prize         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Prize                 |
| host          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord User ID                |

<hr>
