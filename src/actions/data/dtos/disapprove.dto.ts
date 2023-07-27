/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:28 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DisapproveMongoModel
 */
export type DisapproveMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: string;
  disapprover?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DisapproveRawModel
 */
export type DisapproveRawModel = {
  key?: string;
  disapprover?: string;
  dac_id?: string;
  [key: string]: unknown;
};

