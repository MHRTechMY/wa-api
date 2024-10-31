/*
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import swaggerAutogen from 'swagger-autogen';

import config from './config';

const outputFile = './src/swagger.json';
const endpointsFiles = ['./src/routes/index.ts'];

const doc = {
  info: {
    version: '2.8.1',
    title: 'WPPConnect API Rest',
    description:
      'Welcome to the wppconnect-server API documentation. This API provides a set of endpoints to interact with the wppconnect-server application, allowing you to build integrations and automate interactions with WhatsApp.',
  },
  host: `${config.host}:${config.port}`,
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  tags: [
    {
      name: 'Auth',
      description: 'Manages authentication operations',
    },
    {
      name: 'Profile',
      description:
        'Manages user profile-related operations, such as retrieving and updating profile information',
    },
    {
      name: 'Contacts',
      description:
        'Handles operations related to contacts, such as managing contact lists, adding or removing contacts, and retrieving contact information.',
    },
    {
      name: 'Chats',
      description:
        'Manages chat-related operations, such as archiving, clearing, and deleting chats',
    },
    {
      name: 'Messages',
      description:
        'Handles message-related operations, including sending, receiving, and managing messages',
    },
    {
      name: 'Status',
      description:
        'Handles operations related to status stories, such as viewing, updating, and managing status stories',
    },
    {
      name: 'Groups',
      description:
        'Manages operations related to WhatsApp groups, such as creating, modifying, and managing group settings',
    },
    {
      name: 'Community',
      description:
        'Manages communities operations, such as creating, modifying, and deleting communities',
    },
    {
      name: 'Newsletter',
      description:
        'Handles WhatsApp Channel operations such as creating, modifying, deleting channels',
    },
    {
      name: 'Labels',
      description:
        'Manages labels or tags associated with chats or messages for organization and categorization purposes',
    },
    {
      name: 'Catalogs',
      description:
        'Handles operations related to catalogs and business-related functionalities, such as managing product catalogs and business information.',
    },
    {
      name: 'Misc',
      description:
        'Handles miscellaneous operations that do not fit into other specific categories',
    },
  ],
  definitions: {},
  components: {
    '@schemas': {
      session: {
        type: 'string',
        schema: '60123456789',
      },
    },
  },
};

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
