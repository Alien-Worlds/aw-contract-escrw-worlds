/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Refund  } from "../../domain/entities";
import { RefundMongoModel, RefundRawModel  } from "../dtos/refund.dto";

// Mongo Mappers
export class RefundMongoMapper
  extends MongoMapper<Refund, RefundMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: RefundMongoModel): Refund {
    const { 
      key,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Refund.create(
      key || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RefundRawMapper
  extends MapperImpl<Refund, RefundRawModel>
{
  public fromEntity(entity: Refund): RefundRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RefundRawModel): Refund {
    const { 
      key,
      dac_id,
      ...rest
    } = rawModel;

    return Refund.create(
      key || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

