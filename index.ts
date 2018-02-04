/**
 * @version 1.0-alpha.3
 * */



// APIs

export namespace Get{
    export namespace tag{
        export namespace all{
            export interface response extends ApiResponse{
                tag_length:number;
                tag_map :IndexMap<TagAlias,TagInfo>;
            }
            export interface call{
                ():response;
            }
        }
        export interface response extends Get.posts.all.response{
            errcode :ResponseErrcode
        }
        export interface call{
            (tag_alias :TagAlias):response;
        }
    }
    export namespace category{
        export namespace all{
            export interface response extends ApiResponse{
                errcode :0|1;
                category_length:number;
                category_map :IndexMap<CategoryAlias,CategoryInfo>;
            }
            export interface call{
                ():response;
            }
        }
        export interface response extends Get.posts.all.response{}
        export interface call{
            (category_alias :CategoryAlias):response;
        }
    }
    export namespace posts{
        export namespace all{
            export interface response extends ApiResponse{
                posts_length:number;
                posts_map :IndexMap<ToString<PostsId>,PostsInfoWithoutContent>;
            }
            export interface call{
                ():response;
            }
        }
        export interface response extends ApiResponse,PostsInfo{
            errcode :ResponseSuccessErrcode;
        }
        export interface call{
            (posts_id:PostsId):response;
        }
    }
}





// Types

/**
 * The minimize response of APIs.
 * @typedef {Object} ApiResponse
 * @property {ResponseErrcode} errcode - The state of request.
 * @property {string}          errmsg  - The message for debugging.
 * */
export interface ApiResponse{
    errcode :ResponseErrcode;
    errmsg  :string;
}
/**
 * Like ApiResponse, but be limited in the case when some errors have occurred.
 * @typedef {Object} ApiErrorResponse
 * */
export interface ApiErrorResponse{
    errcode :ResponseErrorErrcode;
    errmsg  :string;
}
/**
 * The map of all case of ApiResponse.errcode.
 * @typedef {object} ResponseErrcode
 * */
export enum ResponseErrcode{
    Ok=0,
    Error=1,
    TagNotFound=201,
    PostsNotFound=202,
    CategoryNotFound=203,
}
/**
 * All success case of ApiResponse.errcode.
 * @typedef {number} ResponseSuccessErrcode
 * */
export type ResponseSuccessErrcode =ResponseErrcode.Ok;
/**
 * All fail case of ApiResponse.errcode.
 * @typedef {number} ResponseSuccessErrcode
 * */
export type ResponseErrorErrcode=
    ResponseErrcode.Error
    | ResponseErrcode.TagNotFound
    | ResponseErrcode.PostsNotFound
    | ResponseErrcode.CategoryNotFound
;
/**
 * A tag.
 * @typedef {Object} TagInfo
 * @property {string} name - The name of tag.
 * @property {TagAlias} alias - The name of tag stand in the program, to be used as identifier.
 * */
export interface TagInfo{
    name  :string;
    alias :TagAlias;
}
/**
 * @typedef {string} TagAlias
 * Conform to /^\w+$/
 * */
export type TagAlias =string;
/**
 * A Category.
 * @typedef {Object} CategoryInfo
 * @property {string}               name - The name of category
 * @property {CategoryAlias}        alias - The name of category  stand in the program, to be used as identifier
 * @property {CategoryAlias|null}   parent_alias - The alias of parent of this category.
 * @property {CategoryAlias[]}      child_alias_list  - The aliases of children of this category.
 * */
export interface CategoryInfo{
    name  :string;
    alias :CategoryAlias;
    parent_alias :CategoryAlias|null;
    child_alias_list :CategoryAlias[];
}
/**
 * @typedef {string} CategoryAlias
 * Conform to /^\w+$/
 * */
export type CategoryAlias =string;
/**
 * A posts.
 * @typedef {Object} PostsInfoWithoutContent
 * @property {number}          id  - The identifier of posts.
 * @property {string}          title
 * @property {string}          description
 * @property {string}          md_content - The content text of posts, using Markdown language.
 * @property {TagAlias[]}      tag_list
 * @property {CategoryAlias[]} category_list
 * @property {Date}            update_time
 * @property {Date}            create_time
 * */
export interface PostsInfo extends PostsInfoWithoutContent{//todo: Maybe has the better way.
    md_content    :string;
}
export interface PostsInfoWithoutContent{
    id            :PostsId;
    title         :string;
    description   :string;
    tag_list      :TagAlias[];
    category_list :CategoryAlias[];
    update_time   :Date;
    create_time   :Date;
}
export type PostsId =number;



// utils

export type ToString<T> =string;
export type IndexMap<K extends string,V> ={
    [key in K] :V;
};