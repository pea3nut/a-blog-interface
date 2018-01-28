/**
 * @version 1.0-alpha.2
 * */



// APIs

declare namespace Get{
    namespace tag{
        namespace all{
            interface response extends ApiResponse{
                tag_length:number;
                tag_map :{
                    [alias in TagAlias] :TagInfo;
                };
            }
            interface call{
                ():response;
            }
        }
        interface response extends Get.posts.all.response{}
        interface call{
            (tag_alias :TagAlias):response;
        }
    }
    namespace category{
        namespace all{
            interface response extends ApiResponse{
                errcode :0|1;
                category_length:number;
                category_map :{
                    [alias in CategoryAlias] :CategoryInfo;
                };
            }
            interface call{
                ():response;
            }
        }
        interface response extends Get.posts.all.response{}
        interface call{
            (category_alias :CategoryAlias):response;
        }
    }
    namespace posts{
        namespace all{
            interface response extends ApiResponse{
                posts_length:number;
                posts_map :{
                    [alias in ToString<PostsId>] :PostsInfoWithoutContent;
                };
            }
            interface call{
                ():response;
            }
        }
        interface response extends ApiResponse,PostsInfo{}
        interface call{
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
declare interface ApiResponse{
    errcode :ResponseErrcode;
    errmsg  :string;
}
declare interface ApiResponseError{
    errcode :ResponseErrcode;//todo: -0
    errmsg  :string;
}
/**
 * It has the following values:
 * - ok -> 0
 * - error -> 1
 * @typedef {number} ResponseErrcode
 * */
declare type ResponseErrcode =0|1;
/**
 * A tag.
 * @typedef {Object} TagInfo
 * @property {string} name - The name of tag.
 * @property {TagAlias} alias - The name of tag stand in the program, to be used as identifier.
 * */
declare interface TagInfo{
    name  :string;
    alias :TagAlias;
}
/**
 * @typedef {string} TagAlias
 * Conform to /^\w+$/
 * */
declare type TagAlias =string;
/**
 * A Category.
 * @typedef {Object} CategoryInfo
 * @property {string}               name - The name of category
 * @property {CategoryAlias}        alias - The name of category  stand in the program, to be used as identifier
 * @property {CategoryAlias|null}   parent_alias - The alias of parent of this category.
 * @property {CategoryAlias[]}      child_alias_list  - The aliases of children of this category.
 * */
declare interface CategoryInfo{
    name  :string;
    alias :CategoryAlias;
    parent_alias :CategoryAlias|null;
    child_alias_list :CategoryAlias[];
}
/**
 * @typedef {string} CategoryAlias
 * Conform to /^\w+$/
 * */
declare type CategoryAlias =string;
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
declare interface PostsInfo extends PostsInfoWithoutContent{//todo: Maybe has the better way.
    md_content    :string;
}
declare interface PostsInfoWithoutContent{
    id            :PostsId;
    title         :string;
    description   :string;
    tag_list      :TagAlias[];
    category_list :CategoryAlias[];
    update_time   :Date;
    create_time   :Date;
}
declare type PostsId =number;



// utils

type ToString<T> =string;