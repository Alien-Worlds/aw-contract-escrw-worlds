/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:24:41 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Dispute  } from "../../domain/entities";
import { DisputeMongoModel, DisputeRawModel  } from "../dtos/dispute.dto";

// Mongo Mappers
export class DisputeMongoMapper
  extends MongoMapper<Dispute, DisputeMongoModel>
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

  public toEntity(mongoModel: DisputeMongoModel): Dispute {
    const { 
      key,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Dispute.create(
      key || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DisputeRawMapper
  extends MapperImpl<Dispute, DisputeRawModel>
{
  public fromEntity(entity: Dispute): DisputeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DisputeRawModel): Dispute {
    const { 
      key,
      dac_id,
      ...rest
    } = rawModel;

    return Dispute.create(
      key || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

