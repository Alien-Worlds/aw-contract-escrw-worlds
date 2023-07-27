/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/aw-antelope';
import { Escrows  } from "../../domain/entities";
import { EscrowsMongoModel, EscrowsRawModel  } from "../dtos/escrows.dto";

// Mongo Mappers
export class EscrowsMongoMapper
  extends MongoMapper<Escrows, EscrowsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('sender', { 
      key: 'sender', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('receiver', { 
      key: 'receiver', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('arb', { 
      key: 'arb', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('receiverPay', { 
      key: 'receiver_pay', 
      mapper: (value: ExtendedAsset) => new ExtendedAssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('arbitratorPay', { 
      key: 'arbitrator_pay', 
      mapper: (value: ExtendedAsset) => new ExtendedAssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('memo', { 
      key: 'memo', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('expires', { 
      key: 'expires', 
      mapper: (value: Date) => value,
    });

    this.mappingFromEntity.set('disputed', { 
      key: 'disputed', 
      mapper: (value: boolean) => value,
    });

  }

  public toEntity(mongoModel: EscrowsMongoModel): Escrows {
    const { 
      key,
      sender,
      receiver,
      arb,
      receiver_pay,
      arbitrator_pay,
      memo,
      expires,
      disputed,
      _id,
      ...rest
    } = mongoModel;

    return Escrows.create(
      key || '',
      sender || '',
      receiver || '',
      arb || '',
      receiver_pay ? new ExtendedAssetMongoMapper().toEntity(receiver_pay) : ExtendedAsset.getDefault(),
      arbitrator_pay ? new ExtendedAssetMongoMapper().toEntity(arbitrator_pay) : ExtendedAsset.getDefault(),
      memo || '',
      expires || new Date(0),
      disputed || false,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class EscrowsRawMapper
  extends MapperImpl<Escrows, EscrowsRawModel>
{
  public fromEntity(entity: Escrows): EscrowsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: EscrowsRawModel): Escrows {
    const { 
      key,
      sender,
      receiver,
      arb,
      receiver_pay,
      arbitrator_pay,
      memo,
      expires,
      disputed,
      ...rest
    } = rawModel;

    return Escrows.create(
      key || '',
      sender || '',
      receiver || '',
      arb || '',
      receiver_pay ? new ExtendedAssetRawMapper().toEntity(receiver_pay) : ExtendedAsset.getDefault(),
      arbitrator_pay ? new ExtendedAssetRawMapper().toEntity(arbitrator_pay) : ExtendedAsset.getDefault(),
      memo || '',
      expires || new Date(0),
      disputed || false,
      undefined,
      rest
    );
  }
}

