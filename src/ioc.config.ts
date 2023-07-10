/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:01 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/storage-mongodb';

import { EscrwWorldsActionMongoMapper } from './actions/data/mappers';
import { EscrwWorldsActionMongoSource } from './actions/data/data-sources';
import { EscrwWorldsActionRepository } from './actions/domain/repositories';
import { EscrwWorldsContractService } from "./services/escrw-worlds-contract.service";
import { EscrwWorldsContractServiceImpl } from "./services/escrw-worlds-contract.service-impl";
import { EscrwWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { EscrwWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { EscrwWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupEscrwWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<EscrwWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new EscrwWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new EscrwWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<EscrwWorldsActionRepository>(EscrwWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupEscrwWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<EscrwWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new EscrwWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new EscrwWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<EscrwWorldsDeltaRepository>(EscrwWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupEscrwWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): EscrwWorldsContractService => {
  const service = new EscrwWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<EscrwWorldsContractService>(EscrwWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
