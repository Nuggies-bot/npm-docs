# giveaways

Giveaways are a nice way to get your server hyped up! but with buttons?!! Here's how you can implement it!! [Example Bot](https://github.com/Nuggies-bot/giveaways-example)

## Methods

#### .create()
##### creates a giveaway with buttons.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| prize         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Prize                 |
| host          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord User ID                |
| winners       | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |             | True         | Giveaway Winners               |
| endAfter      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway Ending Time           |
| requirements  | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Giveaway requirements          |
| channel       | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Channel ID             |

<hr>

#### .edit()
##### edits the giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object         |
| content       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message / MessageEmbed |
| role          | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |             | True         | Discord Role ID                |


#### .delete()
##### deletes the giveaway.

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**        |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:----------------------:|
| message       | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |             | True         | Discord Message object |