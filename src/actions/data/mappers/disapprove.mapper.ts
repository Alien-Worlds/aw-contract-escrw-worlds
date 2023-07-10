/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:00 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Disapprove  } from "../../domain/entities";
import { DisapproveMongoModel, DisapproveRawModel  } from "../dtos/disapprove.dto";

// Mongo Mappers
export class DisapproveMongoMapper
  extends MapperImpl<Disapprove, DisapproveMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('disapprover', { 
      key: 'disapprover', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
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
        key ?? '',
        disapprover ?? '',
        dac_id ?? '',
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
        key ?? '',
        disapprover ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

