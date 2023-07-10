/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:01 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Dispute` object.
 *
 * @class
 */
export class Dispute implements Entity {
  /**
   * Constructs a new instance of the `Dispute` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param string dacId
   * @param string [id]
   * @returns `Dispute` - An instance of the `Dispute` class.
   */
  public constructor(
    public key: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Dispute` class to a JSON object.
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
   * Creates an instance of the `Dispute` class.
   *
   * @static
   * @public
   * @returns `Dispute` An instance of the `Dispute` class.
   */
  public static create(
    key: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Dispute {
    const entity = new Dispute(
      key,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Dispute {
    return new Dispute(
      '',
      '',
    );
  }
}

