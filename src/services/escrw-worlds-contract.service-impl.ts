/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { 
  EscrowsRawModel,
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { EscrwWorldsContractService } from './escrw-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the escrw.worlds smart contract.
 * 
 * @class EscrwWorldsContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { EscrwWorldsContractService}
*/
export class EscrwWorldsContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements EscrwWorldsContractService 
{
  /**
   * Creates an instance of EscrwWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'escrw.worlds');
  }

  /**
   * An AntelopeSmartContractServiceImpl for the escrows table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
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
