/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:28 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Approve  } from "../../domain/entities";
import { ApproveMongoModel, ApproveRawModel  } from "../dtos/approve.dto";

// Mongo Mappers
export class ApproveMongoMapper
  extends MongoMapper<Approve, ApproveMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('approver', { 
      key: 'approver', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ApproveMongoModel): Approve {
    const { 
      key,
      approver,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Approve.create(
      key || '',
      approver || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ApproveRawMapper
  extends MapperImpl<Approve, ApproveRawModel>
{
  public fromEntity(entity: Approve): ApproveRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ApproveRawModel): Approve {
    const { 
      key,
      approver,
      dac_id,
      ...rest
    } = rawModel;

    return Approve.create(
      key || '',
      approver || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

