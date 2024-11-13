/*
 * Copyright 2024 WPPConnect Team
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
 * See the License for the specific language governing permclearSessionissions and
 * limitations under the License.
 */
import config from '../../../config';
import mongoose from '../../db/mongodb/db';

const Token =
  config.tokenStoreType === 'mongodb'
    ? mongoose.model(
        'Token',
        new mongoose.Schema({
          WABrowserId: String,
          WASecretBundle: String,
          WAToken1: String,
          WAToken2: String,
          webhook: String,
          config: String,
          sessionName: String,
        }),
      )
    : null;

export default Token;
