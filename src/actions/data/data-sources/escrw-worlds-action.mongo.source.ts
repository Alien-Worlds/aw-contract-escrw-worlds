/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:28 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/aw-storage-mongodb';
import { EscrwWorldsActionMongoModel } from '../dtos';

/**
 * @class
 */
export class EscrwWorldsActionMongoSource extends MongoCollectionSource<EscrwWorldsActionMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'escrw.worlds_actions', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { 'action.name': 1 }, background: true },
        { key: { 'action.account': 1, 'action.name': 1 }, background: true },
        {
          key: {
            action_hash: 1,
            block_num: 1,
            block_timestamp: 1,
            global_sequence: 1,
            recv_sequence: 1,
            trx_id: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
