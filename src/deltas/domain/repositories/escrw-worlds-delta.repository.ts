/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:24:06 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/escrw-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/escrw-worlds-delta';

/**
 * @description This abstract class represents a repository for `escrw.worlds` contract deltas.
 */
@injectable()
export abstract class EscrwWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'ESCRW_WORLDS_DELTA_REPOSITORY';
}
