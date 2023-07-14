/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:51:01 GMT
 */


import { 
  Escrows,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/escrw-worlds-delta';
import { EscrwWorldsDeltaMongoModel, EscrwWorldsDeltaRawModel } from '../dtos';
import { EscrwWorldsTableName } from '../../domain/enums';
import { EscrowsMongoMapper, EscrowsRawMapper } from "./escrows.mapper";

// Mongo Mapper
export class EscrwWorldsDeltaMongoMapper
  extends MongoMapper<ContractDelta<DataEntityType>, EscrwWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): EscrwWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case EscrwWorldsTableName.Escrows:
        entityData = new EscrowsMongoMapper().fromEntity(
          entity.data as Escrows
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: EscrwWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case EscrwWorldsTableName.Escrows:
        data = new EscrowsMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class EscrwWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, EscrwWorldsDeltaRawModel>, 
    EscrwWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, EscrwWorldsDeltaRawModel>
  ): EscrwWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: EscrwWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, EscrwWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case EscrwWorldsTableName.Escrows:
        data = new EscrowsRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, EscrwWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}