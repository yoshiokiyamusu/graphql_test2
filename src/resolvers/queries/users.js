module.exports = async (_, {}, {models}) => {
    const users = await models.User.find();
    return users;
    //return await models.Podcast.find();
  };
  
  