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
import { Request, Response } from 'express';

import { unlinkAsync } from '../util/functions';

function returnError(req: Request, res: Response, error: any) {
  req.logger.error(error);
  res
    .status(500)
    .json({ status: 'Error', message: 'Error sending status', error: error });
}

async function returnSucess(res: Response, data: any) {
  res.status(201).json({ status: 'success', response: data, mapper: 'return' });
}

export async function sendTextStorie(req: Request, res: Response) {
  /**
    #swagger.tags = ["Status"]
     #swagger.autoBody = false
     #swagger.security = [{ "bearerAuth": [] }]
     #swagger.parameters["session"] = { schema: '60123456789' }
     #swagger.parameters["obj"] = {
      in: 'body',
      schema: {
        text: 'My new storie',
        options: { backgroundColor: '#0275d8', font: 2},
      }
     }
     #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              text: { type: 'string' },
              options: { type: 'object' },
            },
            required: ['text'],
          },
          examples: {
            'Default': {
              value: {
                text: 'My new storie',
                options: { backgroundColor: '#0275d8', font: 2},
              },
            },
          },
        },
      },
    }
   */
  const { text, options } = req.body;
  if (!text)
    res.status(401).send({
      message: 'Text was not informed',
    });
  try {
    const results: any = [];
    results.push(await req.client.sendTextStatus(text, options));
    if (results.length === 0)
      res.status(400).json('Error sending text story');
    returnSucess(res, results);
  } catch (error) {
    returnError(req, res, error);
  }
}

export async function sendImageStorie(req: Request, res: Response) {
  /**
    #swagger.tags = ["Status"]
     #swagger.autoBody = false
     #swagger.security = [{ "bearerAuth": [] }]
     #swagger.parameters["session"] = { schema: '60123456789' }
     #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              path: { type: 'string' },
            },
            required: ['path'],
          },
          examples: {
            'Default': {
              value: {
                path: 'Path of your image',
              },
            },
          },
        },
      },
    }
   */
  const { path } = req.body;
  if (!path && !req.file)
    res.status(401).send({
      message: 'Sending the image is mandatory',
    });
  const pathFile = path || req.file?.path;
  try {
    const results: any = [];
    results.push(await req.client.sendImageStatus(pathFile));
    if (results.length === 0)
      res.status(400).json('Error sending image story');
    returnSucess(res, results);
  } catch (error) {
    returnError(req, res, error);
  }
}

export async function sendVideoStorie(req: Request, res: Response) {
  /**
    #swagger.tags = ["Status"]
     #swagger.autoBody = false
     #swagger.security = [{ "bearerAuth": [] }]
     #swagger.parameters["session"] = { schema: '60123456789' }
     #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              path: { type: "string" }
            },
            required: ["path"]
          },
          examples: {
            "Default": {
              value: {
                path: "Path of your video"
              }
            }
          }
        }
      }
    }
   */
  const { path } = req.body;
  if (!path && !req.file)
    res.status(401).send({
      message: 'Sending the Video is mandatory',
    });
  const pathFile = path || req.file?.path;
  try {
    const results: any = [];
    results.push(await req.client.sendVideoStatus(pathFile));
    if (results.length === 0)
      res.status(400).json('Error sending video story');
    if (req.file) await unlinkAsync(pathFile);
    returnSucess(res, results);
  } catch (error) {
    returnError(req, res, error);
  }
}
