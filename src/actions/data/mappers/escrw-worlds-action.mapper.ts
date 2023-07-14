/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:23:04 GMT
 */


import { 
  Approve,
  Cancel,
  Clean,
  Disapprove,
  Dispute,
  Init,
  Refund,
  Transfer,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { ApproveMongoMapper, ApproveRawMapper } from "./approve.mapper";
import { CancelMongoMapper, CancelRawMapper } from "./cancel.mapper";
import { CleanMongoMapper, CleanRawMapper } from "./clean.mapper";
import { DisapproveMongoMapper, DisapproveRawMapper } from "./disapprove.mapper";
import { DisputeMongoMapper, DisputeRawMapper } from "./dispute.mapper";
import { InitMongoMapper, InitRawMapper } from "./init.mapper";
import { RefundMongoMapper, RefundRawMapper } from "./refund.mapper";
import { TransferMongoMapper, TransferRawMapper } from "./transfer.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/escrw-worlds-action';
import { 
  EscrwWorldsActionMongoModel,
  EscrwWorldsActionRawModel,
  ApproveMongoModel,
  ApproveRawModel,
  CancelMongoModel,
  CancelRawModel,
  CleanMongoModel,
  CleanRawModel,
  DisapproveMongoModel,
  DisapproveRawModel,
  DisputeMongoModel,
  DisputeRawModel,
  InitMongoModel,
  InitRawModel,
  RefundMongoModel,
  RefundRawModel,
  TransferMongoModel,
  TransferRawModel,
} from '../dtos';
import { EscrwWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class EscrwWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType>, EscrwWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): EscrwWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case EscrwWorldsActionName.Approve:
        entityData = new ApproveMongoMapper().fromEntity(
          entity.data as Approve
        );
        break;
      case EscrwWorldsActionName.Cancel:
        entityData = new CancelMongoMapper().fromEntity(
          entity.data as Cancel
        );
        break;
      case EscrwWorldsActionName.Clean:
        entityData = new CleanMongoMapper().fromEntity(
          entity.data as Clean
        );
        break;
      case EscrwWorldsActionName.Disapprove:
        entityData = new DisapproveMongoMapper().fromEntity(
          entity.data as Disapprove
        );
        break;
      case EscrwWorldsActionName.Dispute:
        entityData = new DisputeMongoMapper().fromEntity(
          entity.data as Dispute
        );
        break;
      case EscrwWorldsActionName.Init:
        entityData = new InitMongoMapper().fromEntity(
          entity.data as Init
        );
        break;
      case EscrwWorldsActionName.Refund:
        entityData = new RefundMongoMapper().fromEntity(
          entity.data as Refund
        );
        break;
      case EscrwWorldsActionName.Transfer:
        entityData = new TransferMongoMapper().fromEntity(
          entity.data as Transfer
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: EscrwWorldsActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case EscrwWorldsActionName.Approve:
        data = new ApproveMongoMapper().toEntity(
          mongoModel.action.data as ApproveMongoModel
        );
        break;
      case EscrwWorldsActionName.Cancel:
        data = new CancelMongoMapper().toEntity(
          mongoModel.action.data as CancelMongoModel
        );
        break;
      case EscrwWorldsActionName.Clean:
        data = new CleanMongoMapper().toEntity(
          mongoModel.action.data as CleanMongoModel
        );
        break;
      case EscrwWorldsActionName.Disapprove:
        data = new DisapproveMongoMapper().toEntity(
          mongoModel.action.data as DisapproveMongoModel
        );
        break;
      case EscrwWorldsActionName.Dispute:
        data = new DisputeMongoMapper().toEntity(
          mongoModel.action.data as DisputeMongoModel
        );
        break;
      case EscrwWorldsActionName.Init:
        data = new InitMongoMapper().toEntity(
          mongoModel.action.data as InitMongoModel
        );
        break;
      case EscrwWorldsActionName.Refund:
        data = new RefundMongoMapper().toEntity(
          mongoModel.action.data as RefundMongoModel
        );
        break;
      case EscrwWorldsActionName.Transfer:
        data = new TransferMongoMapper().toEntity(
          mongoModel.action.data as TransferMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class EscrwWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, EscrwWorldsActionRawModel>,
  EscrwWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, EscrwWorldsActionRawModel>
  ): EscrwWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: EscrwWorldsActionRawModel
  ): ContractAction<DataEntityType, EscrwWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case EscrwWorldsActionName.Approve:
        data = new ApproveRawMapper().toEntity(
          rawModel.data as ApproveRawModel
        );
        break;
      case EscrwWorldsActionName.Cancel:
        data = new CancelRawMapper().toEntity(
          rawModel.data as CancelRawModel
        );
        break;
      case EscrwWorldsActionName.Clean:
        data = new CleanRawMapper().toEntity(
          rawModel.data as CleanRawModel
        );
        break;
      case EscrwWorldsActionName.Disapprove:
        data = new DisapproveRawMapper().toEntity(
          rawModel.data as DisapproveRawModel
        );
        break;
      case EscrwWorldsActionName.Dispute:
        data = new DisputeRawMapper().toEntity(
          rawModel.data as DisputeRawModel
        );
        break;
      case EscrwWorldsActionName.Init:
        data = new InitRawMapper().toEntity(
          rawModel.data as InitRawModel
        );
        break;
      case EscrwWorldsActionName.Refund:
        data = new RefundRawMapper().toEntity(
          rawModel.data as RefundRawModel
        );
        break;
      case EscrwWorldsActionName.Transfer:
        data = new TransferRawMapper().toEntity(
          rawModel.data as TransferRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, EscrwWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
