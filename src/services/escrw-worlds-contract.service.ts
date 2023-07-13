/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:24:06 GMT
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
