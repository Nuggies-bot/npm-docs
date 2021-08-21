# applications

Applications help you make your life easier with different types of applications you might have to handle! [Example Bot](https://github.com/Nuggies-bot/applications-example)


## Methods

#### .addApplication()

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
