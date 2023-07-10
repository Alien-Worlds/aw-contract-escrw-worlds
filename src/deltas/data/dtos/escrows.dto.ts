/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:01 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} EscrowsMongoModel
 */
export type EscrowsMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: string;
  sender?: string;
  receiver?: string;
  arb?: string;
  receiver_pay?: ExtendedAssetMongoModel;
  arbitrator_pay?: ExtendedAssetMongoModel;
  memo?: string;
  expires?: Date;
  disputed?: boolean;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} EscrowsRawModel
 */
export type EscrowsRawModel = {
  key?: string;
  sender?: string;
  receiver?: string;
  arb?: string;
  receiver_pay?: ExtendedAssetRawModel;
  arbitrator_pay?: ExtendedAssetRawModel;
  memo?: string;
  expires?: Date;
  disputed?: boolean;
  [key: string]: unknown;
};

