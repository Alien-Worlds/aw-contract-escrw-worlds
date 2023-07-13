/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:24:06 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Clean  } from "../../domain/entities";
import { CleanMongoModel, CleanRawModel  } from "../dtos/clean.dto";

// Mongo Mappers
export class CleanMongoMapper
  extends MapperImpl<Clean, CleanMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CleanMongoModel): Clean {
    const { 
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Clean.create(
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CleanRawMapper
  extends MapperImpl<Clean, CleanRawModel>
{
  public fromEntity(entity: Clean): CleanRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CleanRawModel): Clean {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Clean.create(
      dac_id || '',
      undefined,
      rest
    );
  }
}

