import {IPost} from './core/interfaces/IPost';

export class CreatePost {
  static readonly type = '[Posts] Create Post';
  constructor(public post: IPost) {}
}
export class GetPost {
  static readonly type = '[Posts] Read Post';
  constructor() {}
}
export class UpdatePost {
  static readonly type = '[Posts] Update Post';
  constructor(public post: IPost) {}
}
export class DeletePost {
  static readonly type = '[Posts] Delete Post';
  constructor(public post: number) {}
}
