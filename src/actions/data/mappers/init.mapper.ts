/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:01 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Init  } from "../../domain/entities";
import { InitMongoModel, InitRawModel  } from "../dtos/init.dto";

// Mongo Mappers
export class InitMongoMapper
  extends MapperImpl<Init, InitMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('sender', { 
      key: 'sender', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('receiver', { 
      key: 'receiver', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('arb', { 
      key: 'arb', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('expires', { 
      key: 'expires', 
      mapper: (value: Date) => 
        value,
    });

    this.mappingFromEntity.set('memo', { 
      key: 'memo', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('extReference', { 
      key: 'ext_reference', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: InitMongoModel): Init {
    const { 
      sender,
      receiver,
      arb,
      expires,
      memo,
      ext_reference,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Init.create(
        sender ?? '',
        receiver ?? '',
        arb ?? '',
        expires ?? new Date(0),
        memo ?? '',
        ext_reference ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class InitRawMapper
  extends MapperImpl<Init, InitRawModel>
{
  public fromEntity(entity: Init): InitRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: InitRawModel): Init {
    const { 
      sender,
      receiver,
      arb,
      expires,
      memo,
      ext_reference,
      dac_id,
      ...rest
    } = rawModel;

    return Init.create(
        sender ?? '',
        receiver ?? '',
        arb ?? '',
        expires ?? new Date(0),
        memo ?? '',
        ext_reference ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

