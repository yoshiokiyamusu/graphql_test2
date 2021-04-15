module.exports = async (_, {}, {models}) => {
  const podcasts = await models.Podcast.find();
  return podcasts;
  //return await models.Podcast.find();
};


