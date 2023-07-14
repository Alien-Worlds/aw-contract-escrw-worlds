/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:51:01 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Init` object.
 *
 * @class
 */
export class Init implements Entity {
  /**
   * Constructs a new instance of the `Init` class.
   *
   * @public
   * @constructor
   * @param string sender
   * @param string receiver
   * @param string arb
   * @param Date expires
   * @param string memo
   * @param string extReference
   * @param string dacId
   * @param string [id]
   * @returns `Init` - An instance of the `Init` class.
   */
  public constructor(
    public sender: string,
    public receiver: string,
    public arb: string,
    public expires: Date,
    public memo: string,
    public extReference: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Init` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      sender: this.sender,
      receiver: this.receiver,
      arb: this.arb,
      expires: this.expires,
      memo: this.memo,
      extReference: this.extReference,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Init` class.
   *
   * @static
   * @public
   * @param string sender
   * @param string receiver
   * @param string arb
   * @param Date expires
   * @param string memo
   * @param string extReference
   * @param string dacId
   * @returns `Init` An instance of the `Init` class.
   */
  public static create(
    sender: string,
    receiver: string,
    arb: string,
    expires: Date,
    memo: string,
    extReference: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Init {
    const entity = new Init(
      sender,
      receiver,
      arb,
      expires,
      memo,
      extReference,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Init {
    return new Init(
      '',
      '',
      '',
      new Date(0),
      '',
      '',
      '',
    );
  }
}

