/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:24:41 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Refund` object.
 *
 * @class
 */
export class Refund implements Entity {
  /**
   * Constructs a new instance of the `Refund` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param string dacId
   * @param string [id]
   * @returns `Refund` - An instance of the `Refund` class.
   */
  public constructor(
    public key: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Refund` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Refund` class.
   *
   * @static
   * @public
   * @param string key
   * @param string dacId
   * @returns `Refund` An instance of the `Refund` class.
   */
  public static create(
    key: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Refund {
    const entity = new Refund(
      key,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Refund {
    return new Refund(
      '',
      '',
    );
  }
}

