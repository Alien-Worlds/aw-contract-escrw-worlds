/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/aw-core';

import { 
  EscrowsRawModel,
} from '../deltas/data/dtos';

export abstract class EscrwWorldsContractService extends SmartContractService {
  public static Token = 'ESCRW_WORLDS_CONTRACT_SERVICE';

  public abstract fetchEscrows(
    options?: GetTableRowsOptions
  ): Promise<Result<EscrowsRawModel[], Error>>;
}
