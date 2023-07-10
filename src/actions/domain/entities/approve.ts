/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:40:01 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Approve` object.
 *
 * @class
 */
export class Approve implements Entity {
  /**
   * Constructs a new instance of the `Approve` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param string approver
   * @param string dacId
   * @param string [id]
   * @returns `Approve` - An instance of the `Approve` class.
   */
  public constructor(
    public key: string,
    public approver: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Approve` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      approver: this.approver,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Approve` class.
   *
   * @static
   * @public
   * @returns `Approve` An instance of the `Approve` class.
   */
  public static create(
    key: string,
    approver: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Approve {
    const entity = new Approve(
      key,
      approver,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Approve {
    return new Approve(
      '',
      '',
      '',
    );
  }
}

