/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Disapprove  } from "../../domain/entities";
import { DisapproveMongoModel, DisapproveRawModel  } from "../dtos/disapprove.dto";

// Mongo Mappers
export class DisapproveMongoMapper
  extends MongoMapper<Disapprove, DisapproveMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('disapprover', { 
      key: 'disapprover', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: DisapproveMongoModel): Disapprove {
    const { 
      key,
      disapprover,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Disapprove.create(
      key || '',
      disapprover || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DisapproveRawMapper
  extends MapperImpl<Disapprove, DisapproveRawModel>
{
  public fromEntity(entity: Disapprove): DisapproveRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DisapproveRawModel): Disapprove {
    const { 
      key,
      disapprover,
      dac_id,
      ...rest
    } = rawModel;

    return Disapprove.create(
      key || '',
      disapprover || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

