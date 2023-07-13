/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:24:06 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} InitMongoModel
 */
export type InitMongoModel = {
  _id?: MongoDB.ObjectId;
  sender?: string;
  receiver?: string;
  arb?: string;
  expires?: Date;
  memo?: string;
  ext_reference?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} InitRawModel
 */
export type InitRawModel = {
  sender?: string;
  receiver?: string;
  arb?: string;
  expires?: Date;
  memo?: string;
  ext_reference?: string;
  dac_id?: string;
  [key: string]: unknown;
};

