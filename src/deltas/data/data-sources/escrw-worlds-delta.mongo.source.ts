/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:24:41 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/storage-mongodb';
import { EscrwWorldsDeltaMongoModel } from '../dtos';

/**
 * @class
 */
export class EscrwWorldsDeltaMongoSource extends MongoCollectionSource<EscrwWorldsDeltaMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'escrw.worlds_deltas', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { code: 1, table: 1 }, background: true },
        { key: { code: 1, scope: 1, table: 1 }, background: true },
        {
          key: {
            block_num: 1,
            data_hash: 1,
            code: 1,
            scope: 1,
            table: 1,
            primary_key: 1,
            payer: 1,
            present: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
