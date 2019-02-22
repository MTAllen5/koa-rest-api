// store videos as database:

function Comment(data) {
    this.Id = data.Id
    this.ThreadId = data.ThreadId
    this.ParentId = data.ParentId
    this.Content = data.Content
    this.Author = data.Author
    this.AuthorId = data.AuthorId
    this.Likes = data.Likes
    this.CreatedOn = data.CreatedOn
    this.ParentAuthor = data.ParentAuthor
    this.Level = data.Level
    this.CanDelete = data.CanDelete
}

var comments = [
    new Comment({'Id': 16213, 'ThreadId': 3391, 'ParentId': 0, 'Content': 'dsad', 'Author': '凹凸曼', 'AuthorId': 'eva.cao', 'Likes': 0, 'CreatedOn': '2018-12-13 15:00:07', 'ParentAuthor': '', 'Level': 0, 'CanDelete': false}),
    new Comment({'Id': 16214, 'ThreadId': 3391, 'ParentId': 0, 'Content': 'dsad', 'Author': '怪兽', 'AuthorId': 'eva.cao', 'Likes': 0, 'CreatedOn': '2018-12-13 15:00:07', 'ParentAuthor': '', 'Level': 0, 'CanDelete': false}),
    new Comment({'Id': 16215, 'ThreadId': 3391, 'ParentId': 0, 'Content': 'dsad', 'Author': '麋鹿', 'AuthorId': 'eva.cao', 'Likes': 0, 'CreatedOn': '2018-12-13 15:00:07', 'ParentAuthor': '', 'Level': 0, 'CanDelete': false}),
    new Comment({'Id': 16216, 'ThreadId': 3391, 'ParentId': 0, 'Content': 'dsad', 'Author': '大象', 'AuthorId': 'eva.cao', 'Likes': 0, 'CreatedOn': '2018-12-13 15:00:07', 'ParentAuthor': '', 'Level': 0, 'CanDelete': false})
]

module.exports = {
    getComments: () => {
        return comments;
    },

    getComment: (id) => {
        var i;
        for (i = 0; i < comments.length; i++) {
            if (comments[i].Id === id) {
                return comments[i];
            }
        }
        return null;
    },

    createComment: (data) => {
        var c = new Comment(data);
        comments.push(c);
        return c;
    },

    deleteVideo: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < comments.length; i++) {
            if (comments[i].Id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            return comments.splice(index, 1)[0];
        }
        return null;
    }
};
