/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { EscrowsMongoModel, EscrowsRawModel } from './escrows.dto';

export type DataDocumentType = EscrowsMongoModel;

export type DataRawType = EscrowsRawModel;

export type EscrwWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_num?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long;
  present?: boolean;
  block_timestamp?: Date;
};

export type EscrwWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
