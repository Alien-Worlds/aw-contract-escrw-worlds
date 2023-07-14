/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:23:04 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CleanMongoModel
 */
export type CleanMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CleanRawModel
 */
export type CleanRawModel = {
  dac_id?: string;
  [key: string]: unknown;
};

