/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:24:41 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Cancel` object.
 *
 * @class
 */
export class Cancel implements Entity {
  /**
   * Constructs a new instance of the `Cancel` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param string dacId
   * @param string [id]
   * @returns `Cancel` - An instance of the `Cancel` class.
   */
  public constructor(
    public key: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Cancel` class to a JSON object.
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
   * Creates an instance of the `Cancel` class.
   *
   * @static
   * @public
   * @param string key
   * @param string dacId
   * @returns `Cancel` An instance of the `Cancel` class.
   */
  public static create(
    key: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Cancel {
    const entity = new Cancel(
      key,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Cancel {
    return new Cancel(
      '',
      '',
    );
  }
}

