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

/// <reference types="node" />
import * as fs from 'fs';
import * as path from 'path';
import sanitize from 'sanitize-filename';

import { logger } from '../../..';
import { SessionToken, TokenStore } from '../types';

export interface FileTokenStoreOptions {
  /**
   * Decode function to parse token file (Default `JSON.parse`) {@link defaultFileTokenStoreOptions}
   * @default `JSON.parse`
   */
  decodeFunction: (text: string) => any;

  /**
   * Encode function to save tokens (Default `JSON.stringify`)
   * @default `JSON.stringify`
   */
  encodeFunction: (data: any) => string;

  /**
   * Encoding used to read and save files
   * @default 'utf8'
   */
  encoding: BufferEncoding;

  /**
   * @default '.data.json'
   */
  fileExtension: string;

  /**
   * Folder path to store tokens
   * @default './tokens'
   */
  path: string;
}

export const defaultFileTokenStoreOptions: FileTokenStoreOptions = {
  decodeFunction: JSON.parse,
  encodeFunction: JSON.stringify,
  encoding: 'utf8',
  fileExtension: '.data.json',
  path: './tokens',
};

export class FileTokenStore implements TokenStore {
  protected options: FileTokenStoreOptions;

  constructor(options: Partial<FileTokenStoreOptions> = {}) {
    this.options = Object.assign(
      {},
      defaultFileTokenStoreOptions,
      options,
    ) as FileTokenStoreOptions;
  }

  /**
   * Resolve the path of file
   * @param sessionName Name of session
   * @returns Full path of token file
   */
  protected resolverPath(sessionName: string): string {
    const filename = sanitize(sessionName) + this.options.fileExtension;
    return path.resolve(process.cwd(), path.join(this.options.path, filename));
  }

  public async getToken(
    sessionName: string,
  ): Promise<SessionToken | undefined> {
    const filePath = this.resolverPath(sessionName);

    if (!fs.existsSync(filePath)) {
      return undefined;
    }

    const text = await fs.promises
      .readFile(filePath, {
        encoding: this.options.encoding,
      })
      .catch(() => null);

    if (!text) {
      return undefined;
    }

    try {
      return this.options.decodeFunction(text);
    } catch (error) {
      logger.debug(error);
      return undefined;
    }
  }

  public async setToken(
    sessionName: string,
    tokenData: SessionToken | null,
  ): Promise<boolean> {
    if (!tokenData) {
      return false;
    }

    if (!fs.existsSync(this.options.path)) {
      await fs.promises.mkdir(this.options.path, { recursive: true });
    }

    const filePath = this.resolverPath(sessionName);

    try {
      const text = this.options.encodeFunction(tokenData);

      await fs.promises.writeFile(filePath, text, {
        encoding: this.options.encoding,
      });
      return true;
    } catch (error) {
      logger.debug(error);
      return false;
    }
  }

  public async removeToken(sessionName: string): Promise<boolean> {
    const filePath = this.resolverPath(sessionName);

    if (!fs.existsSync(filePath)) {
      return false;
    }

    try {
      await fs.promises.unlink(filePath);
      return true;
    } catch (error) {
      logger.debug(error);
      return false;
    }
  }

  public async listTokens(): Promise<string[]> {
    if (!fs.existsSync(this.options.path)) {
      return [];
    }

    try {
      let files = await fs.promises.readdir(this.options.path);

      // Only sessions with same fileExtension
      files = files.filter((file) => file.endsWith(this.options.fileExtension));

      // Return name only
      files = files.map((file) =>
        path.basename(file, this.options.fileExtension),
      );

      return files;
    } catch (error) {
      logger.debug(error);
      return [];
    }
  }
}
