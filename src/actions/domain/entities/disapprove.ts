/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:24:06 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Disapprove` object.
 *
 * @class
 */
export class Disapprove implements Entity {
  /**
   * Constructs a new instance of the `Disapprove` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param string disapprover
   * @param string dacId
   * @param string [id]
   * @returns `Disapprove` - An instance of the `Disapprove` class.
   */
  public constructor(
    public key: string,
    public disapprover: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Disapprove` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      disapprover: this.disapprover,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Disapprove` class.
   *
   * @static
   * @public
   * @param string key
   * @param string disapprover
   * @param string dacId
   * @returns `Disapprove` An instance of the `Disapprove` class.
   */
  public static create(
    key: string,
    disapprover: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Disapprove {
    const entity = new Disapprove(
      key,
      disapprover,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Disapprove {
    return new Disapprove(
      '',
      '',
      '',
    );
  }
}

