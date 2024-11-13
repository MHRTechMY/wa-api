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

/**
 * Session token of WhatsApp to authenticate the web interface
 * ```typescript
 * // Example of SessionToken
 * {
 *   WABrowserId: '"UnXjH....."',
 *   WASecretBundle: '{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}',
 *   WAToken1: '"0i8...."',
 *   WAToken2: '"1@lPpzwC...."',
 * }
 * ```
 */
export interface SessionToken {
  WABrowserId: string;
  WAToken1: string;
  WAToken2: string;
  WASecretBundle: string;
}

export interface TokenStore<T extends SessionToken = SessionToken> {
  /**
   * Return the session data if exists
   * @param sessionName Name of session
   */
  getToken(sessionName: string): Promise<T | undefined> | T | undefined;

  /**
   * Store the session token data
   * @param sessionName Name of session
   * @param tokenData Session token data
   */
  setToken(
    sessionName: string,
    tokenData: T | null,
  ): Promise<boolean> | boolean;

  /**
   * Remove the session
   * @param sessionName Name of session
   * @returns Token was removed
   */
  removeToken(sessionName: string): Promise<boolean> | boolean;

  /**
   * A liste of avaliable sessions
   */
  listTokens(): Promise<string[]> | string[];
}
