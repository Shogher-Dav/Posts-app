import {Action, State, StateContext, Store, Selector} from '@ngxs/store';
import {CreatePost, DeletePost, GetPost, UpdatePost} from './post.actions';
import { IPost } from './core/interfaces/IPost';
import produce from 'immer';



export class PostStateModel {
  posts: IPost[];
}

@State<PostStateModel>({
  name: 'post',
  defaults: {
  posts: []
  }
})

export class PostState {
  constructor(private store: Store) {}
  @Selector()
  static posts(state: PostStateModel) {
    return state.posts;
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();
    return state;
  }
  @Action(CreatePost)
    createPost(ctx: StateContext<PostStateModel>, { post }: CreatePost) {
      ctx.setState(
        produce(ctx.getState(), draftState => {
          draftState.posts.push(post);
        })
      );
    // const state = getState();
    // patchState({
    //   posts: [...state.posts, post]
    // });

    }
    @Action(UpdatePost)
    updatePost(ctx: StateContext<PostStateModel>, { post }: UpdatePost) {
      ctx.setState(
        produce(ctx.getState(), draft => {
          draft.posts.push(post);
        })
      );
    }
    @Action(DeletePost)
    deletePost(ctx: StateContext<PostStateModel>, {post}: DeletePost) {
      ctx.setState(
        produce(ctx.getState(), draft => {
           draft.posts.splice(post, 1);
          //draft.posts.filter(item => item !== post);
        })
      );

    }
}

