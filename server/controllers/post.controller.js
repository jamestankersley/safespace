import Post from '../models/post.model'
import _ from 'lodash'
import formidable from 'formidable'

const create = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json()
    }
    let post = new Post(fields)
    post.postedBy= req.profile
    post.save((err, result) => {
      if (err) {
        return res.status(400).json()
      }
      res.json(result)
    })
  })
}

const postByID = (req, res, next, id) => {
  Post.findById(id).populate('postedBy', '_id name').exec((err, post) => {
    if (err || !post)
      return res.status('400').json()
    req.post = post
    next()
  })
}

const listByUser = (req, res) => {
  Post.find({postedBy: req.profile._id})
  .populate('postedBy', '_id name')
  .sort('-created')
  .exec((err, posts) => {
    if (err) {
      return res.status(400).json()
    }
    res.json(posts)
  })
}

const listNewsFeed = (req, res) => {
  Post.find({postedBy: { $in : req.profile } })
  .populate('postedBy', '_id name')
  .sort('-created')
  .exec((err, posts) => {
    if (err) {
      return res.status(400).json()
    }
    res.json(posts)
  })
}

const remove = (req, res) => {
  let post = req.post
    post.remove((err, deletedPost) => {
      if (err) {
        return res.status(400).json()
      }
      res.json(deletedPost)
    })
}

const isPoster = (req, res, next) => {
  let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
  if(!isPoster){
    return res.status('403').json()
  }
  next()
}

export default {
  listByUser,
  listNewsFeed,
  create,
  postByID,
  remove,
  isPoster
}
