## 2.8.6 (2025-03-29)
### Bug Fixes
- **deps:** update dependency @wppconnect-team/wppconnect to ^1.36.4
---
## 2.8.5 (2025-03-27)
### Bug Fixes
- **deps:** update dependency @wppconnect-team/wppconnect to ^1.36.3
---
## 2.8.4 (2025-03-26)
### Bug Fixes
- **deps:** update dependency @wppconnect-team/wppconnect to ^1.36.2
---
## 2.8.3 (2025-01-09)
### Bug Fixes
- Fixed build errors
---
## 2.8.1 (2024-10-30)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.35.1
---
## 2.8.0 (2024-10-29)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.34.2
- Fixed not read QRCode when starting a session
- Improvement on set close session when timeout error
### Features
- Added support for send message to [@lid](https://github.com/lid)
---
## 2.7.0 (2024-09-09)
### Bug Fixes
- Compatibility for buttons (v3)
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.34.0
- Fixed docs Improvement docs for delete-message
---
## 2.6.0 (2024-08-05)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.33.0
### Features
- Added login by code support
---
## 2.5.2 (2024-06-24)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.32.3
---
## 2.5.1 (2024-06-18)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.32.2
---
## 2.5.0 (2024-06-13)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.32.0
---
## 2.4.6 (2024-06-12)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.31.1
---
## 2.4.5 (2024-06-11)
---
## 2.4.4 (2024-05-04)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.30.3
---
## 2.4.3 (2024-04-25)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.30.2
---
## 2.4.2 (2024-03-28)
### Bug Fixes
- Fixed DockerFile
---
## 2.4.1 (2024-03-12)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.30.1
- Fixed return for group controller
---
## 2.4.0 (2024-01-26)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.29.0
- Fixed autoDownload function
- Fixed forward-messages route
- Fixed get bussiness products
- Fixed payload get-group-members in docs
- Replaced ts-node with tsx
### Features
- Added more params to deleteMessage
- Added support for send newsletter message
---
## 2.3.0 (2023-11-15)
### Bug Fixes
- **config**: autoDownload and UploadS3 in websocket
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.28.3
- Fixed docs for get business profile products
- Fixed docs for send-list-message
- Fixed docs for send-message
- Fixed forwardMessage function
- Fixed getOrderbyMsg function
### Features
- Added '/common-groups' router
- Added '/edit-message' router
- Added 'send-order-message' router
- Added newsletter functions and routes
---
## 2.2.5 (2023-08-27)
### Bug Fixes
- Added session in qrCode webhook
- **BREAKING CHANGE**: Refactor file uploads for aws-s3
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.28.0
- Fixed changePrivacyGroup function
- Fixed get profile pic for groups
- Fixed image rendering issue in Chatwoot
- Fixed sendFile function
- Fixed setGroupProfilePic function
- Fixed take-screenshot router
- Fixed types and bug fixed on aws
- Fixed variable s3 error
- Improvement in findConversation on chatWoot
- Improvement on autoDownload function
- Removed webhook default on start-session
- version image alpine
### Features
- add prometheus instrumentation
- Added dynamic device name
- Added onSelfMessage event for Webhook
- Added option to set endpoint on s3
- Added option to set linkpreview
---
## 2.2.4 (2023-06-05)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.27.2
- Fixed deps for deploy on Docker containers
---
## 2.2.3 (2023-06-05)
### Bug Fixes
- Removed clearsession on route 'close-session'
- Fixed error on awsBucketName not exists
---
## 2.2.2 (2023-06-04)
### Bug Fixes
- Upgrade @wppconnect-team/wppconnect@1.27.1
---
## 2.2.1 (2023-06-02)
### Bug Fixes
- Fixed logout sesseion
---
## 2.2.0 (2023-06-02)
### Bug Fixes
- Deprecated all-groups route
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.27.0
### Features
- Added community routes
- Added route list-chats
---
## 2.1.2 (2023-06-01)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.26.0
---
## 2.1.1 (2023-06-01)
---
## 2.1.0 (2023-06-01)
### Bug Fixes
- added auto generate swager docs
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.25.0
- Improvement delete data on logout session
- **modules**: hide yarn files
- Remove unnecessary data
- Upgrade node version of auto release
### Features
- Added more options to chatwoot config
- Added onUpdateLabel event in webhook
- Added restore and backup routes
- Added route all-chats-archived, clear-session-data, edit-business-profile, get-platform-from-message, set-limit, take-screenshot
- Subject Possibility to parameterize the AWS Bucket and the File Walk by Session
---
## 2.0.1 (2023-04-14)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.23.2
- Fixed error on cors Socket.IO
- Fixed error on get-qr-code when client is null
---
## 2.0.0 (2023-04-03)
### Bug Fixes
- Added support to change default lib logger
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.23.1
- Fixed chat-by-id router
- Fixed default log config
- Fixed error swagger file not found
- Fixed session on webhook status-find
- Fixed warning for aws-s3
---
## 1.8.5 (2023-03-13)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.23.0
- Don't clear the session by defaut on close
- Fixed edit-collection route
- Fixed remove-product-image route
### Features
- add create product route
---
## 1.8.4 (2023-02-19)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.22.0
---
## 1.8.3 (2023-02-03)
### Bug Fixes
- fixing set-cart-enable route
### Features
- Added send-catalog-link feature
---
## 1.8.2 (2023-01-13)
### Bug Fixes
- Fixed send message to groups
### Features
- Added onRevokedMessage event webhook
- Improvements on return request
---
## 1.8.1 (2022-12-28)
### Bug Fixes
- Fixed phone number validate
- Fixed return on create groups
---
## 1.8.0 (2022-12-15)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.20.0
### Features
- Added reactions and poll functions and events
---
## 1.7.4 (2022-12-12)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.19.2
- Fixed return undefined on sendListMsg
---
## 1.7.3 (2022-12-03)
### Bug Fixes
- Fixed send image with caption
---
## 1.7.2 (2022-11-18)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.19.1
---
## 1.7.1 (2022-11-02)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.19.0
- Fixed undefined urlcode on start session
---
## 1.7.0 (2022-11-02)
### Bug Fixes
- Fixed error on getQrCode and sessionState
- Fixed send location
---
## 1.6.4 (2022-10-20)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.18.1
- Fixed error on numberExists
---
## 1.6.3 (2022-10-10)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.17.1
- **message**: fix sendFileFromBase64 with options
---
## 1.6.2 (2022-08-09)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.16.1
- Include phone param on get-messages
- remove unused imports
- req.client.close is not a function
- WppConnect-server version on start
### Features
- Added onLoadingScreen messages
- Added router clear-all-chats
---
## 1.6.1 (2022-08-05)
### Bug Fixes
- Check session isConnected
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.16.0
- Device not connected error
- Error on delete message group
- Receive files on set group profile pic
- Send file image on sendImageStorie
- Swagger docs for typing
### Features
- Added router to set recording
---
## 1.6.0 (2022-07-20)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.15.0
- Swagger docs typos fix
### Features
- Added routes manage-labels
- Added SendImageStorie, SendVideoStorie, sendTextStorie
- Event onReactionMessage and SetGroup ProfilePic
- Route SendSticker and SendSticker as GIF
- Send Reaction to Message
---
## 1.5.0 (2022-07-12)
### Bug Fixes
- **message**: fix deprecated sendFileFromBase64
- send file name on send-file-base64 and docs fix
### Features
- Added archive-all-chats router
- Delete all chats
---
## 1.4.0 (2022-06-29)
### Bug Fixes
- Archive chat malforming and docs
- Change router to profile pic, similar lib
- Correct path to download stickers
- Mark unseen error
- Remove unnecessary var
- Send buttons list sections
### Features
- Socket emit on events
- Added reject call router
- Send List Message
---
## 1.3.4 (2022-06-20)
### Bug Fixes
- **deps**: update dependency @wppconnect-team/wppconnect to ^1.14.2
- Fixed function to load messages
- Fixed sendVoice and updated the docs
### Features
- New version of LIB
---
## 1.3.3 (2022-06-01)
### Features
- New version of LIB
---
## 1.3.2 (2022-05-31)
### Bug Fixes
- Fixed send-buttons endpoint
### Features
- Added customUserDataDir by default to config.json
- New version of LIB
---
## 1.3.1 (2022-05-10)
### Features
- Updated WPPConnect library
---
## 1.3.0 (2022-05-10)
### Features
- Added options for send-message route
- Updated all packages
---
## 1.2.0 (2022-04-25)
### Features
- New version of LIB
---
## 1.1.23 (2022-03-13)
### Features
- New version of LIB
---
## 1.1.22 (2022-03-07)
### Bug Fixes
- Fixed QRCode sending for ChatWoot
### Features
- New version of LIB
---
## 1.1.21 (2022-02-24)
### Features
- New version of LIB
---
## 1.1.20 (2022-01-23)
### Bug Fixes
- fixed error occurred when archiving chats, if there are no chats
- mongodbTokenStory update token
- treatment for decryptFile
### Features
- New version of LIB
- set maxListeners
---
## 1.1.19 (2022-01-21)
### Bug Fixes
- Fix clearChat function
- Fix deleteChat function
- Fix send media functions
- Fix sendSeen function
### Features
- New version of LIB
---
## 1.1.18 (2022-01-17)
### Bug Fixes
- login after disconnected from mobile
---
## 1.1.17 (2022-01-16)
### Features
- New version of LIB
---
## 1.1.16 (2022-01-14)
### Features
- New version of LIB
---
## 1.1.15 (2022-01-09)
### Features
- New version of LIB
---
## 1.1.14 (2021-12-21)
### Bug Fixes
- lint
---
## 1.1.13 (2021-12-09)
### Bug Fixes
- lint
### Features
- get host phone number
- New version of LIB
---
## 1.1.12 (2021-12-09)
### Features
- New version of LIB
---
## 1.1.11 (2021-11-16)
### Bug Fixes
- lint
- sendImage bug
- sendVoice name
### Features
- New version of LIB
---
## 1.1.10 (2021-11-12)
### Features
- New version of LIB
---
## 1.1.9 (2021-11-08)
### Features
- New version of LIB
---
## 1.1.8 (2021-11-08)
### Bug Fixes
- startSession
- **Dev**: Fixed error when loading token by redis
- chatwoot
### Features
- Customuserdatadir not required
- Change Name Session of the device
- save UserDataDir for multi device
### Reverts
- revert "changeToMyWppconnectVersion"
---
## 1.1.7 (2021-10-21)
### Bug Fixes
- Lint correction.
- lint
### Features
- Added name in config.json
- Added number on config.json
- New version of LIB
---
## 1.1.6 (2021-10-13)
### Bug Fixes
- block/unblock contact
### Features
- New version of LIB
---
## 1.1.5 (2021-10-01)
### Bug Fixes
- Release: Fixed the Redis webhook that was overwhelming
### Features
- Added Endpoint Healthz
- Endpoint UNHEALTHY Added
---
## 1.1.4 (2021-09-22)
### Bug Fixes
- Incomingcall added
- webhookUrl
### Features
- New version of LIB
- **Release**: Implemented method for sending buttons list
- redisPrefix
- removeRedisPrefix
- **depsDev**: AddPrefixRedis
---
## 1.1.3 (2021-08-13)
### Features
- change privacy group
- forward messages
- group invite link
- pin chat
- sendMentioned
---
## 1.1.2 (2021-08-11)
### Bug Fixes
- chatwoot multiple inbox
- Inbox of chatwoot added
- many fix
---
## 1.1.1 (2021-08-06)
### Features
- added form-data
- New version of LIB
---
## 1.1.0 (2021-08-04)
### Bug Fixes
- changes requested in the validation of
- bug to send messages to groups
- chatwoot
- Commit improvements
- Lint corrections
- Small standard adjustments
- Receive from Chatwoot with client disconnected
- version 2 20210719
### Features
- chatwoot
---
## 1.0.3 (2021-07-15)
### Features
- onParticipantsChanged webhook added
---
## 1.0.2 (2021-07-14)
### Bug Fixes
- Tokenstore Mongo and Redis was increased
- ForwardMessages To Groups
- PeerDepandencies and Config Optimized
### Features
- Send the contact name by vcard
- New version of LIB
---
## 1.0.1 (2021-06-13)
### Bug Fixes
- Archive only unarchived chats
- Fixed to the main js file input
