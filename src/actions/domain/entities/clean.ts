/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:07:29 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Clean` object.
 *
 * @class
 */
export class Clean implements Entity {
  /**
   * Constructs a new instance of the `Clean` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Clean` - An instance of the `Clean` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Clean` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Clean` class.
   *
   * @static
   * @public
   * @param string dacId
   * @returns `Clean` An instance of the `Clean` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Clean {
    const entity = new Clean(
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Clean {
    return new Clean(
      '',
    );
  }
}

