/* tslint:disable */

declare var Object: any;
export interface PostInterface {
  "title": string;
  "description"?: string;
  "id"?: number;
}

export class Post implements PostInterface {
  "title": string;
  "description": string;
  "id": number;
  constructor(data?: PostInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Post`.
   */
  public static getModelName() {
    return "Post";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Post for dynamic purposes.
  **/
  public static factory(data: PostInterface): Post{
    return new Post(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Post',
      plural: 'Posts',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
