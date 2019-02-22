// store videos as database:

function Video(data) {
    this.Id = data.Id
    this.NodeId = data.NodeId
    this.NodeName = data.NodeName
    this.OneLevelNodeId = data.OneLevelNodeId
    this.OneLevelNodeName = data.OneLevelNodeName
    this.OneLevelNodeCoverPic =data.OneLevelNodeCoverPic
    this.CoverPic = data.CoverPic
    this.Title = data.Title
    this.Cnt = data.Cnt
    this.ContentType = data.ContentType
    this.ContentState = data.ContentState
    this.ReadCount = data.ReadCount
    this.CommentCount = data.CommentCount
    this.LikeCount = data.LikeCount
    this.PlayCount = data.PlayCount
    this.PublishTime = data.PublishTime
    this.Author = data.Author
    this.AuthorAccount = data.AuthorAccount
    this.AuthorHeadImageUrl = data.AuthorHeadImageUrl
    this.DepartmentFullName = data.DepartmentFullName
    this.FrontCoverImageUrl = data.FrontCoverImageUrl
    this.FrontCoverImgUrlList = data.FrontCoverImgUrlList
    this.Summary = data.Summary
    this.ContentGoToUrl = data.ContentGoToUrl
    this.HeadGoToUrl = data.HeadGoToUrl
    this.Topic = data.Topic
    this.PlayTime = data.PlayTime
    this.LastCommentTime = data.LastCommentTime
    this.IsLike = data.IsLike
}

