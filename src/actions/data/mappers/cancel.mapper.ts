/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:24:41 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Cancel  } from "../../domain/entities";
import { CancelMongoModel, CancelRawModel  } from "../dtos/cancel.dto";

// Mongo Mappers
export class CancelMongoMapper
  extends MongoMapper<Cancel, CancelMongoModel>
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

  public toEntity(mongoModel: CancelMongoModel): Cancel {
    const { 
      key,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Cancel.create(
      key || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CancelRawMapper
  extends MapperImpl<Cancel, CancelRawModel>
{
  public fromEntity(entity: Cancel): CancelRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CancelRawModel): Cancel {
    const { 
      key,
      dac_id,
      ...rest
    } = rawModel;

    return Cancel.create(
      key || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

