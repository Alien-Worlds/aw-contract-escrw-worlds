/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:23:04 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { EscrowsMongoModel, EscrowsRawModel } from './escrows.dto';

export type DataDocumentType =
  | EscrowsMongoModel;

export type DataRawType =
  | EscrowsRawModel;


export type EscrwWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
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