var videos = [
    new Video({ 'Id': '176', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '修改了图片服务的视频', 'Cnt': '/static/video.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 19, 'CommentCount': 0, 'LikeCount': 0, 'PlayCount': 228, 'PublishTime': '2018-11-14 14:30:56', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://dev.corp.contoso.com:9017/api/image/765b4369-7686-400f-892e-54e2f589a0e8', 'FrontCoverImgUrlList': ['http://dev.corp.contoso.com:9017/api/image/765b4369-7686-400f-892e-54e2f589a0e8'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/8920ea43-7091-45d5-a13d-813cc334f7eb', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '你好', 'PlayTime': '00:00:09', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': '56521f42-9173-4686-a8c1-5bdef6a4db91', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '我的视频', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/01/52/CseGfFvkXjSAJ3z9ACLPVmbAVgA589.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 31, 'CommentCount': 0, 'LikeCount': 0, 'PlayCount': 99, 'PublishTime': '2018-11-08 20:12:04', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/51/CseGe1vkKCKAOQmJAAA8gh1qMRI699.png', 'FrontCoverImgUrlList': ['http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/51/CseGe1vkKCKAOQmJAAA8gh1qMRI699.png'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/56521f42-9173-4686-a8c1-5bdef6a4db91', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '你好', 'PlayTime': '00:00:09', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': '21da0441-2325-4b52-a9c9-0d264a4aa0d3', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': 'sds', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/01/51/CseGfFvjRo6AOjsnACLPVmbAVgA200.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 10, 'CommentCount': 0, 'LikeCount': 0, 'PlayCount': 7, 'PublishTime': '2018-11-07 22:30:48', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/51/CseGe1vi9xSAKhGvAABNu82bZ1w523.png', 'FrontCoverImgUrlList': ['http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/51/CseGe1vi9xSAKhGvAABNu82bZ1w523.png'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/21da0441-2325-4b52-a9c9-0d264a4aa0d3', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '你好', 'PlayTime': '00:00:09', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': 'c8a9b893-618d-4014-b5a4-2c65f8a240ad', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '测试发一条视频', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/01/51/CseGfFvjQsaAYxcHACLPVmbAVgA945.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 13, 'CommentCount': 0, 'LikeCount': 0, 'PlayCount': 10, 'PublishTime': '2018-11-07 22:13:13', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/50/CseGe1vi8vGAQ_kkAABN_0BTZhI261.png', 'FrontCoverImgUrlList': ['http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/50/CseGe1vi8vGAQ_kkAABN_0BTZhI261.png'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/c8a9b893-618d-4014-b5a4-2c65f8a240ad', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '你信', 'PlayTime': '00:00:09', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': 'a9cf14af-0bae-42ef-9c6a-ce981dee29e7', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '测试发一条视频', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/01/51/CseGfFvjQmiABj5iACLPVmbAVgA535.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 14, 'CommentCount': 0, 'LikeCount': 1, 'PlayCount': 6, 'PublishTime': '2018-11-07 22:12:04', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/50/CseGe1vi8oKAdpAwAABNu82bZ1w862.png', 'FrontCoverImgUrlList': ['http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/50/CseGe1vi8oKAdpAwAABNu82bZ1w862.png'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/a9cf14af-0bae-42ef-9c6a-ce981dee29e7', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '你信', 'PlayTime': '00:00:09', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': '5f418b14-e10f-43ca-b052-d7d57f4be8a6', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '测试发一条视频', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/01/51/CseGfFvjPtWAcB4lACLPVmbAVgA859.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 11, 'CommentCount': 0, 'LikeCount': 0, 'PlayCount': 6, 'PublishTime': '2018-11-07 21:54:56', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/50/CseGe1vi7qaAYnXpAABia3G1oUQ859.jpg', 'FrontCoverImgUrlList': ['http://fastdfs.corp.contoso.com:8880/file/download/group2/M00/01/50/CseGe1vi7qaAYnXpAABia3G1oUQ859.jpg'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/5f418b14-e10f-43ca-b052-d7d57f4be8a6', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '你好', 'PlayTime': '00:00:09', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': 'b5d8accc-786b-4e16-b6c8-d3344bb196dd', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '燃！我唯上天了', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/00/48/CmQRi1ubIx6AHjnkALxoJhWq4QY260.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 429, 'CommentCount': 0, 'LikeCount': 5, 'PlayCount': 0, 'PublishTime': '2018-09-14 10:55:29', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://dev.corp.contoso.com:9017/api/image/f2163814-147c-4951-8d10-3837670ad271', 'FrontCoverImgUrlList': ['http://dev.corp.contoso.com:9017/api/image/f2163814-147c-4951-8d10-3837670ad271'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/b5d8accc-786b-4e16-b6c8-d3344bb196dd', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '唯品范儿', 'PlayTime': '00:01:51', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': '7eb06947-95f8-4f82-a514-8fea972c4c0e', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '唯爱工坊非遗万物仲秋采风', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/00/48/CmQRjFubG6qAIrXXAPb4Q3HnxJQ249.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 164, 'CommentCount': 0, 'LikeCount': 2, 'PlayCount': 3, 'PublishTime': '2018-09-14 10:37:33', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://dev.corp.contoso.com:9017/api/image/f300b5cc-fa66-45a7-b794-2d49802779d5', 'FrontCoverImgUrlList': ['http://dev.corp.contoso.com:9017/api/image/f300b5cc-fa66-45a7-b794-2d49802779d5'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/7eb06947-95f8-4f82-a514-8fea972c4c0e', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '唯品会公益', 'PlayTime': '00:02:35', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': '09addeef-b4c1-4eba-a31c-49f3ea3dc3aa', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '一个唯品人的甜蜜烦恼', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/00/46/CmQRi1uDcGqAcYEVAde9d8rzSfM442.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 369, 'CommentCount': 0, 'LikeCount': 3, 'PlayCount': 0, 'PublishTime': '2018-08-27 11:31:49', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://dev.corp.contoso.com:9017/api/image/f4faf196-7096-4565-a8ed-e170443b966f', 'FrontCoverImgUrlList': ['http://dev.corp.contoso.com:9017/api/image/f4faf196-7096-4565-a8ed-e170443b966f'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/09addeef-b4c1-4eba-a31c-49f3ea3dc3aa', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '唯品范儿', 'PlayTime': '00:04:37', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': 'ea29c5e6-9507-4248-88d3-55f046b28059', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '百日得一盏盛夏啖燕窝', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/00/42/CmQRjFtZmq-AEAF9AKEmam8BVys468.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 397, 'CommentCount': 0, 'LikeCount': 2, 'PlayCount': 2, 'PublishTime': '2018-07-26 17:57:30', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://dev.corp.contoso.com:9017/api/image/130fd2ce-3a50-4ad2-808b-9d1bfe560692', 'FrontCoverImgUrlList': ['http://dev.corp.contoso.com:9017/api/image/130fd2ce-3a50-4ad2-808b-9d1bfe560692'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/ea29c5e6-9507-4248-88d3-55f046b28059', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '唯品生活', 'PlayTime': '00:01:36', 'LastCommentTime': null, 'IsLike': false }),
    new Video({ 'Id': 'ea29c5e6-9507-4248-88d3-55f0eac34726', 'NodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'NodeName': '视频', 'OneLevelNodeId': 'c06c339c-b7ad-447c-982e-ca75edc48af8', 'OneLevelNodeName': '视频', 'OneLevelNodeCoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'CoverPic': 'http://dev.corp.contoso.com:9017/api/image/eabaa612-2d52-45bb-8586-08f425d8776a', 'Title': '百日得一盏盛夏啖燕窝', 'Cnt': 'http://fastdfs.sit.vipshop.com/group2/M00/00/42/CmQRjFtZmq-AEAF9AKEmam8BVys468.mp4', 'ContentType': 5, 'ContentState': 1, 'ReadCount': 397, 'CommentCount': 0, 'LikeCount': 2, 'PlayCount': 2, 'PublishTime': '2018-07-26 17:57:30', 'Author': '管理员', 'AuthorAccount': 'admin', 'AuthorHeadImageUrl': '', 'DepartmentFullName': '', 'FrontCoverImageUrl': 'http://dev.corp.contoso.com:9017/api/image/130fd2ce-3a50-4ad2-808b-9d1bfe560692', 'FrontCoverImgUrlList': ['http://dev.corp.contoso.com:9017/api/image/130fd2ce-3a50-4ad2-808b-9d1bfe560692'], 'Summary': '', 'ContentGoToUrl': '/subscription/video/ea29c5e6-9507-4248-88d3-55f046b28059', 'HeadGoToUrl': '/subscription/detail/c06c339c-b7ad-447c-982e-ca75edc48af8', 'Topic': '唯品', 'PlayTime': '00:03:21', 'LastCommentTime': null, 'IsLike': false })
];

module.exports = {
    getVideos: () => {
        return videos;
    },

    getVideo: (id) => {
        var i;
        for (i = 0; i < videos.length; i++) {
            if (videos[i].Id === id) {
                return videos[i];
            }
        }
        return null;
    },

    createVideo: (data) => {
        var v = new Video(data);
        videos.push(v);
        return v;
    },

    deleteVideo: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < videos.length; i++) {
            if (videos[i].Id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            // remove products[index]:
            return videos.splice(index, 1)[0];
        }
        return null;
    }
};
