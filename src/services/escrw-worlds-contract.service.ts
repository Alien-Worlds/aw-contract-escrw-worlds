/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:51:01 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

import { 
  EscrowsRawModel,
} from '../deltas/data/dtos';

export abstract class EscrwWorldsContractService extends SmartContractService {
  public static Token = 'ESCRW_WORLDS_CONTRACT_SERVICE';

  public abstract fetchEscrows(
    options?: GetTableRowsOptions
  ): Promise<Result<EscrowsRawModel[], Error>>;
}
