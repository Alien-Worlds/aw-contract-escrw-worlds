/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:28 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { ApproveMongoModel, ApproveRawModel } from './approve.dto';
import { CancelMongoModel, CancelRawModel } from './cancel.dto';
import { CleanMongoModel, CleanRawModel } from './clean.dto';
import { DisapproveMongoModel, DisapproveRawModel } from './disapprove.dto';
import { DisputeMongoModel, DisputeRawModel } from './dispute.dto';
import { InitMongoModel, InitRawModel } from './init.dto';
import { RefundMongoModel, RefundRawModel } from './refund.dto';
import { TransferMongoModel, TransferRawModel } from './transfer.dto';

export type DataDocumentType =
  | ApproveMongoModel
  | CancelMongoModel
  | CleanMongoModel
  | DisapproveMongoModel
  | DisputeMongoModel
  | InitMongoModel
  | RefundMongoModel
  | TransferMongoModel;

export type DataRawType =
  | ApproveRawModel
  | CancelRawModel
  | CleanRawModel
  | DisapproveRawModel
  | DisputeRawModel
  | InitRawModel
  | RefundRawModel
  | TransferRawModel;

export type EscrwWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_num?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  recv_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type EscrwWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};
