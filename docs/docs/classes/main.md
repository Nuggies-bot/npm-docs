# Main functions

These are utility functions of the package

## Methods

#### .connect()
##### Connects to database

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| mongoURI    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |           | True            | The MongoDB URI to authenticate |

#### .handleInteractions()
##### Handles interactions(button clicks, drop-down clicks) by user

| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client       | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |             | True         | Discord Client                 |

#### .Messages()
##### Makes message content customisable
| **Parameter** | **Type**                                                                                          | **Default** | **Required** | **Description**                |
|:-------------:|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------:|:------------------------------:|
| client       | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |            | True         | Discord Client
| options      | [MessageOptions](https://google.com) | {}          | False         | The custom message options         |