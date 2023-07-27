/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/escrw-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/escrw-worlds-action';

/**
 * @description This abstract class represents a repository for `escrw.worlds` contract actions.
 */
@injectable()
export abstract class EscrwWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'ESCRW_WORLDS_ACTION_REPOSITORY';
}
