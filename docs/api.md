# Interfaces

Every interface return types includes:

- errcode {Number} - this request status. any output other than 0 is on behalf of this request error
- errmsg {String} - error message. this value should only be used for debugging

## GET /tag/all

Get all tabs.

Return types:

- tag_length {Number}
- tag {Object}
    - key {String} [value].alias
    - value {TagInfo}

## GET /category/all

Get all category.

Return types:

- category_length {Number}
- category {Object}
    - key {String} [value].alias
    - value {CategoryInfo}

## GET /posts/:posts_id

Get a posts detail.

URL param:

- posts_id {PostsInfo.id} - which posts detail do you want?

Return types: A PostsInfo.

## GET /post/all

Get posts list.

Return types:

- posts_length {Number}
- posts_list {Array<PostsInfo(-PostsInfo.md_content)>}

## GET /tag/:tag_alias

Get posts list which has this tag.

URL param:

- tag_alias {TagInfo.alias}

Return types: Same as `GET /post/all`

## GET /category/:category_alias

Get posts list which in this category.

URL param:

- category_alias {CategoryInfo.alias}

Return types: Same as `GET /post/all`

# Types

## TagInfo

- TagInfo.name {String} - the tag name
- TagInfo.alias {String(/^\w+$/)} - the tag unique identifier

## CategoryInfo

- CategoryInfo.name {String} - the category name
- CategoryInfo.alias {String(/^\w+$/)} - the category unique identifier
- CategoryInfo.parent_alias {CategoryInfo.alias} - the category's parent category
- CategoryInfo.child_alias_list {Array<CategoryInfo.alias>} - the category's child category

## PostsInfo

- PostsInfo.id {Number} - the posts unique identifier
- PostsInfo.title {String}
- PostsInfo.description {String}
- PostsInfo.md_content {String} - the markdown source code of posts
- PostsInfo.tag_list {Array<TagInfo.alias>} - the posts's tag list
- PostsInfo.category_list {Array<CategoryInfo.alias>} - the posts's category list
- PostsInfo.update_time {Date}
- PostsInfo.create_time {Date}



