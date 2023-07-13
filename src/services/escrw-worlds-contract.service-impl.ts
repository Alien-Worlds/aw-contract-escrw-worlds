/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:24:06 GMT
 */

import { 
  EscrowsRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { EscrwWorldsContractService } from './escrw-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the escrw.worlds smart contract.
 * 
 * @class EscrwWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { EscrwWorldsContractService}
*/
export class EscrwWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements EscrwWorldsContractService 
{
  /**
   * Creates an instance of EscrwWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'escrw.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the escrows table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchEscrows (
    options?: GetTableRowsOptions
  ): Promise<Result<EscrowsRawModel[], Error>> {
    const table_key = 'key';
    const tableRowOptions = {
      ...options,
      code: 'escrw.worlds',
      table: 'escrows',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<EscrowsRawModel>(tableRowOptions)
      : await this.getAll<EscrowsRawModel>(table_key, tableRowOptions);
  }
}
