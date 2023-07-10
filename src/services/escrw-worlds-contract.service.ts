/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:01 GMT
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
