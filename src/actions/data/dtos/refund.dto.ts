/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:28 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RefundMongoModel
 */
export type RefundMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RefundRawModel
 */
export type RefundRawModel = {
  key?: string;
  dac_id?: string;
  [key: string]: unknown;
};

