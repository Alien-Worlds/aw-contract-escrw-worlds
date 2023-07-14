/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:51:01 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DisputeMongoModel
 */
export type DisputeMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DisputeRawModel
 */
export type DisputeRawModel = {
  key?: string;
  dac_id?: string;
  [key: string]: unknown;
};

