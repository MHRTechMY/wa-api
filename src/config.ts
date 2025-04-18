import { ServerOptions } from './types/ServerOptions';

export default {
  secretKey: 'THISISMYSECRETKEY',
  host: 'http://localhost',
  port: 21465,
  deviceName: 'chromium (WPPConnect)',
  poweredBy: 'chromium',
  startAllSession: true,
  tokenStoreType: 'file',
  maxListeners: 10,
  customUserDataDir: './usersData/',
  webhook: {
    url: null,
    autoDownload: false,
    uploadS3: false,
    allUnreadOnStart: false,
    listenAcks: false,
    onIncomingCall: true,
    onLabelUpdated: false,
    onParticipantsChanged: true,
    onPollResponse: true,
    onPresenceChanged: false,
    onReactionMessage: true,
    onRevokedMessage: true,
    onSelfMessage: true,
    readMessage: false,
    ignore: [],
  },
  websocket: {
    autoDownload: false,
    uploadS3: false,
  },
  chatwoot: {
    sendQrCode: true,
    sendStatus: true,
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 14,
  },
  log: {
    level: 'silly', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file'],
  },
  createOptions: {
    // whatsappVersion: '2.3000.102x',
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
      '--window-position=-10000,-10000',
    ],
    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with SSL
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null,
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  db: {
    mongodbCollection: 'wppconnect',
    mongodbDatabase: 'tokens',
    mongodbHost: 'localhost',
    mongodbPort: 27017,
    mongodbUser: 'user',
    mongodbPassword: 'password',
    mongoIsRemote: false,
    mongoURLRemote: 'mongodb://user:password@localhost:27017/',
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: 'password',
    redisDb: 0,
    redisPrefix: 'wppconnect-tokens',
  },
  aws_s3: {
    access_key_id: null,
    secret_key: null,
    defaultBucketName: 'mhrtech-wppconnect',
    endpoint: 'minio.local',
    region: '0' as any,
    forcePathStyle: true,
  },
} as unknown as ServerOptions;
