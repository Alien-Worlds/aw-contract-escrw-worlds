/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { ExtendedAsset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Escrows` object.
 *
 * @class
 */
export class Escrows implements Entity {
  /**
   * Constructs a new instance of the `Escrows` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param string sender
   * @param string receiver
   * @param string arb
   * @param ExtendedAsset receiverPay
   * @param ExtendedAsset arbitratorPay
   * @param string memo
   * @param Date expires
   * @param boolean disputed
   * @param string [id]
   * @returns `Escrows` - An instance of the `Escrows` class.
   */
  public constructor(
    public key: string,
    public sender: string,
    public receiver: string,
    public arb: string,
    public receiverPay: ExtendedAsset,
    public arbitratorPay: ExtendedAsset,
    public memo: string,
    public expires: Date,
    public disputed: boolean,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Escrows` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      sender: this.sender,
      receiver: this.receiver,
      arb: this.arb,
      receiverPay: this.receiverPay,
      arbitratorPay: this.arbitratorPay,
      memo: this.memo,
      expires: this.expires,
      disputed: this.disputed,
    };
  }

  /**
   * Creates an instance of the `Escrows` class.
   *
   * @static
   * @public
   * @param string key
   * @param string sender
   * @param string receiver
   * @param string arb
   * @param ExtendedAsset receiverPay
   * @param ExtendedAsset arbitratorPay
   * @param string memo
   * @param Date expires
   * @param boolean disputed
   * @returns `Escrows` An instance of the `Escrows` class.
   */
  public static create(
    key: string,
    sender: string,
    receiver: string,
    arb: string,
    receiverPay: ExtendedAsset,
    arbitratorPay: ExtendedAsset,
    memo: string,
    expires: Date,
    disputed: boolean,
    id?: string,
    rest?: UnknownObject
  ): Escrows {
    const entity = new Escrows(
      key,
      sender,
      receiver,
      arb,
      receiverPay,
      arbitratorPay,
      memo,
      expires,
      disputed,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Escrows {
    return new Escrows(
      '',
      '',
      '',
      '',
      ExtendedAsset.getDefault(),
      ExtendedAsset.getDefault(),
      '',
      new Date(0),
      false,
    );
  }
}

